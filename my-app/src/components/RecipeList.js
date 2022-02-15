import React, { useContext } from "react";
import Recipe from "./Recipe";
import { RecipeContext } from "./App";

function RecipeList(props) {
  const { handleRecipeAdd } = useContext(RecipeContext);
  const { recipes } = props;
  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
          // note how i am passing recipe items here, directly the items instead of array.
          // also if there would have been other elements b/w RecipeList and Recipe,
          // then I can use 'useContext' instead of passing recipe to all childre
          // turn by turn
        })}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button className="btn btn--primary" onClick={handleRecipeAdd}>
          Add Recipe
        </button>
      </div>
    </div>
  );
}

export default RecipeList;
