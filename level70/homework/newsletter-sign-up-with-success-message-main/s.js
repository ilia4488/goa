// const form = document.querySelector("form")

// const users = []

// form.addEventListener("submit", (e)=>{
//     e.preventDefault()
//     const username = e.target.username.value;
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     const user = {
//         username,
//         email,
//         password
//     }



//     const exists = users.some(single => single.email === email)
//     if (exists) {
//         alert("User with this email already exists");
//         return;
//     }

//     if (password.length < 8) {
//         alert("Password length should be minimum 8 symbols ")
//     } else {
//         alert("successfully registered")
//         users.push(user)
//         render(user)
//     }
//     console.log(users)
// })

// const div = document.querySelector("div")

// const render=(user)=>{
//     const p = document.createElement('p');
//     p.textContent=user.email
//     div.appendChild(p)
// }


const form = document.querySelector("form");
const mainDiv = document.querySelector(".maindiv"); 

const users = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstname = e.target.firstname.value;
    const email = e.target.email.value;
    const message = e.target.message.value; 

    const newUser = {
        firstname,
        email,
        message
    };

    const exists = users.some(single => single.email === email);
    if (exists) {
        alert("User with this email already exists");
        return;
    }

   
    if (message.length > 20) {
        alert("Message length should be maximum 20 symbols");
        return; 
    }

    alert("Successfully registered");
    users.push(newUser);
    render(newUser);

    form.reset();
    
    console.log(users); 
});

const render = (user) => {
    const p = document.createElement('p');
    
    p.textContent = `Email: ${user.email} | Message: ${user.message}`;
    p.style.color = "#2b423a";
    p.style.marginTop = "10px";
    
    mainDiv.appendChild(p);
};