import React from 'react'
import { Link } from 'react-router-dom';
import './Meals.css'

const Meal = (props) => {
    const {strMeal, idMeal, strMealThumb} = props;
  return (
    <div class='card'>
    <div class="card-image">
      <img src={strMealThumb} alt={strMeal}/>
    </div>
    <div class="card-content">
    <span class="card-title">{strMeal}</span>
    </div>
    <Link to={`/meal/${idMeal}`} className='btn'>Recipe</Link>
  </div>
  )
}

export default Meal;    