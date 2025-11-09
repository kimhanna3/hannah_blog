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
                I'm a recent Grinnell College grad with a dual focus in Statistics and Biology, currently diving into data at Argonne National Laboratory as a SULI Data Scientist. My work blends data science, AI/ML, and storytelling—often through interactive visualizations that make even the messiest datasets sing.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Whether I'm analyzing vehicle trends or optimizing group assignments with custom-built R packages, I love turning raw data into real-world impact. I especially enjoy working on projects at the intersection of healthcare, sustainability, and technology, and I'm always looking for ways to level up my Python, R, and SQL chops (bonus points if it involves machine learning or cool Sankey plots).
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Outside the screen, you'll probably find me in the kitchen cooking up a storm of Korean comfort food, reading thriller novels that keep me up too late, or button-mashing my way through PS5 and Nintendo Switch games with my boyfriend and our energetic pup, Zoro.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This site is my little corner of the internet to share what I'm building, learning, and thinking about—whether it's a new data viz, a tech write-up, or just something I found fascinating this week. Thanks for stopping by!
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
