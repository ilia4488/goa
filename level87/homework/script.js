// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, ms);
//   });
// }

// async function greet(params) {
//     console.log("ველოდები მონაცემებს...");
//     await delay(2000)
//     console.log("მონაცემები წარმატებით ჩაიტვირთა!");
// }

// greet()

// function fetchUser(id) {
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve({userId: id, role: "admin"})
//         }, 1000);

//     })
// }

// function getPermissions(role) {
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             if (role==="admin"){
//                 resolve(["წაკითხვა", "ჩაწერა", "წაშლა"])
//             }else{
//                 resolve([]);
//             }
//         }, 1000);
//     })

// }

// async function loadUserDashboard(id){
//   const user = await fetchUser(1);
//   const permissions = await getPermissions(user.role);
//   console.log(permissions);
// }

// loadUserDashboard(1)


// 1)
// შექმენი Promise (მაგალითად ფუნქცია fetchData), რომელიც setTimeout-ის გამოყენებით 2 წამში დააბრუნებს რაიმე ტექსტს (მაგ: "მონაცემები წარმატებით ჩაიტვირთა").
// შემდეგ დაწერე async ფუნქცია, რომელშიც await ოპერატორის გამოყენებით დაელოდები ამ Promise-ის შესრულებას და დაბრუნებულ შედეგს გამოიტან კონსოლში.
// function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("მონაცემები წარმატებით ჩაიტვირთა");
//         }, 2000);
//     });
// }

// async function main() {
//     console.log("იტვირთება მონაცემები...");
//     const result = await fetchData();
//     console.log(result);
// }
// main();

// 2)
// დაწერე ორი ასინქრონული ოპერაცია.

// პირველმა ფუნქციამ (მაგ: getUser()) უნდა დააბრუნოს მომხმარებლის ობიექტი ან უბრალოდ ID (მაგ: { id: 5 }).

// მეორე ფუნქციამ (მაგ: getUserPosts(userId)) არგუმენტად უნდა მიიღოს პირველი ფუნქციიდან დაბრუნებული ID და დააბრუნოს ამ მომხმარებლის პოსტების მასივი (მაგ: ["პოსტი 1", "პოსტი 2"]).
// დაწერე მთავარი async ფუნქცია, სადაც ჯერ ამოიღებ მომხმარებელს, ხოლო შემდეგ მის ID-ს გადააწვდი მეორე ფუნქციას და ამოიღებ პოსტებს. ორივე შედეგი დაბეჭდე.

// function getUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ id: 5, name: "გიორგი" });
//         }, 1000);
//     });
// }

// function getUserPosts(userId) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 `პოსტი 1 (მომხმარებლის ID: ${userId})`,
//                 `პოსტი 2 (მომხმარებლის ID: ${userId})`
//             ]);
//         }, 1500);
//     });
// }
// async function main2() {
//     console.log("მონაცემების წამოღება დაიწყო...");

//     const user = await getUser();
//     console.log("მომხმარებელი:", user);

//     const posts = await getUserPosts(user.id);
//     console.log("პოსტები:", posts);
// }

// main2();


// 3)
// შექმენი Promise, რომელიც 50%-იანი ალბათობით ან დარეზოლვდება (წარმატებით შესრულდება), ან დარეჯექთდება (შეცდომას დააბრუნებს, 
// მაგ: "სერვერთან კავშირი დაიკარგა").
// დაწერე async ფუნქცია ამ Promise-ის გამოსაძახებლად და სავალდებულოდ გამოიყენე try...catch ბლოკი. თუ ოპერაცია წარმატებით დასრულდა, 
// try ბლოკში დაბეჭდე შედეგი, ხოლო თუ შეცდომა დაფიქსირდა, catch ბლოკმა უნდა დაიჭიროს ეს შეცდომა და გამოიტანოს კონსოლში წითლად (console.error).
// function hlpr() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const success = Math.random() >= 0.5

//             if(success){
//                 resolve("წარმატებით შესრულდება")
//             }else{
//                 reject("სერვერთან კავშირი დაიკარგა")
//             }
//         },1500)
//     })
// }

// async function gethl(params) {
    
//     try {
//         const vari = await hlpr()
//         console.log("warmateba: " + vari)
//     } catch (error) {
//         console.error(error)
//     }
// }
// gethl()
// 4)
// წარმოიდგინე, რომ იწერ ორ სხვადასხვა მონაცემს, რომლებიც ერთმანეთზე დამოკიდებული არ არის. შექმენი ორი ფუნქცია: getProducts() 
// (ყოვნდება 2 წამი) და getCategories() (ყოვნდება 3 წამი).
// დაწერე async ფუნქცია, სადაც ამ ორ ოპერაციას გაუშვებ ერთდროულად (ისე, რომ მეორე არ ელოდებოდეს პირველის დასრულებას დაწყებამდე). 
// მხოლოდ მათი გამოძახების შემდეგ გამოიყენე await ორივე ცვლადზე, რათა საბოლოოდ ორივე შედეგი ერთად დაბეჭდო.
// function getProducts() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("successs")
//         }, 2000);
//     })
// }
// function getCategories() {
//         return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             reject("no")
//         }, 3000);
//     })
// }
// async function runall() {
//     const productsPromise = getProducts();
//     const categoriesPromise = getCategories();

//     try {
//         const products = await productsPromise;
//         const categories = await categoriesPromise;
//         console.log(products, categories);
//     } catch (error) {
//         console.error("შეცდომა:", error);
//     }
// }
// runall()
// 5)
// შექმენი სამი სხვადასხვა Promise, რომლებიც სხვადასხვა დროით ყოვნდება (მაგალითად: 1 წამი, 1.5 წამი და 2 წამი) და აბრუნებენ სხვადასხვა 
// სტრიქონებს (მაგ: "A", "B", "C").
// დაწერე async ფუნქცია და გამოიყენე await Promise.all(), რათა სამივე Promise-ს დაელოდო პარალელურ რეჟიმში. საბოლოოდ დაბრუნებული 
// შედეგების მასივი გამოიტანე კონსოლში.

function promiseone() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("A")
        }, 1000);
    })
}
function promisetwo() {
        return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("B")
        }, 1500);
    })
}
function promisethree() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("C")
        }, 2000);
    })
}
async function four() {
    const all = await Promise.all([promiseone(),promisetwo(),promisethree()])
    console.log(all)
}
four()