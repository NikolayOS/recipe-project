import React from 'react'
import Meal from './Meal';
import './Meals.css'

const MealsList = (props) => {
    const {meals} = props;
  return (
    <div className='mealsList'>
    {meals.map(meal => <Meal key={meal.idMeal} {...meal}/>)}
    </div>
  )
}

export default MealsList;