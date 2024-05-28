import React from 'react';
import './sidepanel.css';

const SidePanel = ({ selectedCategory, setSelectedCategory }) => {
  const categories = ['breakfast', 'lunch', 'dinner', 'dessert', 'snack'];

  return (
    <div className="side-panel">
      {categories.map(category => (
        <a
          key={category}
          href="#!"
          className={selectedCategory === category ? 'selected' : ''}
          onClick={() => setSelectedCategory(category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </a>
      ))}
    </div>
  );
};

export default SidePanel;
