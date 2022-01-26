// Materialize select dropdown
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});
// when forms submitted, assign letter value to mealInput variable and call getMeal function with parameter
function formSubmit(event) {
    event.preventDefault();
    var mealInput = document.querySelector('#ingredient').value;
    getMeal(mealInput);
}
// function to fetch MealDB api
function getMeal(mealInput) {
    var mealDBURL = "https://www.themealdb.com/api/json/v1/1/search.php?f=" + mealInput; // add letter assigned to mealInput variable to end of API link
    fetch(mealDBURL) // fetch API
        .then(function (response) {
            return response.json(); // return in json
        })
        .then(function (data) { // data = API data
            console.log(data.meals);
            // loop through API data to create a button for each recipe
            for (let i = 0; i < data.meals.length; i++) {
                const recipeName = data.meals[i].strMeal;
                const recipeId = data.meals[i].idMeal;
                const mealButton = document.createElement('button');
                const breakVar = document.createElement('div');
                mealButton.innerHTML = "Click to add " + recipeName + " to the database.";
                mealButton.setAttribute('data-id', recipeId);
                mealButton.setAttribute('class', `addButton waves-effect waves-teal btn-flat`);
                var recipesAppend = document.querySelector('.recipes');
                breakVar.appendChild(mealButton);
                recipesAppend.appendChild(breakVar);
            }
            // event to add recipe to database
            const addButtonHandler = async (event) => {
                event.preventDefault();
                // if the button clicked had the attribute 'data-id' 
                if (event.target.hasAttribute('data-id')) {
                    // then assign value to idButton variable
                    const idButton = event.target.getAttribute('data-id');
                    let idk = ''
                    let index = ''
                    for (let i = 0; i < data.meals.length; i++) { // loop through API data and assign values to data that matches button clicked 
                        if (data.meals[i].idMeal === idButton) {
                            idk = data.meals[i].idMeal;
                            index = i;
                        }
                    }
                    const id = idk;
                    const area = data.meals[index].strArea;
                    const category = data.meals[index].strCategory;
                    const instructions = data.meals[index].strInstructions;
                    const name = data.meals[index].strMeal;
                    const image = data.meals[index].strMealThumb;
                    const ingredients1 = data.meals[index].strIngredient1;
                    const ingredients2 = data.meals[index].strIngredient2;
                    const ingredients3 = data.meals[index].strIngredient3;
                    const ingredients4 = data.meals[index].strIngredient4;
                    const ingredients5 = data.meals[index].strIngredient5;
                    const ingredients6 = data.meals[index].strIngredient6;
                    const ingredients7 = data.meals[index].strIngredient7;
                    const ingredients8 = data.meals[index].strIngredient8;
                    const ingredients9 = data.meals[index].strIngredient9;
                    const ingredients10 = data.meals[index].strIngredient10;
                    const ingredients11 = data.meals[index].strIngredient11;
                    const ingredients12 = data.meals[index].strIngredient12;
                    const ingredients13 = data.meals[index].strIngredient13;
                    const ingredients14 = data.meals[index].strIngredient14;
                    const ingredients15 = data.meals[index].strIngredient15;
                    const ingredients16 = data.meals[index].strIngredient16;
                    const ingredients17 = data.meals[index].strIngredient17;
                    const ingredients18 = data.meals[index].strIngredient18;
                    const ingredients19 = data.meals[index].strIngredient19;
                    const ingredients20 = data.meals[index].strIngredient20;
                    // post request to add clicked recipe to database 
                    const response = await fetch('/api/recipes', {
                        method: 'POST',
                        body: JSON.stringify({ id, area, category, instructions, name, image, ingredients1 }),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    if (response.ok) {
                        document.location.reload(); // if response is ok, reload page
                    } else {
                        alert('Failed to add recipe.'); // if response is not ok, alert user
                    }
                }
            };
            // loops through all buttons with "addButton" class 
            const addButton = document.querySelectorAll('button');
            addButton.forEach(element => {
                element.addEventListener('click', addButtonHandler);
            });
        })
};
// submit button on click, call formSubmit function
document
    .querySelector('.form-submit')
    .addEventListener('click', formSubmit);

