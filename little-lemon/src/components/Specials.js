import React from 'react';

const specialsData = [
  // Add your specials data here
];

const Specials = () => {
  return (
    <section className="specials">
      <h2>Specials</h2>
      <div className="specials-container">
        {specialsData.map((special, index) => (
          <div key={index} className="special-item">
            <h3>{special.name}</h3>
            <p>{special.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specials;
