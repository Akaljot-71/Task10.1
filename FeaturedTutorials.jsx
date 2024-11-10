//FeaturedTutorials.jsx
import React from 'react';
import './FeaturedTutorials.css';
import { faker } from '@faker-js/faker';


const tutorials = [
  {
    image: faker.image.url(),
    title: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    host: faker.name.fullName(),
  },
  {
    image: faker.image.url(),
    title: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    host: faker.name.fullName(),
  },
  {
    image: faker.image.url(),
    title: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    host: faker.name.fullName(),
  },
];

function FeaturedTutorials() {
  return (
    <div className="featured-tutorials">
      {
        tutorials.map(function(tutorial) {
          return (
            <div className="tutorial">
              <img src={tutorial.image} alt={tutorial.title} />
              <h3>{tutorial.title}</h3>
              <p>{tutorial.description}</p>
              <p>By {tutorial.host}</p>
            </div>
          );
        })
      }
    </div>
  );
}

export default FeaturedTutorials;
