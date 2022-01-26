const newFormHandler = async (event) => {
    event.preventDefault();
    const ingredients1 = document.querySelector('#recipe').value.trim();
    if (ingredients1) {
        const response = await fetch('/search', {
            method: 'POST',
            body: JSON.stringify({ ingredients1 }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.reload(); //!! do i need this? 
        } else {
            alert('Failed to search.');
        }
    }
};

document.querySelector('.form-submit').addEventListener('click', newFormHandler);