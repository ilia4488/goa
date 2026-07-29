// // გააკეთეთ ფუნქციონალი სადაც პროდუქტებს ჩაამატებთ კალათაში, როცა ორჯერ ან მეტჯერ დავაწვებით 
// // პროდუქტის დამატებას უნდა შეიცვალოს რაოდენობა და აღარ უნდა ჩაემატოს ახლიდან მასივში, უნდა 
// // დაარენდეროთ კალათაში ჩამატებული პროდუქტები და უნდა შეგეძლოთ წაშლა კალათიდან

// const products = Array.from(document.getElementsByClassName("products"));
// let cart = []

// const cartdiv = document.getElementById("cart")

// const addtocart = () => {
//     const productObj = {
//         productName: product.querySelector("h3").textContent,
//         price: product.querySelector("p").textContent,
//     }

//     cart.push(productObj)
//     console.log(cart)
// }
const products = Array.from(document.getElementsByClassName("product"))
let cart = []


const cartdiv = document.getElementById("cart");

const render = () => {
    
    cartdiv.innerHTML = "<h2>Cart:</h2>"
    
    cart.forEach((item, index) => {
        let productDiv = document.createElement("div");
        productDiv.className = "product";

        
        productDiv.innerHTML = `
            <img src="${item.image} alt="">
            <h3>${item.productName}</h3>
            <p>${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
            <button onclick="deleteProduct(${index})">remove</button>
        `
        cartdiv.appendChild(productDiv)
    })
}

const addToCart = (product) => {
    const image = product.querySelector("img").src;
    const productName = product.querySelector("h2").textContent;
    const price = product.querySelector("p").textContent;

    const existingProduct = cart.find(item => item.productName === productName);

    if (existingProduct) {
        
        existingProduct.quantity += 1;
    } else {
        
        cart.push({
            image: image,
            productName: productName,
            price: price,
            quantity: 1
        });
    }
}

products.forEach((item, index) => {
    const button = item.querySelector("button");

    button.addEventListener("click", () => {
        addToCart(item)
        render()
    })
})

const deleteProduct = (index) => {
    cart = cart.filter((_, i) => i !== index)
    render()
}