// const laptop = {
//     brand:"acer",
//     model : "123",
//     color: "gray"
// }

// const laptop = (brand,model,color) =>{
//     return{
//         brand,
//         model,
//         color
//     }
// }

// const laptop1=laptop("acer","123","green")
// console.log(laptop1)

// class laptop {
//     constructor(brand,model,color) {
//         this.brand=brand;
//         this.model=model;
//         this.color=color;
//     }
//     greet(){
//         console.log(`hello from ${this.brand}`)
//     }
// }

// const nlaptop = new laptop("acer","1","red")
// console.log(nlaptop)
// nlaptop.greet()













// class User{
//     constructor(username,email,password,cardNumber){
//         this.username = username;
//         this.email = email;
//         this._password = password;
//         this._cardNumber = cardNumber;
//     }


//     set password(newPassword){
//         this._password = newPassword
//     }


// }

// const user1 = new User("goa","123@gmail.com","123","555 666 777")

// user1.password = "12345678"

// console.log(user1)


// class Book{
//     constructor(title,author,isRead){
//         this.title=title;
//         this.author = author;
//         this.isRead = isRead;
//     }

//     set read(newValue){
//         this.isRead = newValue
//         console.log(`თქვენ წაიკითხეთ წიგნი: ${this.title}`)
//     }

//     getDetails(){
//         console.log(`${this.title} - ${this.author}, ${this.isRead}`)
//     }
// }


// const book1 = new Book("ტომ სოიერი", "მარკ ტვენი", false)

// book1.read = true;
// book1.getDetails()

// console.log(book1)

// class Student{
//     constructor(name,grades){
//         this.name = name;
//         this.grades = grades;
//     }

//     addGrade(grade){
//         if(grade >=1 && grade <= 10){
//             this.grades.push(grade)
//         }else{
//             console.log("Wrong input")
//         }
//     }

//     getAverage(){
//         const sum = this.grades.reduce((acc,i) => acc + i,0)
//         return sum / this.grades.length
//     }

    
// }



// const student1 = new Student("Giorgi",[])


// student1.addGrade(5)
// student1.addGrade(6)


// console.log(student1.getAverage())



// class Movie{
//     constructor(title,price,availableSeats){
//         this.title = title;
//         this.price = price;
//         this.availableSeats = availableSeats;
//     }

//     buyTicket(quantity){
//         if(this.availableSeats > quantity){
//             this.availableSeats -=quantity
//             console.log(`თქვენ წარმატებით შეიძინეთ ${quantity} ბილეთი. გადასახდელია: ${quantity * this.price} ლარი`)
//         }else{
//             console.log(`სამწუხაროდ, მხოლოდ ${this.availableSeats} ადგილია დარჩენილი`)
//         }
//     }
// }

// const movie1 = new Movie("Godfather", 5, 10)

// movie1.buyTicket(5)

// console.log(movie1)









// # Classwork

// 1)შექმენი კლასი Book, რომელსაც ექნება შემდეგი თვისებები:
// title (სათაური)
// author (ავტორი)
// isRead (წაკითხულია თუ არა, საწყისი მნიშვნელობა false)
// მეთოდები:
// read() — ცვლის isRead-ს true-ზე და კონსოლში ბეჭდავს: "თქვენ წაიკითხეთ წიგნი: [სათაური]".
// getDetails() — აბრუნებს ტექსტს: "[სათაური]" - [ავტორი], [წაკითხულია/არ არის წაკითხული].
// შექმენი 2 წიგნის ობიექტი, ერთ-ერთზე გამოიძახე read() მეთოდი და ბოლოს ორივეს getDetails() დალოგე.

// 2) შექმენი კლასი Student, რომელსაც ექნება თვისებები: name (სახელი) და grades (ნიშნების მასივი, რომელიც თავიდან ცარიელია []).
// მეთოდები:
// addGrade(grade) — ამოწმებს, არის თუ არა ნიშანი 1-დან 10-მდე. თუ არის, ამატებს მასივში. თუ არა, ბეჭდავს შეტყობინებას: "არასწორი ნიშანია!".
// getAverage() — ითვლის და აბრუნებს სტუდენტის საშუალო ნიშანს (ყველა ნიშნის ჯამი გაყოფილი მათ რაოდენობაზე).
// შექმენი სტუდენტი, დაუმატე ნიშნები: 8, 9, 10 და გამოიტანე მისი საშუალო.

// 3) შექმენი კლასი Movie თვისებებით: title (ფილმის სახელი), price (ბილეთის ფასი) და availableSeats (თავისუფალი ადგილების რაოდენობა, მაგალითად 5).
// მეთოდები:
// buyTicket(quantity) — პარამეტრად იღებს ბილეთების რაოდენობას, რომლის ყიდვაც სურთ.
// თუ თავისუფალი ადგილები საკმარისია (availableSeats >= quantity), დააკელი ადგილებს ეს რაოდენობა და დალოგე: "თქვენ წარმატებით შეიძინეთ [quantity] ბილეთი. გადასახდელია: [ფასი * რაოდენობა] ლარი".
// თუ ადგილები არ არის საკმარისი, დაბეჭდე: "სამწუხაროდ, მხოლოდ [availableSeats] ადგილია დარჩენილი".
// სცადე ჯერ 3 ბილეთის ყიდვა, მავე ფილმზე შემდეგ კიდევ 3-ის ყიდვა და ნახე რა მოხდება.

// 4) შექმენი კლასი Car თვისებებით: brand (მარკა) და speed (სიჩქარე, რომელიც საწყის ეტაპზე ყოველთვის არის 0).
// მეთოდები:
// accelerate() — ზრდის სიჩქარეს 20-ით.
// showSpeed() — კონსოლში ბეჭდავს: "[brand]-ის სიჩქარეა: [speed] კმ/სთ".
// შექმენი მანქანა (მაგ: "BMW"). გამოიძახე accelerate() ორჯერ და შემდეგ შეამოწმე სიჩქარე showSpeed()-ით.


class book {
    constructor(title,author,isRead) {
        this.title=title;
        this.author=author;
        this.isRead=isRead
    }
    read(){
        this.isRead=true
        console.log(`თქვენ წაიკითხეთ წიგნი: ${this.title}`)
    }
    getDetails(){
        const status = this.isRead ? "წაკითხულია" : "არ არის წაკითხული";
        return `"${this.title}" - ${this.author}, [${status}].`;
    }
}
const book1 = new book("taitle", "nika", false)
const book2 = new book("taitle123", "nik213a", false)

book1.read() 

console.log(book1.getDetails())
console.log(book2.getDetails())



class Student {
    constructor(name) {
        this.name = name;
        this.grades = [];
    }    
    addGrade(grade) {
        if (grade >= 1 && grade <= 10) {
            this.grades.push(grade); 
        } else {
            console.log("არასწორი ნიშანია!");
        }
    }


    getAverage() {
        if (this.grades.length === 0) return 0;
        let sum = 0;
        for (let i = 0; i < this.grades.length; i++) {
            sum += this.grades[i];
        }

        return sum / this.grades.length;
    }
}


const student1 = new Student("luka");


student1.addGrade(8);
student1.addGrade(9);
student1.addGrade(10);
student1.addGrade(12);


console.log(`საშუალო ნიშანი: ${student1.getAverage()}`);
console.log(student1);

// 3) შექმენი კლასი Movie თვისებებით: title (ფილმის სახელი), price (ბილეთის ფასი) და availableSeats (თავისუფალი ადგილების რაოდენობა, მაგალითად 5).
// მეთოდები:
// buyTicket(quantity) — პარამეტრად იღებს ბილეთების რაოდენობას, რომლის ყიდვაც სურთ.
// თუ თავისუფალი ადგილები საკმარისია (availableSeats >= quantity), დააკელი ადგილებს ეს რაოდენობა და დალოგე: "თქვენ წარმატებით შეიძინეთ [quantity] ბილეთი. გადასახდელია: [ფასი * რაოდენობა] ლარი".
// თუ ადგილები არ არის საკმარისი, დაბეჭდე: "სამწუხაროდ, მხოლოდ [availableSeats] ადგილია დარჩენილი".
// სცადე ჯერ 3 ბილეთის ყიდვა, მავე ფილმზე შემდეგ კიდევ 3-ის ყიდვა და ნახე რა მოხდება.

class Movie {
    constructor(title, price, availableSeats) {
        this.title = title;
        this.price = price;
        this.availableSeats = availableSeats;
    }

    buyTicket(quantity) {
        
        if (this.availableSeats >= quantity) {
            
            
            this.availableSeats -= quantity; 
            
            
            console.log(`თქვენ წარმატებით შეიძინეთ ${quantity} ბილეთი. გადასახდელია: ${this.price * quantity} ლარი`);
        } else {
            console.log(`სამწუხაროდ, მხოლოდ ${this.availableSeats} ადგილია დარჩენილი`);
        }
    }
}

const movie1 = new Movie("firstmovie", 35, 5);

movie1.buyTicket(3); 
movie1.buyTicket(3); 


// 4) შექმენი კლასი Car თვისებებით: brand (მარკა) და speed (სიჩქარე, რომელიც საწყის ეტაპზე ყოველთვის არის 0).
// მეთოდები:
// accelerate() — ზრდის სიჩქარეს 20-ით.
// showSpeed() — კონსოლში ბეჭდავს: "[brand]-ის სიჩქარეა: [speed] კმ/სთ".
// შექმენი მანქანა (მაგ: "BMW"). გამოიძახე accelerate() ორჯერ და შემდეგ შეამოწმე სიჩქარე showSpeed()-ით.

class Car {
    constructor(brand) {
        this.brand = brand;
        this.speed = 0;
    }

    
    accelerate() {
        this.speed += 20; 
    }

  
    showSpeed() {
        console.log(`${this.brand}-ის სიჩქარეა: ${this.speed} კმ/სთ`);
    }
}


const myCar = new Car("BMW");


myCar.accelerate();
myCar.accelerate(); 


myCar.showSpeed();

class SimpleCalculator {

    add(a, b) {
        return a + b;
    }

    multiply(a, b) {
        return a * b;
    }
}


const calculator = new SimpleCalculator();


console.log(calculator.add(5, 10));     
console.log(calculator.multiply(4, 3));  


class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}


const myRectangle = new Rectangle(5, 4);

console.log(myRectangle.getArea());