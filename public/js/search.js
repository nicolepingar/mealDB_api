const newFormHandler = async (event) => {
    event.preventDefault();
    const ingredients1 = document.querySelector('#recipe').value.trim();
    if (ingredients1) {
        const response = await fetch('/recipe-search', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
        } else {
            alert('Failed to search.');
        }
    }
};

document.querySelector('.form-submit').addEventListener('click', newFormHandler);