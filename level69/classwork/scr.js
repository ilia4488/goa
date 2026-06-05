const div=document.querySelector("div")
const changesize=()=>{
    div.style.height="400px"
    div.style.width="400px"
}
div.addEventListener("mouseover", changesize)
const p = document.getElementById("par")
const button = document.querySelector("button")

button.addEventListener("click",()=>{
    p.style.color="red"
    p.innerHTML="hello"
})

const firstname = document.getElementById("fname");
const lasttname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");

const button2 = document.getElementById("subm");

const user = {};

button2.addEventListener("click",()=>{
    user.email = email.value;
    user.fname = fname.value;
    user.password = email.password;
    user.lname = lname.value;
    console.log(user);
})
