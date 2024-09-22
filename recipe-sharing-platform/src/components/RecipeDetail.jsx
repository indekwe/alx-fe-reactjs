import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function RecipeDetail() {
    const {recipeId}=useParams()
    const [recipes,setRecipe]=useState([])
    const [choosenRecipe, setChoosenRecipe]=useState(null)
    useEffect(()=>{
        const fetchedData= async ()=>{
          try {
             const response= await fetch('/data.json')
             if(!response.ok){
              throw new Error(`Status: ${response.status}`)
             }
            const data =await response.json() 
            setRecipe(data)
          } catch (error) {
            console.error('error loading.....', error)
          }
           
        }
        fetchedData()
    },[])
    useEffect(()=>{
      if(recipes.length>0){
        const recipe=recipes.find((recipe)=>recipe.id/* ===Number(recipeId) */)
        setChoosenRecipe(recipe)
      }
    },[recipes,recipeId])
    if(!choosenRecipe){
      return(
        <div>Recipe .....</div>
      )
    }
  return (
    <div>
        
            <div key={choosenRecipe.id} className="m-8 p-8 ">
                <h1 className="text-green-800 lg:text-3xl md:text-2xl sm:text-xl mb-5">{choosenRecipe.title}</h1>
                <img className="rounded-full hover:shadow-2xl" src={choosenRecipe.image} alt={choosenRecipe.title} />
                <div>
                    <div>
                    <h2>Ingridients</h2>
                    <p>{choosenRecipe.ingredients}</p>
                    </div>
                    <div>
                    <h2>Cooking instructions</h2>
                    <p>{choosenRecipe.instructions}</p>
                    </div>
                </div>
          </div>
    </div>


  )
}

export default RecipeDetail
