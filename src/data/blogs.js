import { slugify } from '../app/utils/slugify';
import imagepic from '../../public/contact.jpg'

const blogs = [
  {
    id: 1,
    title: "first",
    content: "This is the content of the first blog post.",
    image: imagepic,
    date: "2024-05-21",
    author: "Author One",
    slug: slugify("first")
  },
  {
    id: 2,
    title: "Second Blog Post",
    content: "This is the content of the second blog post.",
    image: imagepic,
    date: "2024-05-22",
    author: "Author Two",
    slug: slugify("Second Blog Post")
  },
  {
    id: 3,
    title: "Third Blog Post",
    content: "This is the content of the third blog post.",
    image: imagepic,
    date: "2024-05-23",
    author: "Author Three",
    slug: slugify("Third Blog Post")
  }
  // Add more blog objects as needed
];

export default blogs;