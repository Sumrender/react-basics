// import React from 'react'
// import Ingredient from './Ingredient';

// function IngredientList({ ingredients  }) {
//   const ingredientElements = ingredients.map(ingredient => {
//     return <Ingredient key={ingredient.id} {...ingredients}/>
//   })
//   return (
//     <div className='ingredient-list'>
//       {ingredientElements}
//     </div>
//   )
// }

// export default IngredientList;

import React from "react";
import Ingredient from "./Ingredient";

function IngredientList({ ingredients }) {
  return (
    <div className="ingredient-list">
      {ingredients.map((ingredient) => {
        return <Ingredient key={ingredient.id} {...ingredient} />;
      })}
    </div>
  );
}

export default IngredientList;
