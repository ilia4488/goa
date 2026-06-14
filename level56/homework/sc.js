// 1)ახსენით ეს მეთოდები კომენტარებით და მოიყვანეთ 2-2 მაგალითი თითოეულზე:
// // .length
// // .join()
// // .toString()
// // .pop()
// // .push()
// // .shift()
// // Array.isArray();
// // .concat()
// // .slice()
// // .splice()
// დავალება 2: შეასწორე Scope Pollution (დაბინძურება)
// ქვემოთ მოცემულ კოდში ფუნქცია changePrice შემთხვევით ცვლის გლობალურ ფასს. შეასწორე კოდი ისე, რომ ფუნქციამ შექმნას საკუთარი ლოკალური ცვლადი და არ შეეხოს გლობალურს.

// let price = 100;

// const changePrice = () => {
//     price = 50; // აქ არის შეცდომა
//     console.log("ახალი ფასი ფუნქციაში:", price);
// };

// changePrice();
// console.log("გლობალური ფასი:", price); // აქ ისევ 100 უნდა ეწეროს!

// ----------------------------------------------------------------------------------------------------------------

// დავალება 3: პარამეტრები და Scope
// ფუნქციის პარამეტრებიც ლოკალური სკოუპის ნაწილია. გამოიცანი შედეგი:


let hero = "Batman";

function transform(hero) {
    hero = "Superman";
    console.log("ფუნქციის შიგნით:", hero);
}

transform("Iron Man");
console.log("გარეთ:", hero);
// კითხვა: რატომ არ შეიცვალა გლობალური hero Superman-ით? და რა როლი ითამაშა აქ "Iron Man"-მა?


// // .length
// // აბრუნებს მასივის ელემენტების რაოდენობას
// let arr1 = [1, 2, 3, 4];
// console.log(arr1.length);

// let arr2 = ["a", "b"];
// console.log(arr2.length);

// // .join()
// // აერთიანებს მასივის ელემენტებს სტრიქონად
// let arr3 = ["Hello", "World"];
// console.log(arr3.join(" "));

// let arr4 = [1, 2, 3];
// console.log(arr4.join("-"));


// // .toString()
// // გარდაქმნის მასივს სტრიქონად
// let arr5 = [1, 2, 3];
// console.log(arr5.toString());

// let arr6 = ["a", "b", "c"];
// console.log(arr6.toString());


// // =====================
// // .pop()
// // შლის ბოლო ელემენტს
// let arr7 = [1, 2, 3];
// console.log(arr7.pop());
// console.log(arr7);

// let arr8 = ["x", "y"];
// arr8.pop();
// console.log(arr8);


// // .push()
// // ამატებს ელემენტს ბოლოში
// let arr9 = [1, 2];
// arr9.push(3);
// console.log(arr9);

// let arr10 = ["a"];
// arr10.push("b", "c");
// console.log(arr10);


// // .shift()
// // შლის პირველ ელემენტს
// let arr11 = [1, 2, 3];
// arr11.shift();
// console.log(arr11); 

// let arr12 = ["a", "b"];
// console.log(arr12.shift());

// // .isArray()
// // ამოწმებს არის თუ არა მნიშვნელობა მასივი
// console.log(Array.isArray([1,2,3])); 
// console.log(Array.isArray("hello"));



// // .concat()
// // აერთიანებს მასივებს
// let arr13 = [1, 2];
// let arr14 = [3, 4];
// console.log(arr13.concat(arr14)); 

// let arr15 = ["a"];
// console.log(arr15.concat(["b", "c"])); 


// // .slice()
// // აბრუნებს მასივის ნაწილს
// let arr16 = [1, 2, 3, 4];
// console.log(arr16.slice(1, 3)); // [2, 3]

// let arr17 = ["a", "b", "c"];
// console.log(arr17.slice(1)); // ["b", "c"]


// // =====================
// // .splice()
// // ცვლის მასივს 
// let arr18 = [1, 2, 3];
// arr18.splice(1, 1);
// console.log(arr18);

// let arr19 = ["a", "b", "c"];
// arr19.splice(1, 0, "x");
// console.log(arr19);


let price = 100;

const changePrice = () => {
    
    let price = 50;
    console.log("ახალი ფასი ფუნქციაში:", price);
};

changePrice();
console.log("გლობალური ფასი:", price);



// ფუნქციის შიგნით: Superman
// 39 გარეთ: Batman