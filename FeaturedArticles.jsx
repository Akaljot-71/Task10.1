//FeaturedArticles.jsx
import React from 'react';
import './FeaturedArticles.css';
import { faker } from '@faker-js/faker';

const articles = [
  {
    image: faker.image.url(),
    title: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    author: faker.name.fullName(),
  },
  {
    image: faker.image.url(),
    title: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    author: faker.name.fullName(),
  },
  {
    image: faker.image.url(),
    title: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    author: faker.name.fullName(),
  },
];

function FeaturedArticles() {
  return (
    <div className="featured-articles">
      {
        articles.map(function(article) {
          return (
            <div className="article">
              <img src={article.image} alt={article.title} />
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <p>By {article.author}</p>
            </div>
          );
        })
      }
    </div>
  );
}
export default FeaturedArticles;
