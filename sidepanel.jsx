
import React from 'react';
import './sidepanel.css';

const SidePanel = ({ selectedCategory, setSelectedCategory }) => {
  const categories = ['BreakFast', 'Lunch', 'Dinner', 'Dessert', 'Snack'];

  return (
    <div className="side-panel">
      {categories.map(category => (
        <a
          key={category}
          href="#!"
          className={selectedCategory === category ? 'selected' : ''}
          onClick={() => setSelectedCategory(category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
        </a>
      ))}
    </div>
  );
};

export default SidePanel;
