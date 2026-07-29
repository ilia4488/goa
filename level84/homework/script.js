
// <!-- 1)
//   სინქრონული არის როდესაც კოდები ეშჰვება თანმიმდევრობით მაგალითად სანამდე პირველი კოდი არ დაიწყება და არ 
//   დასრულდება მეორე არ დაიწყება გამოიყენება უფრო მარტივ კოდებში და დალაგებულებში და ასინქრონული არის როდესაც 
//   ყველა კოდი დამოუკიდებლად მუშაობს გამოიყენება უფრო რთულ და დიდ პროექტებში მაგალითად საიტი რომ არ გაშეშდეს 
//   სანამ ერთი დავალება-კოდი სრულდება -->

// 2)
const printer = () => {
    console.log("first")
    setTimeout(()=>{
        console.log("second")
    },2000)
    setTimeout(()=>{
        console.log("third")
    },1000)
}

printer()

//3)
const checkEvenNumber = (num) => {
    return new Promise((resolve,reject)=>{
        if(num % 2 ===0){
            resolve("რიცხვი ლუწია")
        }else{
            reject("რიცხვი კენტია")
        }
    })
}
checkEvenNumber(4).then((result)=>console.log(result))

