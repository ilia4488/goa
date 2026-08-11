// 1) ახსენით რაში გვეხმარება Error Handling ი და დაწერეთ 1 მაგალითი მასზე
// error handling vgexmareba imashi rom gavigot sad aris shecdoma da gamoaqvs shecdoma lamazad da gasarkvevad
// function trc(text){
//     try {
//     console.log(text.toUpperCase())
// } catch (error) {
//     console.log(error.message)
// }
// }
// trc("hello world")
// trc(1234)

// 2) შექმენი ასინქრონული ფუნქცია loadPlayerProfile().

// ფუნქციის შიგნით გახსენი try...catch ბლოკი.

// try-ს შიგნით await Promise.all()-ის გამოყენებით გააშვი სამივე ფუნქცია (fetchPlayerStats(), fetchInventory(), fetchMatchHistory()) ერთდროულად და შედეგი შეინახე ცვლადში.

// for ციკლის გამოყენებით (ან მასივის ინდექსებით) გამოიტანე სამივე მიღებული შედეგი კონსოლში.

// catch ბლოკში დაბეჭდე შეცდომის შეტყობინება (error.message ან error).

// ბოლოს გამოიძახე loadPlayerProfile().

// function fetchPlayerStats(){
//         return new Promise((resolve)=>{
//         setTimeout(() => resolve("lvl5"),1000);
//     })

// }
// function fetchInventory(){
//         return new Promise((resolve) => {
//         setTimeout(() => resolve("full inventory"), 1000);
//     });
// }
// function fetchMatchHistory(){
//         return new Promise((resolve) => {
//         setTimeout(() => resolve("7 wins || 2 loses"), 1000);
//     });
// }

// async function loadPlayerProfile() {
//     try {
//         const variable1 = await Promise.all([fetchPlayerStats(), fetchInventory(), fetchMatchHistory()])
//         for(let i =0;i<variable1.length;i++){
//             console.log(variable1[i])
//         }
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// loadPlayerProfile()


// 3) 

// --
// დაწერე 3 ცალკეული ფუნქცია, რომლებიც აბრუნებენ ახალ Promise-ს და სიმულაციას უკეთებენ დროში გაწელილ პროცესებს 
// (setTimeout-ის გამოყენებით):

// პირველი ფუნქცია: ვიდეოს ფაილის ატვირთვა. უნდა ელოდებოდეს 2 წამს და resolve-ით აბრუნებდეს ტექსტს: "ვიდეო აიტვირთა".

// მეორე ფუნქცია: თამბნეილის (ყდის) შექმნა. უნდა ელოდებოდეს 1 წამს და resolve-ით აბრუნებდეს ტექსტს: "თამბნეილი მზადაა".

// მესამე ფუნქცია: საავტორო უფლებების შემოწმება. უნდა ელოდებოდეს 1.5 წამს და resolve-ით აბრუნებდეს ტექსტს: 
// "საავტორო უფლებები სუფთაა".

// ----
// შექმენი მთავარი ფუნქცია, რომელმაც ეს 3 პროცესი უნდა მართოს:

// გამოცხადება: გამოიყენე async საკვანძო სიტყვა ფუნქციის შექმნისას.

// უსაფრთხოება: მთელი შიდა ლოგიკა მოათავსე try...catch ბლოკში.

// პარალელური გაშვება: try ბლოკის შიგნით გამოიყენე await Promise.all(), რომ სამივე ფუნქცია ერთდროულად გაუშვა და 
// მიღებული პასუხების მასივი შეინახო ცვლადში.

// შედეგის გამოტანა: იქვე, try-ს შიგნით, გადაუარე მიღებულ მასივს (ციკლით ან დესტრუქტურიზაციით) და თითოეული შედეგი 
// გამოიტანე კონსოლში. ბოლოს დაბეჭდე ტექსტი: "ვიდეო წარმატებით გამოქვეყნდა!".

// შეცდომის დაჭერა: catch ბლოკში დაბეჭდე შეცდომის ტექსტი (error).

// გამოძახება: ბოლოს გამოიძახე ეს ფუნქცია.

// ---
// სცენარი 1 (წარმატება): გაუშვი კოდი ისე, რომ სამივე ფუნქცია resolve-ს აბრუნებდეს. დარწმუნდი, რომ ლოდინის დრო არის ზუსტად 
// 2 წამი (ყველაზე ნელი დავალების დრო) და ეკრანზე იბეჭდება სამივე შეტყობინება.

// სცენარი 2 (შეცდომა): შეცვალე მესამე ფუნქცია ისე, რომ resolve-ის ნაცვლად დააბრუნოს reject("Copyright Strike!"). გაუშვი კოდი 
// და შეამოწმე, რომ Promise.all() ეგრევე შეწყვეტს მუშაობას, try ბლოკი დაიტოვება და ამოქმედდება catch ბლოკი.


function videopublish(){
        return new Promise((resolve)=>{
        setTimeout(() => resolve("ვიდეო აიტვირთა"),2000);
    })}

function thumbnailcreation(){
        return new Promise((resolve)=>{
        setTimeout(() => resolve("თამბნეილი მზადაა"),1000);
    })}

function authorrights(){
        return new Promise((resolve)=>{
        setTimeout(() => resolve("საავტორო უფლებები სუფთაა"),1500);
    })}


async function mainf(){
    try {
        const variable1=await Promise.all([videopublish(),thumbnailcreation(),authorrights()])
            for(let i = 0 ; i<variable1.length ; i++){
            console.log(variable1[i])
            
        }
        
        console.log("ვიდეო წარმატებით გამოქვეყნდა!")
        
    } catch (error) {
        console.log(error.message || error)
    }
}

mainf()