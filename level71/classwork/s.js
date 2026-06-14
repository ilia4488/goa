const form = document.querySelector("form");

let tasks = [];


form.addEventListener("submit", (e) => {
    e.preventDefault()
    const task = form.task.value;
    tasks.push(task);
    render()
})


const ol = document.querySelector("ol");

const render = () => {
    ol.innerHTML = ""
    tasks.forEach((task,index) => {
        ol.innerHTML += `<li onclick="delet(${index})">${task}</li>`
        
    })
}


const delet = (index) => {
    tasks = tasks.filter((_, i) => index !== i)
    render()
}

