import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ReactDOM from 'react-dom/client';
// 1. რა არის Props React-ში და რისთვის ვიყენებთ მას?
// 2. როგორ გადავცეთ მონაცემები ერთი კომპონენტიდან მეორეს Props-ის გამოყენებით?
// 3. შექმენი Greeting კომპონენტი, რომელიც Props-ით მიიღებს name-ს და გამოაჩენს:
// <h1>Hello, Giorgi!</h1>
// 4. შექმენი User კომპონენტი, რომელიც Props-ით მიიღებს name-ს და age-ს. გამოაჩინე ორივე მონაცემი გვერდზე.
// 5. შექმენი Product კომპონენტი, რომელიც Props-ით მიიღებს title-ს და price-ს. App კომპონენტში გამოიძახე Product სამჯერ, სხვადასხვა პროდუქტის სახელითა და ფასით.

// 1) props aris gamalitad mshobeli elementidan shvilobil elements rom gadaecema ragac monacemi
// 2)
//<Child name="გიორგი"/>
//return {props.name}
//3)

function Greet(props) {
    return <h1>Hello, {props.name}</h1>;
}




//4)

function User({name,age}) {
    return(
        <div>
        <h2>მომხმარებლის სახელი: {name}</h2>
        <p>ასაკი: {age} წელი</p>
        </div>
    )
}


function Product({title,price}) {
    return(
        <div>
            <h2>{title}</h2>
            <b>{price}</b>
        </div>
    )
}

function App() {
    return(
        <div>
    <Greet name="Giorgi" />
    <User name="ana" age={25} />
    <Product title="laptop" price="999$"/>
    <Product title="pc" price="1999$"/>
    <Product title="iphone" price="999$"/>
        </div>
    )
    
}

export default App
