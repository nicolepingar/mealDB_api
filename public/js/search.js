const newFormHandler = async (event) => {
    event.preventDefault();
    const ingredients = document.querySelector('#recipe').value;
    console.log(ingredients);
    if (ingredients) {
        const response = await fetch('/api/searchRecipes', {
            method: 'POST',
            body: JSON.stringify({ ingredients }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            // document.location.reload(); //!! do i need this? 
        } else {
            alert('Failed to search.');
        }
    }
};

document.querySelector('.form-submit').addEventListener('click', newFormHandler);