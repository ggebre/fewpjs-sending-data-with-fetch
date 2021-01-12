// Add your code here
let userForm;
const body = document.querySelector('body');
function submitData(userName, userEmail) {
    let data = {
        "name": userName,
        "email": userEmail
    };

    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            "Content-TYpe": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(object => {
        body.innerHTML = `<h1> id: ${object.id} </h1>`;
    })
    .catch(error => {

        body.innerHTML = `<h1> error: ${error.message} </h1>`;
        
    });
}




document.addEventListener('DOMContentLoaded', () => {
    createForm();
    const userName = document.getElementById('userNameInput'); 
    const userEmail = document.getElementById('userEmailInput'); 

    userForm.addEventListener('submit', (event) => {

        submitData(userName.value, userEmail.value); 
        
        event.preventDefault();
    }, false);
});
function createForm() {
    userForm = document.createElement('form');
    userForm.setAttribute('action', '#');
    userForm.setAttribute('method', 'POST');

    createLabel("UserName: ", "userName");
    createInput("text", "userNameInput");

    createLabel("UserEmail: ", "userEmail");
    createInput("text", "userEmailInput");

    
    createInput("submit", "submit");
    
    body.appendChild(userForm);
}
function createLabel(text, id){
    const label = document.createElement('label');
    label.innerText = text;
    label.setAttribute('id', id);
    userForm.appendChild(label);
}

function createInput(type, id){
    const input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('id', id);
    userForm.appendChild(input);
}