
const form = document.querySelector("form")
const users = JSON.parse(localStorage.getItem("user")) || []

form.addEventListener("submit", (e) => {
    e.preventDefault()
    

    const name = e.target.name.value;
    const lastname = e.target.lastname.value; 
    const email = e.target.email.value;
    const password = e.target.password.value;
    

    const user = {
        name,
        lastname,
        email,
        password,
    }
    

    const emailExists = users.some(singleUser => singleUser.email === email);
    
    if (emailExists) {
        alert("Email already exists");
        return; // Stop function 
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return; // Stop function 
    }
    
    users.push(user)
    localStorage.setItem("user", JSON.stringify(users))
    form.reset()
})