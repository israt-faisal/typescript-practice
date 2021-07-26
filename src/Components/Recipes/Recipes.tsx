import React, { useState } from 'react';
import RecipeDetail from '../RecipeDetail/RecipeDetail';
import './Recipes.css';

interface IRecipes{
    title: string ;
    ingredients: string ;
    process?: string ;
}

const Recipes = () => {
    const [recipes, setRecipes] = useState<IRecipes>( {} as IRecipes);

    const [allRecipes, setAllRecipes] = useState <IRecipes[]> ( [] )

    const btnClick =()=>{
        setAllRecipes([ ...allRecipes, recipes])
        setRecipes({
            title: "",
            ingredients: "",
            process: ""
          
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { setRecipes({ ...recipes, [e.target.title]: e.target.value})
}
    const handleSubmit =()=>{
        alert('walah! A New Recipe!')
    }
    console.log("allRecipes", allRecipes);

    return (
        <div>
           <div className="header">
           <h1>Recipe Book Online</h1>
            <h4><strong> Write & Share delicious recipes with the world!</strong></h4>
            <div className="form">
                <input 
                onSubmit={handleSubmit}
                value={recipes.title} 
                onChange={handleChange}
                type="text" 
                name="title" 
                placeholder="Recipe Name" 
                />

                <input 
                onSubmit={handleSubmit}
                value={recipes.ingredients} 
                onChange={handleChange}
                type="text" 
                name="ingredients"
                placeholder="Ingredients" 
                />

                <button onClick={btnClick}>Publish</button>
            </div>
           </div>
           {
               allRecipes.map((recipeDetail) => <RecipeDetail key={recipeDetail.title} title={recipeDetail.title} ingredients={recipeDetail.ingredients} process={recipeDetail.process}></RecipeDetail>)
           }
        
        
         <div>
         <RecipeDetail title="steamed rice" ingredients="water, rice" process="add washed rice to boiled water and cook until it gets boiled and softens. Then strain the water from rice carefully and its done!."></RecipeDetail>
           <RecipeDetail title="Egg Omlete" ingredients="Egg, onion, chili, oil, salt"></RecipeDetail>
         </div> 
         </div>
    );
};

export default Recipes;