import React from 'react';
import './sidepanel.css';

const SidePanel = ({ selectedCategory, setSelectedCategory }) => {
  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="side-panel">
      <button onClick={() => handleClick('BreakFast')}>
        Breakfast
      </button>
      <button onClick={() => handleClick('Lunch')}>
        Lunch
      </button>
      <button onClick={() => handleClick('Dinner')}>
        Dinner
      </button>
      <button onClick={() => handleClick('Dessert')}>
        Dessert
      </button>
      <button onClick={() => handleClick('Snack')}>
        Snack
      </button>
    </div>
  );
};

export default SidePanel;
