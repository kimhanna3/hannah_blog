import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import BlogCard from '../components/BlogCard';
import ProjectCard from '../components/ProjectCard';
import { blogPosts } from '../data/blogPosts';
import { projects } from '../data/projects';

const Home = () => {
  // Get 2 most recent blog posts
  const recentPosts = blogPosts.slice(0, 2);

  // Get featured projects
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Recent Posts Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Recent Posts</h2>
            <Link
              to="/blog"
              className="text-coral font-medium hover:text-[#FF5577] transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Featured Works</h2>
            <Link
              to="/works"
              className="text-coral font-medium hover:text-[#FF5577] transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
