import React, { useContext } from "react";
import { RecipeContext } from "./App";
import RecipeIngredientEdit from "./RecipeIngredientEdit";
import { v4 as uuidv4 } from "uuid";

function RecipeEdit({ recipe }) {
  const { handleRecipeChange, handleRecipeSelect } = useContext(RecipeContext);

  function handleChange(changes) {
    handleRecipeChange(recipe.id, { ...recipe, ...changes });
  }

  function handleIngredientChange(id, ingredient) {
    const newIngredients = [...recipe.ingredients];
    const index = newIngredients.findIndex(
      (ingredient) => ingredient.id === id
    );
    newIngredients[index] = ingredient;
    handleChange({ ingredients: newIngredients });
  }

  function handleIngredientAdd() {
    const newIngredient = {
      id: uuidv4(),
      name: "",
      amount: "",
    };
    handleChange({ ingredients: [...recipe.ingredients, newIngredient] });
  }
  function handleIngredientDelete(id) {
    handleChange({
      ingredients: recipe.ingredients.filter((i) => i.id !== id),
    });
  }
  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button
          onClick={() => handleRecipeSelect(undefined)}
          className="btn recipe-edit__remove-button"
        >
          &times;
        </button>
      </div>
      <div className="recipe-edit__details-grid">
        <label className="recipe-edit__label" htmlFor="name">
          Name
        </label>
        <input
          className="recipe-edit__input"
          type="text"
          name="name"
          onChange={(e) => handleChange({ name: e.target.value })}
          id="name"
          value={recipe.name}
        />
        <label className="recipe-edit__label" htmlFor="cookTime">
          Cook Time
        </label>
        <input
          className="recipe-edit__input"
          onChange={(e) => handleChange({ cookTime: e.target.value })}
          type="text"
          name="cookTime"
          id="cookTime"
          value={recipe.cookTime}
        />
        <label className="recipe-edit__label" htmlFor="servings">
          Servings
        </label>
        <input
          className="recipe-edit__input"
          onChange={(e) =>
            handleChange({ servings: parseInt(e.target.value) || "" })
          }
          type="number"
          min="1"
          name="servings"
          id="servings"
          value={recipe.servings}
        />
        <label className="recipe-edit__label" htmlFor="instructions">
          Instructions
        </label>
        <textarea
          className="recipe-edit__input"
          name="instructions"
          id="instructions"
          value={recipe.instructions}
        ></textarea>
      </div>
      <br />
      <label className="recipe-edit__label">Ingredients</label>
      <div className="recipe-edit__ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {console.log(recipe.ingredients)}
        {recipe.ingredients.map((ingredient) => {
          return (
            <RecipeIngredientEdit
              key={ingredient.id}
              ingredient={ingredient}
              handleIngredientChange={handleIngredientChange}
              handleIngredientDelete={handleIngredientDelete}
            />
          );
        })}
        {/* Ingredient Components */}
        <div className="recipe-edit__add-ingredient-btn-container">
          <button onClick={handleIngredientAdd} className="btn btn--primary">
            Add Ingredient
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeEdit;
