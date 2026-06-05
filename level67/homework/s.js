const button=document.getElementById("action-btn")
const container=document.getElementById("card")
const p=document.getElementById("info-text")

button.onclick=()=>{
    container.style.width="400px"
    container.style.background="blue"
    p.innerHTML="სრული აღწერა: ეს პროდუქტი დამზადებულია უმაღლესი ხარისხის მასალისგან და აქვს 2 წლიანი გარანტია!"
    p.style.color="white"
    button.innerHTML="დახურვა"
}

const h1=document.getElementById("main-title")
const buton=document.getElementById("btn")
buton.onclick=()=>{
    h1.innerHTML="ტექსტი წარმატებით შეიცვალა!"
    h1.textContent="new text"
}

const par=document.getElementsByClassName("paragraph")
const btnn=document.getElementsByClassName("btn2")
btnn[0].onclick = () => {
    for (let i = 0; i < par.length; i++) {
        par[i].style.color = "red";
    }
};
