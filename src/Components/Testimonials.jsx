

import PropTypes from 'prop-types';

function TestimonialCard(props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <p className="text-gray-600 mb-4">{props.content}</p>
      <div className="flex items-center">
        <img src={props.image} alt={props.name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="font-semibold">{props.name}</h4>
          <p className="text-gray-500 text-sm">{props.role}</p>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'Entrepreneur',
      content: 'This platform has revolutionized the way I manage my investments. Highly recommended!',
      image: '/placeholder.svg?height=100&width=100',
    },
    {
      name: 'Jane Smith',
      role: 'Financial Advisor',
      content: 'I\'ve been using this platform for my clients, and the results have been outstanding.',
      image: '/placeholder.svg?height=100&width=100',
    },
    {
      name: 'Mike Johnson',
      role: 'Retired Teacher',
      content: 'As a retiree, I was looking for a safe way to grow my savings. This platform exceeded my expectations.',
      image: '/placeholder.svg?height=100&width=100',
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(function(testimonial, index) {
            return (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                image={testimonial.image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default Testimonials;

