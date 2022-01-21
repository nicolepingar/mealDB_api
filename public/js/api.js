function formSubmit(event) {
    event.preventDefault();
    var mealInput = document.querySelector('#ingredient').value;
    getMeal(mealInput);
}

function getMeal(mealInput) {
    var mealDBURL = "https://www.themealdb.com/api/json/v1/1/search.php?f=" + mealInput;
    fetch(mealDBURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.meals);
            for (let i = 0; i < data.meals.length; i++) {
                const recipeName = data.meals[i].strMeal;
                const mealButton = document.createElement('button');
                const breakVar = document.createElement('div');
                mealButton.innerHTML = "Click to add " + recipeName + " to the database.";
                var recipesAppend = document.querySelector('.recipes');
                breakVar.appendChild(mealButton)
                recipesAppend.appendChild(breakVar);
            }
        })
};

document
    .querySelector('.form-submit')
    .addEventListener('click', formSubmit);

    //!!!!6.21 for appending 