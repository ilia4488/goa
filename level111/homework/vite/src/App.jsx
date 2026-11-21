import { useState } from 'react';
// როგორ შევინახოთ სია (array) useState-ის გამოყენებით? შექმენი Fruits კომპონენტი, რომელიც შეინახავს ხილების სიას და გამოაჩენს მათ map() მეთოდის გამოყენებით.

export function Fruits() {
  const [fruits, setFruits] = useState(["banana", "apple", "pineapple", "grape"]);

  return (
    <div>
      <ul>
        {fruits
          .map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
      </ul>
    </div>
  );
}


// შექმენი TodoList კომპონენტი, რომელშიც იქნება დავალებების სია.
// დაამატე ღილაკი Add Task, რომელიც სიას ახალ დავალებას დაამატებს useState-ის გამოყენებით.
export function TodoList() {
  const [task, setTask] = useState([
    "clean bedroom",
    "take rubbish out"
  ]);

  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (newTask.trim() === "") return;

    setTask([...task, newTask]);
    setNewTask("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="write task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      {task.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}


// შექმენი StudentList კომპონენტი, რომელიც შეინახავს სტუდენტების სახელების სიას. თითოეულ სტუდენტს გვერდით ჰქონდეს Delete ღილაკი, რომელზე დაჭერისას შესაბამისი სტუდენტი წაიშლება სიიდან.
export function StudentList(){
  const[student,setRemove]=useState(["student1","student2","student3"]);

  function deleteStudent(id){
    setRemove(student.filter((item, i) => i !== id));
  }
  return(
    <div>
      {student.map((item, index) => (
        <p key={index}>
          {item}
          <button onClick={() => deleteStudent(index)}>
            Delete
          </button>
        </p>
      ))}
    </div>
  )
}
// შექმენი ShoppingList კომპონენტი, რომელიც შეინახავს პროდუქტების სიას. დაამატე input და Add ღილაკი, რომ მომხმარებელმა შეძლოს ახალი პროდუქტების დამატება. დამატების შემდეგ input უნდა გასუფთავდეს.
export function ShoppingList(){
  const [product,setProduct] = useState([
    "product1",
    "product2",
    "product3",
  ])
  const [newProduct,setNewProduct] = useState("")
  function addProduct() {
    if(newProduct.trim() === ""){
      return;
    }else{
      setProduct([...product,newProduct]);
      setNewProduct("")
    }
  }
  return(
    <div>
      <input 
      type="text"
      placeholder='enter new product'
      value={newProduct}
      onChange={(e)=>setNewProduct(e.target.value)}
      />
      <button onClick={addProduct}>add product</button>

      {product.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

    </div>
  )
}
// შექმენი CounterList კომპონენტი, რომელიც შეინახავს რიცხვების სიას. დაამატე ღილაკი Add Number, რომელიც სიაში მომდევნო რიცხვს დაამატებს. ასევე დაამატე ღილაკი Remove Last, რომელიც სიიდან ბოლო რიცხვს წაშლის.
export function CounterList() {
  const [num,setnum]=useState([1,2,3,4,5,6])

  const [newnum,setnewnum]=useState(num.length+1)

  function addNumber(){
    setnum([...num,newnum]);
    setnewnum(newnum+1)
  }
  function removeNum() {
    setnum(num.slice(0, -1));
  }
  
  return(
    <div>

      <button onClick={addNumber}>add next num</button>
      <button onClick={removeNum}>remove last num</button>
      {num.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  )
}