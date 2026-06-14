const cardDivs = document.querySelectorAll(".card");
let cart = [];

console.log(cardDivs);
const cartddiv = document.getElementById("cartdi")
const rendercart = () => {
    cartddiv.innerHTML = ""
    cart.forEach((item,index) =>{
        let cardDivv = document.createElement("div");
        cardDivv.className = "product";

        cardDivv.innerHTML = `
        <h3>${item.cardName}</h3>
        <b>${item.price}</b>
        <p>${item.description}</p>
        <button onclick="deletecard(${index})">Delete</button>
        `

        cartddiv.appendChild(cardDivv)

    })
}

const addToCart = (card) => {
    const cardobj = {
        cardName: card.querySelector("h1").textContent,
        price: card.querySelector("b").textContent,
        description: card.querySelector("p").textContent,
    };

    cart.push(cardobj);
    console.log("Updated Cart:", cart);
};
cardDivs.forEach((item, index) => {
    const button = item.querySelector("button");

    button.addEventListener("click", () => {
        addToCart(item);
        rendercart();
    });
});

const deletecard = (index) => {
    cart = cart.filter((_,i) => i !== index)
    rendercart()
}