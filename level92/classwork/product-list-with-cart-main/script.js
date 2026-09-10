let products = [];
let cart = [];

const productListContainer = document.querySelector('.sec');
const cartContainer = document.querySelector('.cart');

async function fetchProducts() {
  try {
    const response = await fetch('./data.json');
    products = await response.json();
    renderProducts();
    renderCart();
  } catch (error) {
    console.error(error.message);
  }
}

function renderProducts() {
  productListContainer.innerHTML = '';

  products.forEach((product, index) => {
    const cartItem = cart.find(item => item.name === product.name);
    const quantity = cartItem ? cartItem.quantity : 0;

    const card = document.createElement('div');
    card.classList.add('card');

    let buttonHTML = '';
    if (quantity === 0) {
      buttonHTML = `
        <button class="btn add-to-cart-btn" onclick="addToCart(${index})">
          <img src="./assets/images/icon-add-to-cart.svg" alt="cart" class="cartimg">
          <span class="par">Add to Cart</span>
        </button>
      `;
    } else {
      buttonHTML = `
        <div class="btn quantity-btn active">
          <button class="qty-change-btn" onclick="updateQuantity(${index}, -1)">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0z"/></svg>
          </button>
          <span>${quantity}</span>
          <button class="qty-change-btn" onclick="updateQuantity(${index}, 1)">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25z"/></svg>
          </button>
        </div>
      `;
    }

    card.innerHTML = `
      <div class="forimg ${quantity > 0 ? 'selected-border' : ''}">
        <picture>
          <source media="(min-width: 1024px)" srcset="${product.image.desktop}">
          <source media="(min-width: 768px)" srcset="${product.image.tablet}">
          <img src="${product.image.mobile}" alt="${product.name}" class="car">
        </picture>
        ${buttonHTML}
      </div>
      <p class="title">${product.category}</p>
      <p class="desc">${product.name}</p>
      <p class="price">$${product.price.toFixed(2)}</p>
    `;

    productListContainer.appendChild(card);
  });
}

window.addToCart = function(index) {
  const product = products[index];
  cart.push({ ...product, quantity: 1 });
  renderProducts();
  renderCart();
};

window.updateQuantity = function(index, change) {
  const product = products[index];
  const item = cart.find(i => i.name === product.name);

  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      cart = cart.filter(i => i.name !== product.name);
    }
  }
  renderProducts();
  renderCart();
};

window.removeFromCart = function(productName) {
  cart = cart.filter(item => item.name !== productName);
  renderProducts();
  renderCart();
};

function renderCart() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <h2>Your Cart (${totalCount})</h2>
      <div class="divfa">
        <img class="img1" src="./assets/images/cake.svg" alt="Empty Cart">
        <p>Your added items will appear here</p>
      </div>
    `;
    return;
  }

  let cartItemsHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-details">
          <span class="qty">${item.quantity}x</span>
          <span class="unit-price">@ $${item.price.toFixed(2)}</span>
          <span class="total-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
        </p>
      </div>
      <button class="remove-btn" onclick="removeFromCart('${item.name}')">
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-.999-.999L4 5 .626 1.625l.999-.999L5 4 8.375.626l.999.999L6 5l3.374 3.376-.999.999z"/></svg>
      </button>
    </div>
  `).join('');

  cartContainer.innerHTML = `
    <h2>Your Cart (${totalCount})</h2>
    <div class="cart-list">${cartItemsHTML}</div>
    <div class="cart-total">
      <span>Order Total</span>
      <span class="total-amount">$${totalPrice.toFixed(2)}</span>
    </div>
    <div class="carbon-neutral">
      <img src="./assets/images/icon-carbon-neutral.svg" alt="Carbon Neutral">
      <p>This is a <strong>carbon-neutral</strong> delivery</p>
    </div>
    <button class="confirm-order-btn" onclick="openOrderModal()">Confirm Order</button>
  `;
}

window.openOrderModal = function() {
  const modal = document.getElementById('order-modal');
  const modalCartList = document.getElementById('modal-cart-list');
  const modalTotalPrice = document.getElementById('modal-total-price');

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  modalCartList.innerHTML = cart.map(item => `
    <div class="modal-item">
      <img src="${item.image.thumbnail}" alt="${item.name}" class="modal-item-img">
      <div class="modal-item-info">
        <p class="modal-item-name">${item.name}</p>
        <p class="modal-item-qty-price">
          <span class="qty">${item.quantity}x</span>
          <span class="unit-price">@ $${item.price.toFixed(2)}</span>
        </p>
      </div>
      <div class="modal-item-total">$${(item.price * item.quantity).toFixed(2)}</div>
    </div>
  `).join('');

  modalTotalPrice.textContent = `$${totalPrice.toFixed(2)}`;
  modal.style.display = 'flex';
};

window.resetOrder = function() {
  cart = [];
  document.getElementById('order-modal').style.display = 'none';
  renderProducts();
  renderCart();
};

fetchProducts();