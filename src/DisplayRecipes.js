import React from "react";

//Title
// Navigation
// A search bar
// A display of recipes
// A form to submit a new recipe

const cakes = [
    {
        cakeName: "Lemon Drizzle",
        ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
        rating: 5
    },
    {
        cakeName: "Tea Loaf",
        ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
        rating: 3
    },
    {
        cakeName: "Brownie",
        ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
        rating: 4
    },
    {
        cakeName: "Carrot Cake",
        ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
        rating: 5
    }
]


const Recipes = () => {

//for each cake in cakes 
const cakeName = cakes.cakeName
log


    return (
    <div>
        <h2> Welcome to the Bakery!</h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil adipisci, neque aut sint, voluptatem est doloribus facere quibusdam commodi iure laborum? Quia tenetur veniam rerum iure culpa aut quaerat porro.</p>

         <div className = "cakeRecipes">
            <img src= "https://properfoodie.com/wp-content/uploads/2020/02/lemon-drizzle-cake-6-1024x1536.jpg" alt = "lemon drizzle cake image" /> 
            <h3>`Cake Name: `${cakeName}`</h3>
            <h4>${cakes.rating}</h4>
            <h4>Ingredients</h4>
            <ul>
                <li>eggs</li>
                <li>butter</li>
                <li>lemon zest</li>
                <li>sugar</li>
                <li>self-raising flour</li>
            </ul>

            <button>View Recipe</button>
        </div> 
        
        
        
        {/* <div className = "cakeRecipes">
            <img src= "https://properfoodie.com/wp-content/uploads/2020/02/lemon-drizzle-cake-6-1024x1536.jpg" alt = "lemon drizzle cake image" /> 
            <h3>Lemon Drizzle</h3>
            <h4>Rating = 5</h4>
            <h4>Ingredients</h4>
            <ul>
                <li>eggs</li>
                <li>butter</li>
                <li>lemon zest</li>
                <li>sugar</li>
                <li>self-raising flour</li>
            </ul>

            <button>View Recipe</button>
        </div> */}

        
        <div className = "cakeRecipes">
            <img src= "https://preppykitchen.com/wp-content/uploads/2020/04/Carrot-cake-feature-option.jpg" alt = "lemon drizzle cake image" /> 
            <h3>Carrot Cake</h3>
            <h4>Rating = 5</h4>
            <h4>Ingredients</h4>
            <ul>
                <li>carrots</li>
                <li>oil</li>
                <li>walnuts</li>
                <li>sugar</li>
                <li>flour</li>
                <li>cream cheese </li>
            </ul>

            <button>View Recipe</button>
        </div>


        <div className = "cakeRecipes">
            <img src= "https://www.kitchensanctuary.com/wp-content/uploads/2015/05/Tea-loaf-tall-FS-152.webp" alt = "lemon drizzle cake image" /> 
            <h3>Tea Loaf</h3>
            <h4>Rating = 3</h4>
            <h4>Ingredients</h4>
            <ul>
                <li>eggs</li>
                <li>oil</li>
                <li>dried fruit</li>
                <li>sugar</li>
                <li>self-raising flour</li>
                <li>strong tea</li>
            </ul>

            <button>View Recipe</button>
        </div>



        <div className = "cakeRecipes">
            <img src= "https://www.spicebangla.com/wp-content/uploads/2018/11/maxresdefault-5-780x439.jpg?ezimgfmt=ng%3Awebp%2Fngcb4%2Frs%3Adevice%2Frscb4-1" alt = "lemon drizzle cake image" /> 
            <h3>Brownie</h3>
            <h4>Rating = 4</h4>
            <h4>Ingredients</h4>
            <ul>
                <li>eggs</li>
                <li>butter</li>
                <li>chocolate</li>
                <li>walnuts</li>
                <li>flour</li>
            </ul>

            <button>View Recipe</button>
        </div>



        </div>
    )
}
    
    export default Recipes;