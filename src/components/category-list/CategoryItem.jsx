import React from 'react'
import './Categories.css'
import { Link } from 'react-router-dom';

const CategoryItem = (props) => {
    const {strCategory,strCategoryThumb,strCategoryDescription} = props;
  return (
    <div class='card'>
        <div class="card-image">
          <img src={strCategoryThumb} alt={strCategory}/>
        </div>
        <div class="card-content">
        <span class="card-title">{strCategory}</span>
          <p>{strCategoryDescription.slice(0,60)}...</p>
        </div>
        <Link to={`/category/${strCategory}`} className='btn'>Watch category</Link>
      </div>
  )
}

export default CategoryItem;