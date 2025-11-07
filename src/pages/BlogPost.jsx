import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-coral hover:text-[#FF5577] transition-colors">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <article className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          to="/blog"
          className="inline-flex items-center text-coral font-medium hover:text-[#FF5577] transition-colors mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        {/* Post Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-semibold bg-baby-blue bg-opacity-30 text-gray-700 rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {post.title}
          </h1>
          <p className="text-gray-500 text-lg">{post.date}</p>
        </header>

        {/* Featured Image */}
        <div className="mb-12 h-96 bg-gradient-to-br from-baby-pink to-baby-blue rounded-xl flex items-center justify-center">
          <div className="text-9xl">
            {post.categories.includes('Technical') ? '💻' : '✍️'}
          </div>
        </div>

        {/* Post Content */}
        <div className="prose prose-lg max-w-none">
          {post.content.split('\n').map((paragraph, index) => {
            // Handle headings
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={index} className="text-3xl font-bold text-gray-800 mt-12 mb-6">
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            // Handle bold text with **
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return (
                <p key={index} className="text-gray-800 font-bold mb-4">
                  {paragraph.replace(/\*\*/g, '')}
                </p>
              );
            }
            // Handle code blocks
            if (paragraph.startsWith('```')) {
              return null; // Skip code block markers
            }
            // Handle regular paragraphs
            if (paragraph.trim()) {
              return (
                <p key={index} className="text-gray-600 leading-relaxed mb-6">
                  {paragraph}
                </p>
              );
            }
            return null;
          })}
        </div>

        {/* Back to Blog Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link
            to="/blog"
            className="inline-flex items-center text-coral font-medium hover:text-[#FF5577] transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
