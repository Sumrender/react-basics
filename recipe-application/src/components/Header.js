import React from 'react'

function Header() {
  return (
    <div className='header'>
      <button className='site-name'>RecipeBook</button>
      <div className='links'>
        <button className='link'>All Recipes</button>
        <button className='link'>Upload Recipe</button>
        <button className='link'>About</button>
        <button className='link'>Contact</button>
      </div>
    </div>
  )
}

export default Header;