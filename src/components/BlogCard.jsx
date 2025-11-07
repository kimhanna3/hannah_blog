import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post, showExcerpt = true }) => {
  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="h-48 bg-gradient-to-br from-baby-pink to-baby-blue flex items-center justify-center">
        <div className="text-6xl">
          {post.categories.includes('Technical') ? '💻' : '✍️'}
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.categories.map((category, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-semibold bg-baby-blue bg-opacity-30 text-gray-700 rounded-full"
            >
              {category}
            </span>
          ))}
        </div>
        <Link to={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-coral transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 mb-3">{post.date}</p>
        {showExcerpt && (
          <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        )}
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center text-coral font-medium hover:text-[#FF5577] transition-colors"
        >
          Read More
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
