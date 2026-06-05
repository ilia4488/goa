const firstname = document.getElementById("fname");
const lasttname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");

const button2 = document.getElementById("subm");
const users = []
const user = {};

button2.addEventListener("click",()=>{
    user.email = email.value;
    user.fname = fname.value;
    user.password = email.password;
    user.lname = lname.value;
    console.log(user);
    users.push(user)
    console.log(users);
})

const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const countText = document.getElementById("count");

let count = 0;

plusBtn.addEventListener("click", () => {
    count++;
    countText.textContent = count;
});

minusBtn.addEventListener("click", () => {
    count--;
    countText.textContent = count;
});

const blackd = document.getElementById("black")
const blued = document.getElementById("blue")
const redd = document.getElementById("red")
const greend = document.getElementById("green")

blued.addEventListener("click",()=>{
    blackd.style.backgroundColor="blue"
})

redd.addEventListener("click",()=>{
    blackd.style.backgroundColor="red"
})

greend.addEventListener("click",()=>{
    blackd.style.backgroundColor="green"
})
