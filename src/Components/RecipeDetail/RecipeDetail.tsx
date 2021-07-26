import React from 'react';

interface IProps{
    title: string;
    ingredients: string;
    process?: string;
}

const RecipeDetail = ({title, ingredients,process}: IProps) => {
    return (
        <div>
            <p><strong>Recipe Name: </strong> {title}</p>
            <p><strong>Ingredients Needed: </strong> {ingredients}</p>
            <p><strong>Cooking Process: </strong> {process}</p>


            
        </div>
    );
};


export default RecipeDetail;