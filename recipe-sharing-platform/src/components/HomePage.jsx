import { useState, useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";
import React from 'react'

function HomePage() {
    const [recipes,setRecipe]=useState([])
    const navigate=useNavigate()
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
    const handleClick=(id)=>navigate(`recipe/${id}`)
  return (
      <div>
        <div className="bg-fuchsia-200 sm:bg-slate-200 md:bg-amber-500 w-full sm:h-16 h-32 pt-2 text-center ">
        <h1 className="font-extrabold text-red-950"><Link to='/'>RICE RECIPES</Link></h1>
        <h4 className="text-rose-800">"Swallow neatness"</h4>
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  ">
          {recipes.map((recipe)=>(
          <div key={recipe.id} className="m-8 p-8 " onClick={()=>handleClick(recipe.id)}>
            <h1 className="text-green-800 lg:text-3xl md:text-2xl sm:text-xl mb-5">{recipe.title}</h1>
            <img className="rounded-full hover:shadow-2xl" src={recipe.image} alt={recipe.title} />
            <p className="mt-8">{recipe.summary}</p>
          </div>
      ))}
        </div>
        </div>
  )
}

export default HomePage
