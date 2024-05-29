// page.js
'use client'
import React from 'react';
import AddBlogs from './Addblogs/page';
import AllBlogs from './AllBlogs/page';

const Page = () => {
  return (
    <>
      <AddBlogs />
      <AllBlogs />
    </>
  );
};

export default Page;
