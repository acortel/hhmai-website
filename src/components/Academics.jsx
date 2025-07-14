import React from 'react';
import { Baby, Users, BookOpen, Book, CalendarDays } from 'lucide-react';

const Academics = () => {
  const programs = [
    {
      icon: Baby,
      title: 'Playgroup',
      description: 'Early childhood development program for children aged 1 to 4 years, focusing on social skills, creativity, and foundational learning through play.',
      color: 'bg-pink-500',
    },
    {
      icon: Users,
      title: 'Kindergarten',
      description: 'Preparing young learners for formal education with structured activities that develop literacy, numeracy, and social interaction skills.',
      color: 'bg-blue-500',
    },
    {
      icon: BookOpen,
      title: 'Grade 1 to Grade 3',
      description: 'Primary education focusing on fundamental reading, writing, and mathematics skills while fostering curiosity and love for learning.',
      color: 'bg-green-500',
    },
    {
      icon: Book,
      title: 'Tutorial Classes',
      description: 'Personalized academic support tailored to each student’s needs, helping them master challenging subjects and build confidence in their learning journey.',
      color: 'bg-yellow-500',
    },
    {
      icon: CalendarDays,
      title: 'Saturday Classes',
      description: 'Enriching weekend programs including Taekwondo, Violin, Dance Sports, Piano Class, Visual Arts, Voice Lessons, Ballet Class, Guitar Lesson, and Robotics, fostering creativity and holistic development.',
      color: 'bg-purple-500',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-fredoka-one text-gray-800 mb-4">
            Academic Excellence
          </h2>
          <p className="text-lg font-fredoka text-gray-600 max-w-3xl mx-auto">
            Our comprehensive curriculum is designed to nurture and inspire students 
            while providing the foundation for lifelong learning and success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto justify-items-center">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`${program.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <program.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-fredoka-one text-gray-800 mb-3">{program.title}</h3>
              <p className="font-fredoka text-gray-600 leading-relaxed">{program.description}</p>
              <button className="mt-4 text-blue-600 hover:text-blue-800 font-fredoka font-medium transition-colors duration-200">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-fredoka-one mb-4">Early Childhood Excellence</h3>
          <p className="text-lg font-fredoka mb-6 opacity-90">
            Building strong foundations for lifelong learning through age-appropriate programs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Play-Based Learning', 'Social Development', 'Creative Arts', 'Basic Literacy', 'Number Concepts', 'Motor Skills'].map((skill) => (
              <span
                key={skill}
                className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-fredoka font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;