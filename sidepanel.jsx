import React from 'react';
import './sidepanel.css';

const SidePanel = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="side-panel">
      <button onClick={() => setSelectedCategory('breakfast')}>
        Breakfast
      </button>
      <button onClick={() => setSelectedCategory('lunch')}>
        Lunch
      </button>
      <button onClick={() => setSelectedCategory('dinner')}>
        Dinner
      </button>
      <button onClick={() => setSelectedCategory('dessert')}>
        Dessert
      </button>
      <button onClick={() => setSelectedCategory('snack')}>
        Snack
      </button>
    </div>
  );
};

export default SidePanel;
