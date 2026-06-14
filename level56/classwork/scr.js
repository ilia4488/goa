// const greet = () =>{
//     name = "gio";

//     return `Hello ${name}`;
// }
// console.log(name)



//  Global Scope
// ცვლადი, რომელიც გამოცხადებულია ფუნქციის გარეთ
// ხელმისაწვდომია ყველგან კოდში
// ყველა ფუნქცია და ბლოკი ხედავს მას

//  Block Scope
// { } შიგნით შექმნილი scope
// მუშაობს let და const-თან
// ბლოკის გარეთ არ ჩანს

let name = "Anna";

function greet() {
  console.log(name);
}

greet();
console.log(name);



if (true) {
  let age = 15;
  console.log(age);
}

console.log(age);


