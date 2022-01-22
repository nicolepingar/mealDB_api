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
            for (let i = 0; i < data.meals.length; i++) { // loop through API data to create a button for each recipe
                const recipeName = data.meals[i].strMeal;
                const mealButton = document.createElement('button');
                const breakVar = document.createElement('div');
                mealButton.innerHTML = "Click to add " + recipeName + " to the database.";
                var recipesAppend = document.querySelector('.recipes');
                breakVar.appendChild(mealButton);
                recipesAppend.appendChild(breakVar);
            }
        })
};
// submit button on click, call formSubmit function
document
    .querySelector('.form-submit')
    .addEventListener('click', formSubmit);