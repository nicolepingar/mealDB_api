// Materialize collapsible 
document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".collapsible");
    var instances = M.Collapsible.init(elems);
});
// on click, sends post request to db and gets back object of recipes that include search ingredients
const newFormHandler = async (event) => {
    event.preventDefault();
    const ingredientsVal = document.querySelector('#recipe').value; // value of input field 
    const ingredients = ingredientsVal.charAt(0).toUpperCase() + ingredientsVal.slice(1); // changes first letter to uppercase
    if (ingredients) {
        const response = await fetch('/search', { // fetches db route
            method: 'POST',
            body: JSON.stringify({ ingredients }), // sends ingredient as body
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => { // gets data back and appends information to HTML
                for (let i = 0; i < data.length; i++) {
                    const recipesAppend = document.querySelector('.collapsible')
                    const recipeName = data[i].name;
                    const recipeI1 = data[i].ingredients1;
                    const recipeI2 = data[i].ingredients2;
                    const recipeI3 = data[i].ingredients3;
                    const recipeI4 = data[i].ingredients4;
                    const recipeI5 = data[i].ingredients5;
                    const recipeI6 = data[i].ingredients6;
                    const recipeI7 = data[i].ingredients7;
                    const recipeI8 = data[i].ingredients8;
                    const recipeI9 = data[i].ingredients9;
                    const recipeI10 = data[i].ingredients10;
                    const recipeI11 = data[i].ingredients11;
                    const recipeI12 = data[i].ingredients12;
                    const recipeI13 = data[i].ingredients13;
                    const recipeI14 = data[i].ingredients14;
                    const recipeI15 = data[i].ingredients15;
                    const recipeI16 = data[i].ingredients16;
                    const recipeI17 = data[i].ingredients17;
                    const recipeI18 = data[i].ingredients18;
                    const recipeI19 = data[i].ingredients19;
                    const recipeI20 = data[i].ingredients20;
                    const mea1 = data[i].meas1;
                    const mea2 = data[i].meas2;
                    const mea3 = data[i].meas3;
                    const mea4 = data[i].meas4;
                    const mea5 = data[i].meas5;
                    const mea6 = data[i].meas6;
                    const mea7 = data[i].meas7;
                    const mea8 = data[i].meas8;
                    const mea9 = data[i].meas9;
                    const mea10 = data[i].meas10;
                    const mea11 = data[i].meas11;
                    const mea12 = data[i].meas12;
                    const mea13 = data[i].meas13;
                    const mea14 = data[i].meas14;
                    const mea15 = data[i].meas15;
                    const mea16 = data[i].meas16;
                    const mea17 = data[i].meas17;
                    const mea18 = data[i].meas18;
                    const mea19 = data[i].meas19;
                    const mea20 = data[i].meas20;
                    const instr = data[i].instructions;
                    const cat = data[i].category;
                    const nameEl = document.createElement('div');
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
                    const collapsBody = document.createElement('div');
                    listEl.setAttribute('class', 'list-el');
                    collapsHead.setAttribute('class', 'collapsible-header');
                    collapsBody.setAttribute('class', 'collapsible-body')
                    collapsHead.innerHTML = recipeName;
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
                    listEl.appendChild(collapsHead);
                    listEl.appendChild(collapsBody);
                    recipesAppend.appendChild(listEl);

                }
            })
            .catch((error) => {
                console.error('Error:', error); // if there's an error, print in console
            });
    }
};

document.querySelector('.form-submit').addEventListener('click', newFormHandler); 