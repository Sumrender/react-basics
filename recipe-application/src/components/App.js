import React, { useState, useEffect } from "react";
import "../css/app.css";
// import Header from "./Header";
import RecipeList from "./RecipeList";
import { v4 as uuidv4 } from "uuid";
import RecipeEdit from "./RecipeEdit";

export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = "cookingWithReact.recipes";

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipes, setRecipes] = useState(sampleRecipes);
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );
  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON) setRecipes(JSON.parse(recipeJSON));
    else console.log("recipeJSON not found");
  }, []);

  useEffect(() => {
    console.log("useEffect loaded");
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "new",
      servings: 1,
      cookTime: "1:00",
      instructions: "instr.",
      ingredients: [{ id: uuidv4(), name: "name", amount: "1 Tbsp" }],
    };
    setSelectedRecipeId(newRecipe.id);
    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeDelete(id) {
    if (selectedRecipeId != null && selectedRecipeId === id) {
      setSelectedRecipeId(undefined);
    }
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  function handleRecipeSelect(id) {
    setSelectedRecipeId(id);
  }

  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex((recipe) => recipe.id === id);
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  }

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange,
  };
  return (
    <RecipeContext.Provider value={recipeContextValue}>
      {/* <Header />  */}
      <div className="body-wrapper">
        <RecipeList recipes={recipes} />
        {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
      </div>
    </RecipeContext.Provider>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions:
      "1. Put salt on chicken.\n2. Put chicken in oven.\n3. Eat chicken.",
    ingredients: [
      {
        id: 1,
        name: "chicken",
        amount: "2 Pounds",
      },
      {
        id: 2,
        name: "salt",
        amount: "2 Tbsp",
      },
      {
        id: 3,
        name: "Chili",
        amount: "1 Tbsp",
      },
    ],
  },
  {
    id: 2,
    name: "Pork",
    servings: 2,
    cookTime: "3:45",
    instructions: "1. Put paprika on pork.\n2. Put pork in oven.",
    ingredients: [
      {
        id: 1,
        name: "pork",
        amount: "3 Pounds",
      },
      {
        id: 2,
        name: "paprika",
        amount: "1 Tbsp",
      },
    ],
  },
];

export default App;
