const submitButton = document.querySelector('button[type=submit]');
const emailInput = document.querySelector('#email');
const insertDiv = document.querySelector('.content-wrapper div');


function errorMessage (message, className) {
    const div = document.createElement('div');
    
    div.className = className;

    div.appendChild(document.createTextNode(message));

    insertDiv.insertAdjacentElement('beforeend', div);

    emailInput.classList.add('active');

    setTimeout(() => {
        emailInput.classList.remove('active');
        div.remove();
    }, 3000)
}

function successMessage (message, className) {
    const div = document.createElement('div');
    
    div.className = className;

    div.appendChild(document.createTextNode(message));

    insertDiv.insertAdjacentElement('beforeend', div);


    setTimeout(() => {
        div.remove();
    }, 3000)
}

function clearFields () {
    emailInput.value = ''
}



submitButton.addEventListener('click', (e) => {

    e.preventDefault()

    const validation = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
    
    if (!validation.test(emailInput.value)) {
        errorMessage('Please provide a valid email', 'error');
        clearFields()
    } else {
        successMessage('Success', 'success')
        clearFields()
    }
})