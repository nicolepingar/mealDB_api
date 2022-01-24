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
                const recipeId = data.meals[i].idMeal;
                const mealButton = document.createElement('button');
                const breakVar = document.createElement('div');
                mealButton.innerHTML = "Click to add " + recipeName + " to the database.";
                mealButton.setAttribute('data-id', recipeId);
                mealButton.setAttribute('class', `addButton`);
                var recipesAppend = document.querySelector('.recipes');
                breakVar.appendChild(mealButton);
                recipesAppend.appendChild(breakVar);





            }
            const addButtonHandler = (event) => {
                event.preventDefault();
                if (event.target.hasAttribute('data-id')) {
                    const idButton = event.target.getAttribute('data-id');
                    console.log("idButton", idButton);
                    let idk = ''
                    let index = ''
                    for (let i = 0; i < data.meals.length; i++) {
                        if (data.meals[i].idMeal === idButton) {
                            idk = data.meals[i].idMeal;
                            index = i;
                        }
                    }
                    console.log("idk", idk);
                    const id = idk;
                    const area = data.meals[i].strArea;
                    const category = data.meals[i].strCategory;
                    const instructions = data.meals[i].strInstructions;
                    const name = data.meals[i].strMeal;
                    const image = data.meals[i].strMealThumb;
                    const ingredients1 = (data.meals[i].strMeasure1, data.meals[i].strIngredient1);


                    // const response = await fetch('/api/recipes', {
                    //     method: 'POST',
                    //     body: JSON.stringify({ id, area, category, instructions, name, image, ingredients1 }),
                    //     headers: {
                    //         'Content-Type': 'application/json',
                    //     },
                    // });
                    // if (response.ok) {
                    //     document.location.reload();
                    // } else {
                    //     alert('Failed to add recipe.');
                    // }
                }
            };
            // loops through all buttons with "addButton" class 
            const addButton = document.querySelectorAll('button');
            // for (let j = 0; j < addButton.length; j++) {
            //     addButton[j].addEventListener('click', addButtonHandler);
            // }
            addButton.forEach(element => {
                element.addEventListener('click', addButtonHandler);
            });
            // document.getElementsByClassName(`addButton${recipeId}`).addEventListener('click', addButtonHandler)
        })
};
// submit button on click, call formSubmit function
document
    .querySelector('.form-submit')
    .addEventListener('click', formSubmit);

