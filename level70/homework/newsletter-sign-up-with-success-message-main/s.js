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
const mainDiv = document.querySelector(".maindiv"); // კონტეინერი, სადაც გამოვაჩენთ ტექსტს

// ბაზის სიმულაცია (აქ შეინახება მომხმარებლები)
const users = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // 1. მონაცემების წამოღება name ატრიბუტით
    const firstname = e.target.firstname.value;
    const email = e.target.email.value;
    const message = e.target.message.value; // HTML-ში textarea-ს უნდა დავამატოთ name="message"

    // 2. ახალი ობიექტის შექმნა
    const newUser = {
        firstname,
        email,
        message
    };

    // 3. შემოწმება: არსებობს თუ არა უკვე ეს იმეილი მასივში
    const exists = users.some(single => single.email === email);
    if (exists) {
        alert("User with this email already exists");
        return; // აჩერებს ფუნქციას
    }

    // 4. შემოწმება: მესიჯის სიგრძე ხომ არ აღემატება 20 სიმბოლოს
    if (message.length > 20) {
        alert("Message length should be maximum 20 symbols");
        return; // აჩერებს ფუნქციას
    }

    // 5. თუ შემოწმებები გაიარა, ვამატებთ მასივში და ვარენდერებთ
    alert("Successfully registered");
    users.push(newUser);
    render(newUser);

    // ფორმის გასუფთავება გაგზავნის შემდეგ (სურვილისამებრ)
    form.reset();
    
    console.log(users); // კონსოლში შესამოწმებლად
});

// რენდერის ფუნქცია ეკრანზე გამოსატანად
const render = (user) => {
    const p = document.createElement('p');
    // გამოვიტანოთ იმეილი და მესიჯი ლამაზად
    p.textContent = `Email: ${user.email} | Message: ${user.message}`;
    p.style.color = "#2b423a";
    p.style.marginTop = "10px";
    
    mainDiv.appendChild(p);
};