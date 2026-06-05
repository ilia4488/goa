// # Classwork 



// const user = {
//     username:"Luka",
//     _email:"123@gmail.com",
//     _password:"1234",
//     adult:false,
//     get email(){
//         if(this.adult){
//             return this._email
//         }else{
//             return "You are kid"
//         }
//     },
//     set myUsername(name){
//         if(name.length < 4){
//             console.log("name must be min 4 characters")
//         }else{
//             this.username = name
//         }
//     }
// }

// user.myUsername = "gio"

// console.log(user)




// const myFactoryFunc = (username,email,password) =>{
//     return {
//         username,
//         email,
//         password,
//         greet(){
//             console.log(`Hello ${username}`)
//         }

//     }
// }



function Book(Title,author,price){
    this.Title = Title;
    this.author = author;
    this.price = price;
    this.getInfo() = ()=>{
        console.log(`წიგნის სათაურია ${this.Title} ავტორი ${this.author}, და ფასი ${this.price}`)
    }
}

const user2 = new Book("good","nika",50);

user2.getInfo();

// 2) შექმენი ფუნქცია-კონსტრუქტორი სახელით .PiggyBank() ამ ფუნქციის შიგნით შექმენი უბრალო ცვლადი .money = 0; ამავე ფუნქციის შიგნით, შექმენი ორი მეთოდი:this
// this.setMoney — რომელიც შეცვლის ყულაბაში არსებულ თანხას.
// this.getMoney — რომელიც დააბრუნებს ყულაბაში არსებულ თანხას.

// new ოპერატორით შექმენი ახალი ყულაბა.
// setMoney მეთოდით ჩააგდე შიგნით 50 ლარი.
// getMoney მეთოდით შეამოწმე და ეკრანზე გამოიტანე რამდენი ლარია ყულაბაში.

function PiggyBank() {
    this._money = 0;

    this.setMoney = function(amount) {
        this._money = amount;
    };

    this.getMoney = function() {
        return this._money;
    };
}

const bank = new PiggyBank();

bank.setMoney(50);

console.log(bank.getMoney());