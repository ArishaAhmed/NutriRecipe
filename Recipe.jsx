// import React from 'react';
// import './Recipe.css';
// import recipeImage from './dish.png'; // Ensure this path is correct

// const Recipe = () => {
//   return (
//     <div className="recipe-container">
//       <h1 className="recipe-title">Dark Chocolate Frozen Banana Bites</h1>
      
//       <div className="recipe-content">
//         <div className="ingredients">
//           <h2>Ingredients</h2>
//           <ul>
//             <li>1 banana</li>
//             <li>3 ounces dark chocolate, 70% cocoa or greater</li>
//             <li>1/2 teaspoon instant espresso</li>
//           </ul>
//         </div>
//         <div className="recipe-image">
//           <img src={recipeImage} alt="Dark Chocolate Frozen Banana Bites" />
//         </div>
//       </div>

//       <div className="instructions">
//         <h2>Instruction</h2>
//         <ul>
//           <li>Slice banana into 16 quarter-inch slices.</li>
//           <li>Skewer each slice with two prong skewers and place on wax paper; freeze for one hour.</li>
//           <li>Create double boiler by placing metal bowl over saucepan with one inch of simmering water. Add chocolate, espresso coffee and stir continually until 3/4 melted.</li>
//           <li>Remove bowl from heat and continue stirring until completely melted.</li>
//           <li>Take banana slices from freezer and dip in chocolate until completely coated, allowing excess chocolate to drip off.</li>
//           <li>Place on wax paper and refrigerate for 30 minutes.</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Recipe;

import React from 'react';
import './Recipe.css';
import recipeImage from './dish.png'; // Ensure this path is correct

const Recipe = () => {
  return (
    <div className="recipe-container">
      <h1 className="recipe-title">Dark Chocolate Frozen Banana Bites</h1>
      
      <div className="recipe-content">
        <div className="text-content">
          <div className="ingredients">
            <h2>Ingredients</h2>
            <ul>
              <li>1 banana</li>
              <li>3 ounces dark chocolate, 70% cocoa or greater</li>
              <li>1/2 teaspoon instant espresso</li>
            </ul>
          </div>

          <div className="instructions">
            <h2>Instructions</h2>
            <ul>
              <li>Slice banana into 16 quarter-inch slices.</li>
              <li>Skewer each slice with two prong skewers and place on wax paper; freeze for one hour.</li>
              <li>Create double boiler by placing metal bowl over saucepan with one inch of simmering water. Add chocolate, espresso coffee and stir continually until 3/4 melted.</li>
              <li>Remove bowl from heat and continue stirring until completely melted.</li>
              <li>Take banana slices from freezer and dip in chocolate until completely coated, allowing excess chocolate to drip off.</li>
              <li>Place on wax paper and refrigerate for 30 minutes.</li>
            </ul>
          </div>
        </div>
        <div className="recipe-image">
          <img src={recipeImage} alt="Dark Chocolate Frozen Banana Bites" />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
