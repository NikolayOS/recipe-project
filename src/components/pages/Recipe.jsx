import React,{useEffect,useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import {getMealDetailsById} from '../../api'
import Preloader from '../preloader/Preloader'

const Recipe = () => {
    const [recipe,setRecipe] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    console.log(recipe)
    useEffect(() => {
        getMealDetailsById(id).then(data => setRecipe(data.meals[0]))
    },[id])
  return (
    <>
    {!recipe.idMeal ? <Preloader/> : 
    <div style={{marginTop: "10px"}}>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{maxWidth: "100%"}}/>
        <h1>{recipe.strMeal}</h1>
        <h4>Category:{recipe.strCategory}</h4>
        {recipe.strArea ? <h4>Area:{recipe.strArea}</h4> : null}
        <p>{recipe.strInstructions}</p>
        <table className='centered'>
            <thead>
                <tr>
                    <th>Ingredient</th>
                    <th>Measure</th>
                </tr>
            </thead>
            <tbody>
            {
                Object.keys(recipe).map(key => {
                    if(key.includes("Ingredient") && recipe[key]){
                        return(
                            <tr key={key}>
                                <td>{recipe[key]}</td>
                                <td>{
                                    recipe[`strMeasure${key.slice(13)}`]
                                    }</td>
                            </tr>
                        )
                    }
                    return null
                })
            }
            </tbody>
        </table>
        {!recipe.strYoutube ? null : (
            <div className="row">
                <h5>Video recipe</h5>
                <iframe style={{width:"600px",height:"350px"}} title={id} 
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowfullscreen/>
            </div>
        )}
    </div>
    }
        <button className='btn-small' onClick={() => navigate(-1)} style={{margin: "10px"}}>Go back</button>
    </>
  )
}

export default Recipe;