import React from "react";

function RecipeIngredientEdit({
  ingredient,
  handleIngredientChange,
  handleIngredientDelete,
}) {
  function handleChange(changes) {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
  }

  return (
    <>
      <input
        className="recipe-edit__input"
        value={ingredient.name}
        placeholder="name"
        type="text"
        onInput={(e) => handleChange({ name: e.target.value })}
      />
      <input
        className="recipe-edit__input"
        value={ingredient.amount}
        placeholder="amount"
        onInput={(e) => handleChange({ amount: e.target.value })}
        type="text"
      />
      <button
        onClick={() => handleIngredientDelete(ingredient.id)}
        className="btn btn--danger"
      >
        &times;
      </button>
    </>
  );
}

export default RecipeIngredientEdit;
