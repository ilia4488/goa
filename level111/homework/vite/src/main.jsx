import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TodoList } from './App.jsx'
import { Fruits } from './App.jsx'
import { StudentList } from './App.jsx'
import { ShoppingList } from './App.jsx'
import { CounterList } from './App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Fruits />
    <TodoList />
    <StudentList />
    <ShoppingList />
    <CounterList />
  </StrictMode>,
)
