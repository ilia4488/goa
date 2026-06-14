
1
let sum = 0;
let number;

while (true) {
    number = Number(prompt("შეიყვანე რიცხვი (0 - გასაჩერებლად):"));

    if (number === 0) {
        break;
    }

    sum += number;
}

console.log("საბოლოო ჯამი არის: " + sum);

2
let num = Number(prompt("შეიყვანე რიცხვი:"));


for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}
3
let password=1234
let guess
do{guess=prompt("enter password")}while(guess!=password)
4

for (i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

