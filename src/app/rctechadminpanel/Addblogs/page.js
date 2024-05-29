import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { db, storage } from '../../../../firebase';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const AddBlogs = () => {
  const [blogData, setBlogData] = useState({
    author: '',
    content: '',
    date: '',
    slug: '',
    title: '',
  });

  const [blogImage, setBlogImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setBlogData({ ...blogData, [e.target.name]: e.target.value });
  };

  const handleContentChange = (value) => {
    setBlogData({ ...blogData, content: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setBlogImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Ensure slug is set correctly
      const blogDataWithSlug = {
        ...blogData,
        slug: blogData.title.toLowerCase().replace(/ /g, '-')
      };

      // Add blog data without image URL first
      const docRef = await addDoc(collection(db, 'blogs'), blogDataWithSlug);
      console.log('Document written with ID: ', docRef.id);

      let blogImageUrl = '';
      if (blogImage) {
        const blogRef = ref(storage, `blogs/${docRef.id}/blogImage`);
        await uploadBytes(blogRef, blogImage);
        console.log('Uploaded a blob or file!');
        blogImageUrl = await getDownloadURL(blogRef);
        console.log('File available at', blogImageUrl);
      }

      // Update blog data with image URL
      const blogDataWithImage = {
        ...blogDataWithSlug,
        blogImageUrl,
      };

      await updateDoc(doc(db, 'blogs', docRef.id), blogDataWithImage);
      console.log('Document successfully updated!');

      // Reset form
      setBlogData({
        author: '',
        content: '',
        date: '',
        slug: '',
        title: '',
      });
      setBlogImage(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }

      alert('Blog data uploaded successfully!');
    } catch (error) {
      console.error('Error uploading blog data:', error);
      alert('Error uploading blog data. Please try again later.');
    }
  };

  return (
    <div className="container mx-auto mt-5">
      <form onSubmit={handleSubmit} className="flex flex-wrap">
        <div className="w-full lg:w-1/2 p-2">
          <label>Author</label>
          <input
            type="text"
            name="author"
            value={blogData.author}
            onChange={handleChange}
            className="border p-2 rounded-md w-full bg-gray-700"
          />
        </div>
        <div className="w-full lg:w-1/2 p-2">
          <label>Content</label>
          <ReactQuill
            value={blogData.content}
            onChange={handleContentChange}
            className="border rounded-md w-full bg-gray-700"
            theme="snow"
            modules={{
              toolbar: [
                [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                ['bold', 'italic', 'underline'],
                [{ 'align': [] }],
                ['image', 'video'],
              
              ]
            }}
            style={{ color: 'black', backgroundColor: 'white' }} 
          />
        </div>
        <div className="w-full lg:w-1/2 p-2">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={blogData.date}
            onChange={handleChange}
            className="border p-2 rounded-md w-full bg-gray-700"
          />
        </div>
        <div className="w-full lg:w-1/2 p-2">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={blogData.title}
            onChange={handleChange}
            className="border p-2 rounded-md w-full bg-gray-700"
          />
        </div>
        <div className="w-full lg:w-1/2 p-2">
          <label>Slug</label>
          <input
            type="text"
            name="slug"
            value={blogData.title.toLowerCase().replace(/ /g, '-')}
            onChange={handleChange}
            className="border p-2 rounded-md w-full bg-gray-700"
            disabled
          />
        </div>
        <div className="w-full lg:w-1/2 p-2">
          <label>Blog Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="border p-2 rounded-md w-full bg-gray-700"
            ref={fileInputRef}
          />
        </div>
        <div className="w-full p-2">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800"
          >
            Upload Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlogs;
