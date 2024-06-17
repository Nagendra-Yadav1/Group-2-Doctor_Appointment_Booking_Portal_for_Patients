import React from 'react';

const ClientFeedback = () => {
  const feedbacks = [
    {
      id: 1,
      name: 'John Doe',
      comment: 'Great experience using their telemedicine service. The doctors were very professional and helpful.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Jane Smith',
      comment: 'I appreciated the home visit service. It was convenient and the doctor arrived on time.',
      rating: 4,
    },
    {
      id: 3,
      name: 'Michael Johnson',
      comment: 'Multilingual support was crucial for me as English is not my first language. Great service overall!',
      rating: 4.5,
    },
    {
      id: 4,
      name: 'Emily Brown',
      comment: 'The specialist network here is impressive. I got access to the right doctor for my condition.',
      rating: 5,
    },
    {
      id: 5,
      name: 'David Lee',
      comment: 'Second opinion service helped me make an informed decision about my treatment options.',
      rating: 4.5,
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Client Feedback</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedbacks.map((feedback) => (
            <FeedbackCard key={feedback.id} {...feedback} />
          ))}
        </div>
      </div>
    </div>
  );
};

const FeedbackCard = ({ name, comment, rating }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <p className="text-gray-700 mb-4">{comment}</p>
      <div className="flex items-center mb-2">
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`h-5 w-5 text-yellow-400 ${index < Math.floor(rating) ? 'fill-current' : 'fill-none'}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 0a1 1 0 0 1 .77.36l2.56 3.19 4.59.68a1 1 0 0 1 .55 1.7l-3.29 3.2.78 4.54a1 1 0 0 1-1.45 1.05L10 14.77l-4.09 2.15a1 1 0 0 1-1.45-1.05l.78-4.54-3.29-3.2a1 1 0 0 1 .55-1.7l4.59-.68L9.23.36A1 1 0 0 1 10 0z"
              />
            </svg>
          ))}
          <span className="ml-1 text-gray-600">{rating}</span>
        </div>
      </div>
      <p className="text-gray-800 font-semibold">{name}</p>
    </div>
  );
};

export default ClientFeedback;