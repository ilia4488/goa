let balance = 500

let withdrawAmount = 600

let isAccountActive = true


if (!isAccountActive){
    console.log("ტრანზაქცია უარყოფილია: ბარათი დაბლოკილია.")
}else if(withdrawAmount>balance){
    console.log("არასაკმარისი ნაშთი.")
}else if(withdrawAmount<=0){
    console.log("გთხოვთ, მიუთითოთ ვალიდური თანხა.")
}else if(withdrawAmount===balance){
    console.log("ტრანზაქცია სრულდება. თქვენი ბალანსი ნულდება!")
}else{
    console.log("ტრანზაქცია წარმატებულია.")
}
console.log()
function isAllowed(age) {
    if (age >= 18) {
        return "წვდომა დაშვებულია";
    } else {
        return "წვდომა აკრძალულია";
    }
}


console.log(isAllowed(15));
console.log(isAllowed(18));
console.log(isAllowed(60));