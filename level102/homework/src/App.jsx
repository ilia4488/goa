import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ReactDOM from 'react-dom/client';
function App() {
  // <!-- 1) კომენტარებით ახსენით რა არის JSX და რატომ გვჭირდება React-ში

// 2) შექმენი ერთი Component, რომელიც აბრუნებს <h1>, <p> და <button> ელემენტებს ერთად

// 3) შექმენი ცალკე ორი Component და ორივე გამოიტანე App Component-ში

// 4) კომენტარებით ახსენით რა განსხვავებაა ჩვეულებრივ JavaScript ფუნქციასა და React Component-ს შორის

// 5) შექმენი Component, რომელშიც JavaScript-ის ცვლადს შექმნი და მის მნიშვნელობას JSX-ის გამოყენებით ეკრანზე გამოიტან -->

// 1- jsx aris codirebis ena romelic gamoiyeneba reactshi da reactshi imistvis gvwirdeba rom  java scripti da html gavaertianot ert failshi da ertad vwerot
// 2-
// const component = () => {
//     return (
//         <div>
//             <h1>hi</h1>
//             <p>its paragraph</p>
//             <button>click</button>
//         </div>
//     );
// };
// 3)
// const Component1 = () => {
//     return (
//         <div>
//             <p>its component1</p>
//         </div>
//     );
// };

// const Component2 = () => {
//     return (
//         <div>
//             <p>its component2</p>
//         </div>
//     );
// };

// const AppComponent = () => {
//     return (
//         <div>
//             <Component1 />
//             <Component2 />
//         </div>
//     );
// };


// 4)
// ჯავასკრიპტის ფუნქცია აბრუნებს ნებისმიერ მონაცემს მაგალითად რიცხვს სტრინგს ან true,false და ასე შემდეგ და გამოიძახება ჩვეულებრივად მაგალითად ესე myfunc() და jsx-i abrunebs momxmareblis interfeiss da gamoidzaxeba rogorc html tagi magalitad ase <myfunc><myfunc/>

//5)



    const name = "ilia"

    return(
        <div>
            <h1>gamarjoba {name}</h1>
        </div>
    )

}


export default App
