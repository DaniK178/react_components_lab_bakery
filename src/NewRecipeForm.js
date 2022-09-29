import React from "react";

//Title
// Navigation
// A search bar
// A display of recipes
// A form to submit a new recipe

const AddNewRecipe = () => {
return (
    <div>
   <form>
        <input type = "text" placeholder = " Recipe Name " id = "name"/>
         <input type = "text" placeholder = " Ingredients " id = "name"/>
         <input type = "submit" value = "Submit"/>
     </form>

     </div>
)

}

export default AddNewRecipe;