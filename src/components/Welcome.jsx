import React from 'react';

const Welcome = () => {
  return (
    <section className="py-20 bg-pastel-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-fredoka-one text-gray-800 mb-6">
              Welcome to Harmony Heights Montessori Academy, Inc.
            </h2>
            <p className="text-lg font-fredoka text-gray-600 mb-6 leading-relaxed">
              For over 50 years, Harmony Heights Montessori Academy has been committed to providing exceptional 
              Montessori education that nurtures young minds and builds character. Our dedicated faculty 
              and innovative Montessori programs create an environment where students thrive academically, 
              socially, and personally.
            </p>
            <p className="text-lg font-fredoka text-gray-600 mb-8 leading-relaxed">
              We believe in fostering independence, creativity, and love of learning through the proven 
              Montessori method that prepares our students for success in an ever-changing world.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-fredoka font-semibold transition-colors duration-200">
              Learn More About Us
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Students in classroom"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
              <p className="text-2xl font-fredoka-one">Est. 1973</p>
              <p className="text-sm font-fredoka">50+ Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;