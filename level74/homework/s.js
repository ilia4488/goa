
//1
class Book{
    constructor(title,author,year){
        this.title=title;
        this.author=author;
        this.year=year;
    }
    getSummary(){
        return `წიგნი ${this.title} დაწერილია ${this.author}-ს მიერ ${this.year} წელს.`
    }
}

const newb=new Book("boook","levyvbhjn",2020);
console.log(newb.getSummary());
//2
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        if (value <= 0) {
            console.log("Width must be greater than 0");
            this._width = 1;
        } else {
            this._width = value;
        }
    }

    get height() {
        return this._height;
    }

    set height(value) {
        if (value <= 0) {
            console.log("Height must be greater than 0");
            this._height = 1;
        } else {
            this._height = value;
        }
    }

   
    get area() {
        return this._width * this._height;
    }

    get perimeter() {
        return 2 * (this._width + this._height);
    }
}

const rect = new Rectangle(5, 10);

console.log(rect.area);
console.log(rect.perimeter);

rect.width = -3;
console.log(rect.width);

//3
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    get password() {
        return "********";
    }

    set password(newPassword) {
        if (newPassword.length < 8) {
            console.log("პაროლი ძალიან მოკლეა!");
        } else {
            this._password = newPassword;
        }
    }

    changeEmail(newEmail){
        if(newEmail.includes("@")){
            this.email=newEmail;
        }else{
            console.log("araswori emaili") 
        }
    }
}

const user1 = new User("Gio", "gio@gmail.com", "12345678");

console.log(user1.password);

user1.password = "123";

user1.changeEmail("new@gmail.com");
console.log(user1.email);