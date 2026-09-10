// შენ აგრძელებ "Todo" (გასაკეთებელი საქმეების) აპლიკაციის განვითარებას. ამჯერად ახალი დავალების სერვერზე გასაგზავნად 
// უნდა გამოიყენო თანამედროვე ასინქრონული მიდგომა — async/await და try...catch ბლოკი.
// შენი ამოცანაა, დაწერო JavaScript კოდი შემდეგი ინსტრუქციებით:
// ფუნქციის შექმნა:
// შექმენი ასინქრონული ფუნქცია სახელწოდებით addTodo (async).
// შეცდომების მართვის ბლოკი (try...catch):
// ფუნქციის შიგნით გახსენი try...catch კონსტრუქცია, რათა მოსალოდნელი შეცდომები უსაფრთხოდ დაიჭირო.
// მონაცემების მომზადება:
// try ბლოკის შიგნით, აიღე ინპუტში ჩაწერილი მნიშვნელობა (todoInput.value) და შეინახე ცვლადში.
// გადააქციე ეს მონაცემი JSON ტექსტად JSON.stringify()-ის გამოყენებით (გასაღები იყოს task).
// მოთხოვნის გაგზავნა (await fetch):
// შექმენი response ცვლადი და მიანიჭე მას await fetch()-ის შედეგი.
// პირველ არგუმენტად გადაეცი სერვერის მისამართი (url), ხოლო მეორე არგუმენტად — ობიექტი, სადაც მიუთითებ მეთოდს (method: 'POST') და სხეულს (body).
// პასუხის დამუშავება და შეცდომის შემოწმება:
// შეამოწმე, არის თუ არა response.ok ჭეშმარიტი.
// თუ კი, მიიღე და დააბრუნე სერვერის პასუხი await response.json()-ის გამოყენებით.
// თუ response.ok მცდარია, ისროლე ახალი შეცდომა (throw new Error(...)).
// catch ბლოკში კი დაბეჭდე ქსელის შეცდომის მესიჯი კონსოლში (console.log(...)).
const url = 'https://jsonplaceholder.typicode.com/posts'
async function addTodo() {
    try {
    const taskv = todoInput.value
    const data = JSON.stringify({task:taskv})
    const response = await fetch(url,{
        method:"POST",
        body:data
    })
    if(response.ok){
        const jresponse = await response.json()
        console.log(jresponse)
        return jresponse
    }else{
        throw new Error("shecdoma")
    }
    } catch (error) {
        console.log(error.message)
    }
}
