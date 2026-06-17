const form = document.querySelector("form")

form.addEventListener("submit", (e)=>{
    e.preventdefault();

    const user = {
        email:form.email.value,
        password:form.email.value,
    }
    localStorage.setItem("user",JSON.stringify(user))
})

// JSON  – monacemebis formati, romelic gamoiyeneba informaciis shesanaxad da gadasacemad

//setitem - Browser-shi monacemebis shesanaxad

//getitem -  Browser-shi shenaxuli monacemebis wakitxva

// stringify Obieqtis stringad gadayvana

//parse Stringis obieqtad gadayvana gadayvana


const form = document.querySelector("form");

tasks = JSON.parse(localStorage.getItem("tasks")) || [];

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const task = form.task.value;
    tasks.push(task)
    console.log(tasks)
    render()
    localStorage.setItem("tasks",JSON.stringify(tasks))

})
const ol = document.querySelector("ol")

const render = () =>{
    ol.innerHTML+=""
    tasks.forEach((task,index) => {
        ol.innerHTML=`
        <li onclick=deletetsk(${index})">${task}</li>`
    });
}

const deletetsk=(index)=>{
    tasks = tasks.filter((_,ind) => ind !== index );
    localStorage.setItem("tasks",JSON.stringify(tasks))
    render()
}


render()
