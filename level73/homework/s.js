
const form = document.querySelector('form');

form.addEventListener('submit',(event)=> {

    event.preventDefault();

    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('msg').value;

    const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message,

    };

    localStorage.setItem('contactFormData', JSON.stringify(formData));

    alert('მონაცემები წარმატებით შეინახა localStorage-ში!');
    console.log(localStorage.getItem('contactFormData'));
});
