// async function getBlogPost(params) {
//     try {
//         const variable =  await fetch('https://jsonplaceholder.typicode.com/posts/1')
//         const variable2 = await variable.json()
//         console.log(`სტატიის სათაურია: ${variable2.title}`);

//     } catch (error) {
//         console.log("ბოდიში, სერვერზე შეფერხებაა: " + error)
//     }
// }

// getBlogPost()
// წარმოიდგინე, რომ წერ კოდს ახალი თამაშისთვის. სანამ თამაში დაიწყება, 3 სხვადასხვა ფაილი უნდა გადმოიწეროს სერვერიდან:

// რუკა (Map)

// პერსონაჟი (Character)

// ხმები (Audio)

// ეს სამივე ფაილი ერთმანეთზე დამოკიდებული არ არის (რუკას არ სჭირდება ხმები, რომ გადმოწერა დაიწყოს). შესაბამისად, დრო რომ მოვიგოთ, სამივე ერთდროულად უნდა დავიწყოთ!

// (ჩათვალე, რომ უკვე გაქვს 3 მზა ფუნქცია: downloadMap(), downloadCharacter() და downloadAudio(). თითოეული მათგანი აბრუნებს პრომისს).


// ----------------------
// შექმენი ფუნქცია: დაწერე ასინქრონული ფუნქცია (async), რომელსაც დაარქმევ startGame (თამაშის დაწყება).

// დაიწყე გადმოწერები (სწრაფი გზით!): ფუნქციის შიგნით შექმენი 3 ცვლადი: mapPromise, charPromise და audioPromise.

// მიანიჭე მათ შესაბამისი ფუნქციები (downloadMap(), downloadCharacter(), downloadAudio()).

// ყურადღება: აქ await არ გამოიყენო! სამივე პროცესი ეგრევე უნდა დაიწყოს.

// დაელოდე და დაბეჭდე: ახლა დაწერე ერთი console.log, რომელშიც გამოიტან ასეთ ტექსტს (გამოიყენე backticks   და დოლარის ნიშნები ${}):

// "თამაში მზადაა! ჩაიტვირთება: [რუკის მნიშვნელობა], [პერსონაჟის მნიშვნელობა], და [ხმების მნიშვნელობა]."

// ზუსტად ამ ტექსტის შიგნით, თითოეულ ცვლადს წინ დაუწერე await, რომ კოდი აქ დაელოდოს სამივეს დასრულებას და ტექსტში მზა პასუხები ჩასვას.

// გამოიძახე ფუნქცია: ბოლოს, ფუნქციის გარეთ გამოიძახე startGame().
function downloadMap(){

}
function downloadCharacter(){
    
}
function downloadAudio(){
    
}

async function startGame() {
    const mapPromise = downloadMap()
    const charPromise = downloadCharacter()
    const audioPromise = downloadAudio()

    console.log(`თამაში მზადაა! ჩაიტვირთება: ${await mapPromise}, ${await charPromise}, და ${await audioPromise}.`)
}

startGame()