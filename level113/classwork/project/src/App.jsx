import { useState } from 'react';
import './App.css';

function TaskApp() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "მათემატიკის სავარჯიშოები",
      subject: "მათემატიკა",
      completed: false
    },
    {
      id: 2,
      title: "ინგლისურის ესე",
      subject: "ინგლისური",
      completed: true
    },
    {
      id: 3,
      title: "ისტორიის წაკითხვა",
      subject: "ისტორია",
      completed: false
    }
  ]);

  const [title,setTitle] = useState("")
  const [subject,setSubject] = useState("")

function addTask(e) {
  e.preventDefault()
  const newTask = {
    id: Date.now(),
    title: title,
    subject: subject,
    completed: false
  }

  setTasks([...tasks, newTask])
  setTitle("")
  setSubject("")
}
function change(id) {
  setTasks(
    tasks.map((item) => {
      if (item.id === id) {
        return {...item, completed: !item.completed};
      }else{
        return item;
      }
    })
  )
}

function Delete(id) {
  setTasks(tasks.filter((task) => task.id !== id));
}

const notDone = tasks.filter((task) => task.completed === false);
const done = tasks.filter((task) => task.completed === true);
const total = tasks.length;

  return (
    <div>
      <div className="div2"><p>სულ: {total}</p> <p>დასრულებული: {done.length}</p> <p>დაუსრულებელი:{notDone.length}</p></div>
      <h1>homeworks</h1>
      <form onSubmit={addTask}>
        <input required type="text" placeholder='enter task name' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input required type="text" placeholder='enter subject name' value={subject} onChange={(e) => setSubject(e.target.value)}/>
        <br />
        <button type='submit'>add task</button>
      </form>
      <ul>
        {tasks.map((item) => (
          <div style={{ background : item.completed ? "Green" : "White" }} className='fdiv' key={item.id}>
            <span style={{ textDecoration: item.completed ? "line-through" : "none" }}>
              subject: {item.subject}
            </span>
            <p>title: {item.title}</p>
            {item.completed ? "done" : "not done"}
            <br />
            <button onClick={() => change(item.id)}>{item.completed ? "თავიდან დაწყება" : "დასრულება"}</button>
            <button onClick={()=> Delete(item.id)}>delete task</button>
          </div>
        ))}
      </ul>
        
    </div>
  );
}

export default TaskApp;