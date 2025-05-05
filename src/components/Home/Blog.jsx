import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const blogs = [
  {
    id: 1,
    date: '20 Dec',
    category: 'Technology',
    comments: 0,
    title: "What's the Holding Back the IT Solution",
    author: 'Ronald Walker',
    image: '/img/holi.jpg'
  },
  {
    id: 2,
    date: '20 Dec',
    category: 'Technology',
    comments: 0,
    title: 'Powerful Server and Platform',
    author: 'Ronald Walker',
    image: '/img/hackaton.png'
  },
  {
    id: 3,
    date: '15 Dec',
    category: 'Technology',
    comments: 0,
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor cum totam inventore officia nisi, ullam ut minima quis deleniti, labore consequatur? Enim dolores at voluptatem voluptatibus. Maiores minima accusantium nihil.',
    author: 'Ronald Walker',
    image: '/img/group.jpg'
  }
];

export default function Blog() {
  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <div className="text-orange-600 text-sm font-semibold mb-2">LATEST NEWS & BLOG</div>
            <h2 className="text-4xl font-bold text-indigo-900">Explore News & Blog</h2>
          </div>
          <button className="flex items-center gap-2 bg-orange-600 text-white py-2 px-6 rounded-full hover:scale-105 transition">
            View All Blogs <ArrowUpRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-8">
            {blogs.slice(0, 2).map((blog) => (
              <div key={blog.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="relative">
                  <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
                  <div className="absolute top-4 left-4 bg-orange-600 text-white text-sm font-bold px-3 py-1 rounded-lg">
                    {blog.date}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-400 text-sm gap-4 mb-4">
                    <span>{blog.category}</span>
                    <span>{blog.comments} Comments</span>
                  </div>
                  <h3 className="text-blue-900 font-bold text-lg mb-4">
                    {blog.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                    <span>
                      By <span className="text-blue-600">Admin</span> {blog.author}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition h-full flex flex-col">
              <div className="relative">
                <img src={blogs[2].image} alt={blogs[2].title} className="w-full h-96 object-cover" />
                <div className="absolute top-4 left-4 bg-orange-600 text-white text-sm font-bold px-3 py-1 rounded-lg">
                  {blogs[2].date}
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center text-gray-400 text-sm gap-4 mb-4">
                    <span>{blogs[2].category}</span>
                    <span>{blogs[2].comments} Comments</span>
                  </div>
                  <h3 className="text-blue-900 font-bold text-lg mb-4">
                    {blogs[2].title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    From luxury and economy cars and find out which best suits your lifestyle economy cars and find.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                  <span>
                    By <span className="text-blue-600">Admin</span> {blogs[2].author}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
