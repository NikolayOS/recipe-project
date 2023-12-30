import React,{useEffect,useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import { getFilteredByCategory } from '../../api';
import Preloader from '../preloader/Preloader';
import MealsList from '../meals-list/MealsList';

const Category = () => {
    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getFilteredByCategory(name).then(data => setMeals(data.meals));
    },[name])
  return (
    <>
      <button className='btn-small' onClick={() => navigate(-1)} style={{margin:"10px"}}>Go back</button>
    {!meals.length ? <Preloader/> : <MealsList meals={meals}/>}
    </>
  )
}

export default Category;