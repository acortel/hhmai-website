import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const News = () => {
  const news = [
    {
      title: 'Harmony Heights Montessori Academy Wins Regional Science Fair',
      excerpt: 'Our students took home three first-place awards in the annual regional science competition.',
      date: '2024-01-15',
      readTime: '3 min read',
      image: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Achievement',
    },
    {
      title: 'New STEM Laboratory Opens',
      excerpt: 'State-of-the-art laboratory facility enhances our science and technology programs.',
      date: '2024-01-10',
      readTime: '2 min read',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Facility',
    },
    {
      title: 'Spring Arts Festival Announced',
      excerpt: 'Join us for our annual celebration of student creativity and artistic expression.',
      date: '2024-01-08',
      readTime: '2 min read',
      image: 'https://images.pexels.com/photos/1887946/pexels-photo-1887946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Event',
    },
  ];

  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-fredoka-one text-gray-800 mb-4">
            Latest News & Events
          </h2>
          <p className="text-lg font-fredoka text-gray-600 max-w-3xl mx-auto">
            Stay up to date with the latest happenings, achievements, and events at Westfield Academy.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-fredoka font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm font-fredoka text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{formatDate(item.date)}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{item.readTime}</span>
                </div>
                
                <h3 className="text-xl font-fredoka-one text-gray-800 mb-3 leading-tight">
                  {item.title}
                </h3>
                
                <p className="font-fredoka text-gray-600 mb-4 leading-relaxed">
                  {item.excerpt}
                </p>
                
                <button className="flex items-center text-blue-600 hover:text-blue-800 font-fredoka font-medium transition-colors duration-200 group">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-fredoka font-semibold transition-colors duration-200">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;