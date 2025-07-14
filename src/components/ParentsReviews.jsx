import React, { useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const ParentsReviews = () => {
  const reviews = [
    {
      name: 'Sarah Mitchell',
      role: 'Parent of Emma (Grade 8)',
      rating: 5,
      review: 'Harmony Heights Montessori Academy has exceeded our expectations in every way. The teachers are incredibly dedicated, and my daughter has grown both academically and personally. The school truly cares about each student\'s individual success.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Parent of Alex (Grade 10)',
      rating: 5,
      review: 'The academic programs are outstanding, and the extracurricular activities have helped my son discover his passion for robotics. The communication between teachers and parents is excellent.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    },
    {
      name: 'Jennifer Chen',
      role: 'Parent of Lily (Grade 6)',
      rating: 5,
      review: 'Moving to Harmony Heights Montessori Academy was the best decision we made for our daughter. The supportive Montessori environment and innovative teaching methods have made learning enjoyable and engaging.',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    },
    {
      name: 'David Thompson',
      role: 'Parent of Marcus (Grade 12)',
      rating: 5,
      review: 'The Montessori approach has been exceptional for our son. He received personalized guidance and developed strong independence and critical thinking skills. Thank you, Harmony Heights!',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    },
    {
      name: 'Lisa Anderson',
      role: 'Parent of Sophie (Grade 9)',
      rating: 5,
      review: 'The teachers at Harmony Heights Montessori Academy go above and beyond. They recognize each child\'s unique strengths and provide the Montessori support needed to help them thrive. We couldn\'t be happier.',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    },
    {
      name: 'Robert Kim',
      role: 'Parent of Daniel (Grade 7)',
      rating: 5,
      review: 'The school\'s commitment to character development alongside academic excellence is remarkable. My son has become more confident and responsible since joining Harmony Heights Montessori Academy.',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    },
  ];

  const scrollRef = useRef(null);

  const scrollByAmount = 320; // px, roughly the width of one card + gap

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollByAmount : scrollByAmount,
        behavior: 'smooth',
      });
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-pastel-pink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-fredoka-one text-gray-800 mb-4">
            How do parents feel about our school?
          </h2>
          <p className="text-lg font-fredoka text-gray-600 max-w-3xl mx-auto">
            Hear from the families who trust us with their children's education and future.
          </p>
        </div>

        {/* Scrollable Reviews Container with Arrows */}
        <div className="relative min-w-0">
          {/* Left Arrow */}
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => handleScroll('left')}
            className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-80 hover:bg-opacity-100 shadow-md rounded-full w-10 h-10 border border-gray-200 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </button>

          {/* Scrollable Flex Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto pb-6 space-x-6 scrollbar-hide w-full"
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex-none w-80 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Quote Icon */}
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Quote className="h-6 w-6 text-blue-600" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {renderStars(review.rating)}
                </div>

                {/* Review Text */}
                <p className="font-fredoka text-gray-700 text-center mb-6 leading-relaxed italic">
                  "{review.review}"
                </p>

                {/* Parent Info */}
                <div className="flex flex-col items-center">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover mb-3"
                  />
                  <h4 className="font-fredoka font-semibold text-gray-800 text-center">{review.name}</h4>
                  <p className="text-sm font-fredoka text-gray-600 text-center">{review.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => handleScroll('right')}
            className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-80 hover:bg-opacity-100 shadow-md rounded-full w-10 h-10 border border-gray-200 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-blue-600" />
          </button>

          {/* Scroll Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 bg-gray-300 rounded-full"
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg font-fredoka text-gray-600 mb-6">
            Join our community of satisfied families
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-fredoka font-semibold transition-colors duration-200">
            Schedule a Visit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ParentsReviews;