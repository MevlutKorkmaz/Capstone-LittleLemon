import React from 'react';

const testimonials = [
  // Add your testimonials data here
];

const CustomersSay = () => {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <img src={testimonial.image} alt={testimonial.name} />
            <p>{testimonial.feedback}</p>
            <p><strong>{testimonial.name}</strong></p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomersSay;
