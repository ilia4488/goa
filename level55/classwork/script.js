// // const myfunc = function (name){
// //     return `Hello ${name}`
// // }

// const mufunc = (name)=>{
//     return `Hello ${name}`
// }
// console.log(myfunc("ilia"))
// // const functionname = () => {}

// // ახსენით რა განსხვავებაა ჩვეულებრივ ფუნქციასა და arrow ფუნციას შორის და მოიყვანე ერთი მაგალითი arrow ფუნქციაზე

// //chveulebrivi functia da arrow ert da igive funqcias asrulebs magram arrow ufro mokle gzaa

// // magalitad
// //ubralo
// const myfunc = function (name){
//     return `Hello ${name}`
// }
// console.log(mufunc1("gio"))
// //arrow
// const mufunc2 = (name)=>{
//     return `Hello ${name}`
// }
// console.log(mufunc2("gio"))
 
// # Classwork 

// 1) დაწერე ფუნქცია add, რომელიც ორ რიცხვს მიიღებს და მათ ჯამს დააბრუნებს.

// 2) შექმენი ფუნქცია square, რომელიც მიიღებს ერთ რიცხვს და დააბრუნებს მის კვადრატს (თავის თავზე ნამრავლს).

// 3) შექმენი ფუნქცია halfPrice, რომელიც მიიღებს ნივთის ფასს და დააბრუნებს მის ნახევარს.

// ყველა დავალება გააკეთეთ arrowFunction ით

// function add(number,num){
//     return number+num
// }
// console.log(add(2,3))
// function square(numb){
//     return numb*numb
// }
// console.log(square(2))
// function halfPrice(numbe){
//     return numbe/2
// }
// console.log(halfPrice(8))

const add = (a, b) => a + b;

console.log(add(5, 3));

const square = (num) => num * num;

console.log(square(4));

const halfPrice = (price) => price / 2;

console.log(halfPrice(100));