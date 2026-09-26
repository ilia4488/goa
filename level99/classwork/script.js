const btn = document.querySelector("button");
const inp = document.querySelector("input");
const container = document.getElementById("tasks");

function addtask() {
    const tasktext = inp.value.trim();
    
    if (tasktext !== "") {
        const newtask = document.createElement("div");
        newtask.classList.add("task");
        

newtask.innerHTML = `
            <label class="task-left">
                <input type="checkbox" class="real-checkbox">
                <span class="custom-checkbox"></span>
                <span class="task-text">${tasktext}</span>
            </label>
            <img class="del" src="/classwork/todo-app-main/todo-app-main/images/icon-cross.svg" alt="Delete">
        `;
        
        const taskInput = newtask.querySelector(".real-checkbox");
        const taskSpan = newtask.querySelector(".task-text");  
        const deletbtn = newtask.querySelector(".del");
       
        taskInput.addEventListener("change", function() {
            if (this.checked) {
                taskSpan.style.textDecoration = "line-through";
                taskSpan.style.color = "#6b7280";
            } else {
                taskSpan.style.textDecoration = "none";
                taskSpan.style.color = "#f3f4f6";
            }
        });
        deletbtn.addEventListener("click",function(){
            newtask.remove()
        })
        container.appendChild(newtask);
        inp.value = "";
    } else {
        console.error("enter task");
    }
}

btn.addEventListener("click", addtask);