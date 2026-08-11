// const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

// const startCountdown = async () => {
//     console.log("მზადება იწყება...")
//     await delay(1000)
//     console.log("3...")
//     await delay(1000)
//     console.log("2...")
//     await delay(1000)
//     console.log("1...")
//     await delay(1000)
//     console.log("გაშვება!"); 
// }
// startCountdown()



const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const proccessOrder = async (orderId) => {
    console.log(`შეკვეთა #${orderId} მიღებულია. ვამოწმებთ მარაგს...`)
    await delay(1500)
    console.log("თანხა წარმატებით ჩამოიჭრა. მიმდინარეობს შეფუთვა...")
    await delay(1500)
    console.log("შეკვეთა გადაეცა კურიერს! მადლობა რომ სარგებლობთ ჩვენით.")

}
proccessOrder("4527")