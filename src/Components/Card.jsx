// Card.js
import React from 'react';
import CardItem from './CardItem';
import Entre from '../entre.png';
import Ciel from '../ciel.png';
import Para from '../para.png';
import '../Components/card.css';

const Card = () => {
  const cardData = [
    {
      title: '7/24 LIVE HELP',
      category: 'Enterprise Solutions',
      image: Entre,
      description:
        'Canned responses are used to answer the questions quickly, but not necessarily lead to closing a sale. Faster response Right tone of language',
    },
    {
      title: 'CLOUD DATABASE',
      category: 'Enterprise Solutions',
      image: Para,
      description:
        'Canned responses are used to answer the questions quickly, but not necessarily lead to closing a sale. Faster response Right tone of language',
    },
    {
      title: 'ENTERPRISE ACCOUNT',
      category: 'Pricing',
      image: Ciel,
      description:
        'Canned responses are used to answer the questions quickly, but not necessarily lead to closing a sale. Faster response Right tone of language',
    },
  ];

  return (
    <div className="carde">
      {cardData.map((card, index) => (
        <CardItem
          key={index}
          title={card.title}
          category={card.category}
          image={card.image}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default Card;
