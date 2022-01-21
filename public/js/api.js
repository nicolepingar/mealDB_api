

function formSubmit(event) {
    event.preventDefault();
    var mealInput = document.querySelector('#ingredient').value;
    getMeal(mealInput);
}

function getMeal(mealInput) {
    var mealDBURL = "https://www.themealdb.com/api/json/v1/1/search.php?f=" + mealInput;
    console.log(mealDBURL);
    fetch(mealDBURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
};

document
    .querySelector('.form-submit')
    .addEventListener('click', formSubmit);
