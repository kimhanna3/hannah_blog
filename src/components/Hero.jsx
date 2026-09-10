import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-baby-pink shadow-xl">
              <img
                src="/profile.jpg"
                alt="Hannah Kim"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Hi, I am <span className="text-coral">Hannah Kim</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
              Data Scientist
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 leading-relaxed mb-4">
                I'm a Grinnell College grad with a background in Biology and Statistics, currently pursuing my Master's in Analytics at Georgia Tech while managing operations at Samsung Electronics America. My work sits at the intersection of data science, operational strategy, and AI—from building forecasting models to optimize repair supply chains, analyzing massive datasets, or designing interactive visualizations that make complex data clear and actionable.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                As an AI Experience (AX) committee member at Samsung, I love helping teams adopt AI tools to eliminate manual busywork and work smarter. At Samsung, I've been focused on building forecasting models to fix supply chain bottlenecks, and during my SULI internship at Argonne, I analyzed electric vehicle adoption trends across the U.S. Across both roles, I love taking messy, complex data and using tools like Python, R, and SQL to make operations run smoother.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Outside of work, you'll usually find me training for my next race (currently eyeing my first half-marathon after tackling 5Ks and 10Ks), hunting down local coffee spots and new restaurants, binge-watching crime investigation shows, or cooking up Korean food.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This site is my little corner of the internet to share what I'm building, learning, and thinking about—whether it's a new data project, a tech write-up, or a topic I found fascinating this week. Thanks for stopping by!
              </p>
            </div>
            <Button href="/resume.pdf" variant="primary">
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
