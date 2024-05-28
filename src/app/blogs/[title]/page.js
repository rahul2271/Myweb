"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { db } from '../../../../firebase'; // Adjust the import path based on your project structure
import { collection, getDocs, query, where } from 'firebase/firestore';
import Image from 'next/image';
import DOMPurify from 'dompurify';
import styles from './blogContent.module.css'; // Import custom styles

export default function BlogPostPage() {
  const { title } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const decodedTitle = decodeURIComponent(title);
        const q = query(collection(db, 'blogs'), where('slug', '==', decodedTitle));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const blogData = querySnapshot.docs[0].data();
          setPost({ ...blogData });
        } else {
          setPost(null);
        }
      } catch (error) {
        console.error("Error fetching blog post: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [title]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Blog post not found</div>;
  }

  // Sanitize the content
  const sanitizedContent = DOMPurify.sanitize(post.content);

  return (
    <div className='m-5'>
      <div className="relative w-full h-64 md:h-96">
        <Image
          className="rounded-t-lg object-cover"
          src={post.blogImageUrl}
          alt={post.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className='text-center my-5 text-3xl uppercase'>{post.title}</h1>
      <div
        className={`${styles['blog-content']} my-5`} // Apply custom styles
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      ></div>
      <p className='text-sm text-gray-400 mb-5'><em>By {post.author} on {post.date}</em></p>
      <hr className='border border-gray-500' />
    </div>
  );
}
