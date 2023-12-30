import React from 'react'
import CategoryItem from './CategoryItem';
import './Categories.css'

const CategoryList = (props) => {
    const {catalog = []} = props;
  return (
    <div className='categoryList'>
        {catalog.map(item => (
        <CategoryItem key={item.idCategory} {...item}/>
        ))}
    </div>
  )
}

export default CategoryList;