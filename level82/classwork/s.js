// class Smartphone {
//     constructor(model) {
//         this.model=model;
//         this.batterylevel=100;
//     }
//     using(){
//         if(this.batterylevel<=15){
//             console.log("phone is dying")
//         }
//         this.batterylevel-=15
//         console.log(`battery level is ${this.batterylevel}`)
//     }
// }
// const myphone = new Smartphone("samsung")
// myphone.using()
// myphone.batterylevel = 10
// myphone.using()



// class BankAccount{
//     constructor(name, lastName, balance, password){
//         this.name = name
//         this.lastName = lastName
//         this.balance = balance
//         this.password = password
//     }

//     backOut(password,num){
//         if(this.password !== password){
//             console.log("არასწორი პაროლია")
//             return
//         }
//         if(this.balance<num){
//             console.log(`${this.lastName}, თქვენს ანგარიშზე ამდენი თანხა არ არის`);
//             return            
//         }else{
//             console.log(`${this.lastName} თანხა წარმატებით გამოიტანეთ`);
//             this.balance = this.balance - num
//             console.log(`თქვენ ანგარიშზე დარჩენილია $${this.balance}`);
//         }
//     }

//     inOut(password,num1){
//         if(this.password !== password){
//             console.log("არასწორი პაროლია")
//             return
//         }
//         this.balance += num1
//         console.log(`თქვენს ანგარიშზე თანხა წარმატებით შეიტანეთ თანხა შეადგენს $${this.balance}`);   
//     }
// }

// const myBank = new BankAccount("Test", "Testaze", 1257.82, "1234")
// myBank.backOut("1234",1200.81)
// myBank.inOut("1234",12)


class TaxiTrip {
    constructor(driverName,pricePerKm) {
        this.driverName=driverName
        this.pricePerKm=pricePerKm
        this.totalDistance=0
    }
    startTrip(km){
        this.totalDistance+=km;
        const cost = km*this.pricePerKm;

        console.log(`მგზავრობის ღირებულება: ${cost} ლარი`);


    }
}
const trip = new TaxiTrip("nika",5)

trip.startTrip(10)

console.log(trip.totalDistance())

// class FitnessTracker {
//     constructor(steps,caloriesBurned) {
//         this.steps=0
//         this.caloriesBurned=0
//     }
//     walk(stepsCount){
//         this.steps+=stepsCount
//         this.caloriesBurned = Math.floor(this.steps / 1000) * 50;

//         console.log(`ნაბიჯები: ${this.steps}`);
//         console.log(`დამწვარი კალორიები: ${this.caloriesBurned}`);

//     }
// }
// const fitness = new FitnessTracker()

// fitness.walk(1000)





// class Thermostat {
//     constructor(temperature) {
//         this.temperature=22
//     }
//     warmUp(){
//         if (this.temperature>=30){
//             console.log("ტემპერატურა არ უნდა აცდეს 30")
//             return
//         }
//         this.temperature++;
//         console.log(this.temperature);
//     }
//     coolDown() {
//         if (this.temperature <= 16) {
//             console.log("ტემპერატურა არ უნდა ჩამოცდეს 16");
//             return;
//         }

//         this.temperature--;
//         console.log(this.temperature);
//     }
// }
// const temper = new Thermostat();

// temper.warmUp();
// temper.warmUp();

