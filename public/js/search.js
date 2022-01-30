const newFormHandler = async (event) => {
    event.preventDefault();
    const ingredientsVal = document.querySelector('#recipe').value;
    const ingredients = ingredientsVal.charAt(0).toUpperCase() + ingredientsVal.slice(1);
    console.log(ingredients);
    if (ingredients) {
        const response = await fetch('/search', {
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