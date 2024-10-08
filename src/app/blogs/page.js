"use client";

import { useEffect, useState } from 'react';
import { db } from '../../../firebase'; 
import { collection, getDocs } from 'firebase/firestore';
import Image from 'next/image';
import Link from 'next/link';

const stripHtmlTags = (html) => {
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsCollection = collection(db, 'blogs');
        const blogsSnapshot = await getDocs(blogsCollection);
        const blogsList = blogsSnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
          };
        });
        setBlogs(blogsList);
      } catch (error) {
        console.error("Error fetching blogs: ", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="container mx-auto p-4 mt-10">
      <div className="flex flex-wrap -mx-2 px-5">
        {blogs.map((blog) => (
          <div key={blog.id} className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4 overflow-hidden">
            <div className="bg-white p-4 shadow-lg rounded-lg h-[400px] overflow-hidden">
              <Link href={`/blogs/${blog.slug}`} legacyBehavior>
                <a>
                  <div className='max-h-[180px] h-[180px] rounded-lg'>
                    <Image 
                      className="rounded-t-lg object-cover max-h-[180px] h-[180px]" 
                      src={blog.blogImageUrl} // Ensure the correct field name
                      alt={blog.title} 
                      width={600} 
                      height={400} 
                      layout="responsive" 
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2 text-gray-700">{blog.title}</h2>
                    <p className="text-gray-700 text-sm mb-2">By {blog.author} on {blog.date}</p>
                    <p className="text-gray-700">{stripHtmlTags(blog.content).slice(0, 100)}...</p>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
