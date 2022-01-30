// const { col } = require("sequelize/dist");

// Materialize select dropdown
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});
// Materialize collapsible 
document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".collapsible");
    var instances = M.Collapsible.init(elems);
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
                const recipeI1 = data.meals[i].strIngredient1;
                const recipeI2 = data.meals[i].strIngredient2;
                const recipeI3 = data.meals[i].strIngredient3;
                const recipeI4 = data.meals[i].strIngredient4;
                const recipeI5 = data.meals[i].strIngredient5;
                const recipeI6 = data.meals[i].strIngredient6;
                const recipeI7 = data.meals[i].strIngredient7;
                const recipeI8 = data.meals[i].strIngredient8;
                const recipeI9 = data.meals[i].strIngredient9;
                const recipeI10 = data.meals[i].strIngredient10;
                const recipeI11 = data.meals[i].strIngredient11;
                const recipeI12 = data.meals[i].strIngredient12;
                const recipeI13 = data.meals[i].strIngredient13;
                const recipeI14 = data.meals[i].strIngredient14;
                const recipeI15 = data.meals[i].strIngredient15;
                const recipeI16 = data.meals[i].strIngredient16;
                const recipeI17 = data.meals[i].strIngredient17;
                const recipeI18 = data.meals[i].strIngredient18;
                const recipeI19 = data.meals[i].strIngredient19;
                const recipeI20 = data.meals[i].strIngredient20;
                const mea1 = data.meals[i].strMeasure1;
                const mea2 = data.meals[i].strMeasure2;
                const mea3 = data.meals[i].strMeasure3;
                const mea4 = data.meals[i].strMeasure4;
                const mea5 = data.meals[i].strMeasure5;
                const mea6 = data.meals[i].strMeasure6;
                const mea7 = data.meals[i].strMeasure7;
                const mea8 = data.meals[i].strMeasure8;
                const mea9 = data.meals[i].strMeasure9;
                const mea10 = data.meals[i].strMeasure10;
                const mea11 = data.meals[i].strMeasure11;
                const mea12 = data.meals[i].strMeasure12;
                const mea13 = data.meals[i].strMeasure13;
                const mea14 = data.meals[i].strMeasure14;
                const mea15 = data.meals[i].strMeasure15;
                const mea16 = data.meals[i].strMeasure16;
                const mea17 = data.meals[i].strMeasure17;
                const mea18 = data.meals[i].strMeasure18;
                const mea19 = data.meals[i].strMeasure19;
                const mea20 = data.meals[i].strMeasure20;
                const instr = data.meals[i].strInstructions;
                const cat = data.meals[i].strCategory;
                const instrEl = document.createElement('div');
                const catEl = document.createElement('div');
                const measIns1 = document.createElement('div');
                const measIns2 = document.createElement('div');
                const measIns3 = document.createElement('div');
                const measIns4 = document.createElement('div');
                const measIns5 = document.createElement('div');
                const measIns6 = document.createElement('div');
                const measIns7 = document.createElement('div');
                const measIns8 = document.createElement('div');
                const measIns9 = document.createElement('div');
                const measIns10 = document.createElement('div');
                const measIns11 = document.createElement('div');
                const measIns12 = document.createElement('div');
                const measIns13 = document.createElement('div');
                const measIns14 = document.createElement('div');
                const measIns15 = document.createElement('div');
                const measIns16 = document.createElement('div');
                const measIns17 = document.createElement('div');
                const measIns18 = document.createElement('div');
                const measIns19 = document.createElement('div');
                const measIns20 = document.createElement('div');
                const listEl = document.createElement('li');
                const collapsHead = document.createElement('div');
                const mealButton = document.createElement('button');
                const collapsBody = document.createElement('div');
                listEl.setAttribute('class', 'list-el');
                collapsHead.setAttribute('class', 'collapsible-header');
                collapsBody.setAttribute('class', 'collapsible-body')
                mealButton.setAttribute('data-id', recipeId);
                mealButton.setAttribute('class', `addButton waves-effect waves-light btn-small`);
                collapsHead.innerHTML = recipeName;
                mealButton.innerHTML = "Click to add " + recipeName + " to the database.";
                measIns1.innerHTML = mea1 + ' ' + recipeI1;
                measIns2.innerHTML = mea2 + ' ' + recipeI2;
                measIns3.innerHTML = mea3 + ' ' + recipeI3;
                measIns4.innerHTML = mea4 + ' ' + recipeI4;
                measIns5.innerHTML = mea5 + ' ' + recipeI5;
                measIns6.innerHTML = mea6 + ' ' + recipeI6;
                measIns7.innerHTML = mea7 + ' ' + recipeI7;
                measIns8.innerHTML = mea8 + ' ' + recipeI8;
                measIns9.innerHTML = mea9 + ' ' + recipeI9;
                measIns10.innerHTML = mea10 + ' ' + recipeI10;
                measIns11.innerHTML = mea11 + ' ' + recipeI11;
                measIns12.innerHTML = mea12 + ' ' + recipeI12;
                measIns13.innerHTML = mea13 + ' ' + recipeI13;
                measIns14.innerHTML = mea14 + ' ' + recipeI14;
                measIns15.innerHTML = mea15 + ' ' + recipeI15;
                measIns16.innerHTML = mea16 + ' ' + recipeI16;
                measIns17.innerHTML = mea17 + ' ' + recipeI17;
                measIns18.innerHTML = mea18 + ' ' + recipeI18;
                measIns19.innerHTML = mea19 + ' ' + recipeI19;
                measIns20.innerHTML = mea20 + ' ' + recipeI20;
                instrEl.innerHTML = "Instructions: " + instr;
                catEl.innerHTML = "Category: " + cat;
                var recipesAppend = document.querySelector('.collapsible');
                collapsBody.appendChild(catEl);
                collapsBody.appendChild(measIns1);
                collapsBody.appendChild(measIns2);
                collapsBody.appendChild(measIns3);
                collapsBody.appendChild(measIns4);
                collapsBody.appendChild(measIns5);
                collapsBody.appendChild(measIns6);
                collapsBody.appendChild(measIns7);
                collapsBody.appendChild(measIns8);
                collapsBody.appendChild(measIns9);
                collapsBody.appendChild(measIns10);
                collapsBody.appendChild(measIns11);
                collapsBody.appendChild(measIns12);
                collapsBody.appendChild(measIns13);
                collapsBody.appendChild(measIns14);
                collapsBody.appendChild(measIns15);
                collapsBody.appendChild(measIns16);
                collapsBody.appendChild(measIns17);
                collapsBody.appendChild(measIns18);
                collapsBody.appendChild(measIns19);
                collapsBody.appendChild(measIns20);
                collapsBody.appendChild(instrEl);
                collapsBody.appendChild(mealButton);
                listEl.appendChild(collapsHead);
                listEl.appendChild(collapsBody);
                recipesAppend.appendChild(listEl);
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
                    const meas1 = data.meals[index].strMeasure1;
                    const meas2 = data.meals[index].strMeasure2;
                    const meas3 = data.meals[index].strMeasure3;
                    const meas4 = data.meals[index].strMeasure4;
                    const meas5 = data.meals[index].strMeasure5;
                    const meas6 = data.meals[index].strMeasure6;
                    const meas7 = data.meals[index].strMeasure7;
                    const meas8 = data.meals[index].strMeasure8;
                    const meas9 = data.meals[index].strMeasure9;
                    const meas10 = data.meals[index].strMeasure10;
                    const meas11 = data.meals[index].strMeasure11;
                    const meas12 = data.meals[index].strMeasure12;
                    const meas13 = data.meals[index].strMeasure13;
                    const meas14 = data.meals[index].strMeasure14;
                    const meas15 = data.meals[index].strMeasure15;
                    const meas16 = data.meals[index].strMeasure16;
                    const meas17 = data.meals[index].strMeasure17;
                    const meas18 = data.meals[index].strMeasure18;
                    const meas19 = data.meals[index].strMeasure19;
                    const meas20 = data.meals[index].strMeasure20;
                    // post request to add clicked recipe to database 
                    const response = await fetch('/api/recipes', {
                        method: 'POST',
                        mode: 'cors',
                        body: JSON.stringify({
                            id,
                            area,
                            category,
                            instructions,
                            name,
                            image,
                            ingredients1,
                            ingredients2,
                            ingredients3,
                            ingredients4,
                            ingredients5,
                            ingredients6,
                            ingredients7,
                            ingredients8,
                            ingredients9,
                            ingredients10,
                            ingredients11,
                            ingredients12,
                            ingredients13,
                            ingredients14,
                            ingredients15,
                            ingredients16,
                            ingredients17,
                            ingredients18,
                            ingredients19,
                            ingredients20,
                            meas1,
                            meas2,
                            meas3,
                            meas4,
                            meas5,
                            meas6,
                            meas7,
                            meas8,
                            meas9,
                            meas10,
                            meas11,
                            meas12,
                            meas13,
                            meas14,
                            meas15,
                            meas16,
                            meas17,
                            meas18,
                            meas19,
                            meas20,
                        }),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    if (response.ok) {
                        alert(`${data.meals[index].strMeal} added to the database.`) // sends alert to let user know recipe was added
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

