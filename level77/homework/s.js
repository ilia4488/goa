class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    applyDiscount(percentage) {
        this.price = this.price - (this.price * percentage / 100);
    }

    getInfo() {
        console.log(`${this.name} ღირს ${this.price} ლარი`);
    }
}

const myProduct = new Product("ყურსასმენი", 100);
myProduct.applyDiscount(15);
myProduct.getInfo();


class SmartPhone {
    constructor(model) {
        this.model = model;
        this.battery = 50;
    }

    charge() {
        this.battery += 15;
        if (this.battery > 100) {
            this.battery = 100;
        }
    }

    showStatus() {
        console.log(`${this.model}-ის ბატარეა არის ${this.battery}%`);
    }
}


const myPhone = new SmartPhone("iPhone 15");
myPhone.showStatus();

myPhone.charge();
myPhone.charge();
myPhone.charge();
myPhone.charge();

myPhone.showStatus();



class SchoolPupil {
    constructor(name, gradeLevel) {
        this.name = name;
        this.gradeLevel = gradeLevel;
    }

    promote() {
        this.gradeLevel += 1; 
    }

    getInfo() {
    
        console.log(`${this.name} არის მე-${this.gradeLevel} კლასის მოსწავლე`);
    }
}

const pupil = new SchoolPupil("gio", 6);
pupil.promote(); 

pupil.getInfo(); 

class PiggyBank {
    constructor() {
        this.coins = 0;
    }

    addCoins(amount) {
        this.coins += amount;
    }

    buyToy(cost) {
        if (this.coins >= cost) {
            this.coins -= cost;
            console.log("სათამაშო ნაყიდია!");
        } else {
            console.log("არ გაქვს საკმარისი მონეტები!");
        }
    }
}

const myPiggy = new PiggyBank();

myPiggy.addCoins(10); 
myPiggy.buyToy(15);   

myPiggy.addCoins(10); 
myPiggy.buyToy(15);   