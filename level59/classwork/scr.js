const numbers = [15, 2, 8, 33, 20, 7, 44, 11];
for(let i =0;i<numbers.length;i++){
    if (numbers[i] > 10){
       console.log(numbers[i]) 
    } 
}

let password = 1234

let userp=prompt("enter correct password")
while(userp!==password){
    userp = prompt("try again:");
}
let num = Math.floor(Math.random()*10)
let nump = prompt("find correct number")
while(num!==nump){
    nump = prompt("try again")
}

let num = Math.floor(Math.random() * 10);
let guess;

while (true) {
  guess = Number(prompt("find correct number 1-10"));

  if (guess === num) {
    console.log("correct");
    break;
  } else {
    console.log("try again");
  }
}
let num2;

do {
  num2 = (prompt("შეიყვანე რიცხვი 10-დან 20-მდე:"));
} while (num2 < 10 || num2 > 20);

console.log("correct");

