// # Homework

// 1) უკუთვლა: დაწერე for ციკლი, რომელიც კონსოლში გამოიტანს რიცხვებს 10-დან 1-მდე (უკუსვლით).

// 2) ლუწი რიცხვები: for ციკლით დაბეჭდე 1-დან 20-მდე მხოლოდ ლუწი რიცხვების ჯამი.

// 3) მასივზე გადავლა: შექმენი მასივი let fruits = ['apple', 'peach', 'grape', 'banana'];. for ციკლის გამოყენებით დაბეჭდე fruit is და შემდეგ თითოეეული ხილი.

// 4) რიცხვების ჯამი: დათვალე 1-დან 50-მდე ყველა რიცხვის ჯამი for ციკლის გამოყენებით და შედეგი დაბეჭდე.

// 5) დამატება ბოლოში: შექმენი ცარიელი მასივი let colors = [];. push() მეთოდის გამოყენებით სათითაოდ დაუმატე შენი საყვარელი 3 ფერი.

// 6) ამოღება ბოლოდან: მოცემულია let numbers = [1, 2, 3, 4, 5];. pop() მეთოდით ამოიღე ბოლო ელემენტი და დაბეჭდე როგორც ამოღებული რიცხვი, ისე განახლებული მასივი.

// 7) ამოღება დასაწყისიდან: მოცემულია let animals = ['dog', 'cat', 'fish'];. shift() მეთოდით წაშალე პირველი ელემენტი და დაბეჭდე მასივი.

// 8) indexOf - პოზიციის პოვნა: შექმენი მასივი let tech = ['HTML', 'CSS', 'JavaScript', 'React']; იპოვე JavaScript-ის ინდექსი (მერამდენე პოზიციაზე დგას) indexOf() მეთოდით.

//1
// for(let i=10; i>0;i--){
//     console.log(i)
// }
//2
// let sum =0
// for(let i =0;i<20;i++){
//     if(i%2===0){
//         sum+=i
//     }
// }
//3
// console.log(sum)
// let fruits = ['apple', 'peach', 'grape', 'banana'];
// for(let i=0;i < fruits.length; i++){
//     console.log(`fruit is ${fruits[i]}`)
// }
// 4
// sum=0
// for(i=0;i<51;i++){
//     sum+=i
    
// }
// console.log(sum)
// 5
// let colors = [];
// colors.push("red")
// colors.push("green")
// colors.push("blue")
// console.log(colors)
//6
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers.pop())
// console.log(numbers)
// 7
// let animals = ['dog', 'cat', 'fish'];
// animals.shift()
// console.log(animals)
//8
// let tech = ['HTML', 'CSS', 'JavaScript', 'React'];
// console.log(tech.indexOf("JavaScript"))