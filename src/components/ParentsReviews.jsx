import React, { useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const ParentsReviews = () => {
  const reviews = [
    {
      name: 'Mrs. Nikilyn Espina',
      rating: 5,
      review: "I would love to share my wonderful experience with my son's summer playgroup class. The teachers are always smiling, positive, patient, and friendly. Their approach to teaching and interacting with the kids is commendable. I particularly appreciate the teacher sending me updates with pictures and videos of my son's activities at school. It's wonderful to see his progress and joy throughout the day.",
    },
    {
      name: 'Mrs. Jheelyn P. Dator',
      rating: 5,
      review: "I am so very thankful to Harmony Heights Montessori Academy Inc. for offering this summer program. It was a great venue for my daughter to learn and developed her reading and writing skills. Truly all the teachers are so kind and accommodating they let my daughter experienced not just only becoming a student but also a teacher as well. Keep it up and God speed!",
    },
    {
      name: 'Mrs. Roselle D. Timkang',
      rating: 5,
      review: "We are very much satisfied, his development is very good. It helps to improve his reading skills. He is learning a lot of new things daily and communicating to us very well. We appreciate the efforts of the teacher for putting such effort to our kids.",
    },
    {
      name: 'Mrs. Divine Grace Refuelo',
      rating: 5,
      review: "My child has made notable progress in her reading and writing skills during the summer class. She can now read two to three letters in just a month. I was particularly impressed with the variety of activities that kept the children engaged and excited to learn. My child's learning would not have improved without Teacher Rui's patience and excellent teaching. For that, I am especially grateful.",
    },
    {
      name: 'Mrs. Crisbe Sanchez Elorcha',
      rating: 5,
      review: "I'm so thankful that I enrolled KC at Harmony Heights Montessori summer class because there's real development. She can also identify some pictures and parts of the body. She also makes friends. Even in just an hour of sumer class, she's active and she enjoys her time doing the activities.",
    },
    {
      name: 'Mrs. Wencel Marie Laroa',
      rating: 5,
      review: "Thank you for enhancing our children's reading skills in just a short span of time. Your patience and dedication have made a significant impact, we are truly grateful for your efforts. ",
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
                  <h4 className="font-fredoka font-semibold text-gray-800 text-center">{review.name}</h4>
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
      </div>
    </section>
  );
};

export default ParentsReviews;