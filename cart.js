const openshopping = document.querySelector('.cartt');
const closeShopping = document.querySelector('.closeShopping');
const list = document.querySelector('.list');
const listtt = document.querySelector('.listt');
const listCard = document.querySelector('.listCard');
const body = document.querySelector('body');
const total = document.querySelector('.total');
const count = document.querySelector('.count');

openshopping.addEventListener('click', () => {
  body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
  body.classList.remove('active');
});

let products = [
  {
    id: 1,
    image: 'iphone_14_pro_max.png',
    title: 'Iphone 14 Pro Max',
    price: 240,
    quantity: 'Quantity availablee: 5',
    details: 'The iPhone 14 Pro Max is poised to redefine smartphone excellence with its anticipated blend of innovative features, unparalleled performance, and stunning design, promising to captivate tech enthusiasts and consumers alike upon its release',
  },
  {
    id: 2,
    image: 'macbook_pro.png',
    title: 'Apple MacBook Pro',
    price: 99,
    quantity: 'Quantity available: 2',
    details: 'The Apple MacBook Pro is a premium laptop renowned for its sleek design, powerful performance, and innovative features, making it a top choice for professionals, creatives, and tech enthusiasts seeking cutting-edge computing capabilities.',
  },
  {
    id: 3,
    image: 'airpods_pro_2nd_gen.png',
    title: 'Apple AirPods Pro (2nd Generation)',
    price: 89,
    quantity: 'Quantity available: 11',
    details: 'The Apple AirPods Pro (2nd Generation) elevate the wireless earbud experience with advanced features like active noise cancellation and a comfortable, customizable fit, making them a top choice for premium sound quality and convenience.',
  },
  {
    id: 4,
    image: 'odyssey_g5.png',
    title: 'SAMSUNG Odyssey G5',
    price: 199,
    quantity: 'Quantity available: 35',
    details: 'The SAMSUNG Odyssey G5 is a high-performance gaming monitor known for its immersive display, fast refresh rates, and smooth gameplay experience, catering to gamers seeking top-tier performance and visual fidelity.',
  },
  {
    id: 5,
    image: 'cordless_vacuum.png',
    title: 'INSE Cordless Vacuum Cleaner',
    price: 98,
    quantity: 'Quantity available: 25',
    details: 'The INSE Cordless Vacuum Cleaner combines convenience and performance with its cord-free design, powerful suction capabilities, and versatile cleaning attachments, making it a reliable and efficient choice for maintaining cleanliness in various environments, from homes to offices',
  },
  {
    id: 6,
    image: 'led_lights.png',
    title: 'Nexillumi LED Lights',
    price: 59,
    quantity: 'Quantity available: 55',
    details: 'Nexillumi LED lights are versatile lighting solutions known for their vibrant colors, customizable features, and ease of installation, providing users with an immersive and visually stunning ambiance for any space or occasion.',
  },
  {
    id: 7,
    image: 'smartwatch.png',
    title: 'Smart watch',
    price: 99,
    quantity: 'Quantity available: 9',
    details: 'A smartwatch is a multifunctional wearable device that not only tells time but also offers features such as fitness tracking, notifications, and app integration. It serves as a convenient extension of your smartphone, allowing you to stay connected, track your health metrics, and access various apps and services directly from your wrist.',
  },
  {
    id: 8,
    image: 'floorcleaner.png',
    title: 'Floor Cleaner',
    price: 98,
    quantity: 'Quantity available: 7',
    details: 'A floor cleaner is a versatile tool specifically engineered to effectively eliminate dirt, stains, and grime from a wide range of flooring surfaces, including hardwood, tile, laminate, and more. By providing a thorough cleaning solution, it plays a crucial role in maintaining cleanliness and hygiene standards in diverse settings such as homes, offices, and commercial spaces.',
  },
  {
    id: 9,
    image: 'washingmachine.png',
    title: 'Washing machine',
    price: 159,
    quantity: 'Quantity available: 5',
    details: 'A washing machine is an essential household appliance designed to clean clothes efficiently and effectively. It automates the process of washing clothes by agitating them with water and detergent, removing dirt, stains, and odors.',
  },
];

function showProductDetails(product) {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `<span class="close" onclick="closeModal()">&times;</span>
                    <img src="images/${product.image}" alt="${product.title}">
                    <h2>${product.title}</h2>
                    <p>Price: $${product.price}</p>
                    <p>${product.quantity}</p>
                    <p>${product.details}</p>
                    <button onclick="addToCart(${product.id})" class="button1">Add to Cart</button>
                    <button class="button2" onclick="checkout()">Checkout</button>`;
  
  document.body.appendChild(modal);
  modal.style.display = 'block';
}
function checkout() {
  window.location.href = "checkout.html"
}
function closeModal() {
  const modal = document.querySelector('.modal');
  modal.remove();
}

let cart = [];

function initApp() {
  products.forEach(product => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
      <img class="product-image" src="images/${product.image}" />
      <h2>${product.title}</h2>
      <p>$${product.price}</p>
      <p>${product.quantity}</p>
    `;
    list.appendChild(newDiv);
    newDiv.addEventListener('click', () => showProductDetails(product));
  });
}

initApp();

function addToCart(productId) {
  const productToAdd = products.find(product => product.id === productId);
  const existingProduct = cart.find(product => product.id === productId);

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({ ...productToAdd, quantity: 1 });
  }

  reloadCart();
}

function reloadCart() {
  listCard.innerHTML = '';
  let totalCount = 0;
  let totalPrice = 0;

  cart.forEach(product => {
    totalCount += product.quantity;
    totalPrice += product.price * product.quantity;

    let newLi = document.createElement('li');
    newLi.innerHTML = `
      <div class="groupcart">
        <img class="imagecart" src="images/${product.image}" />
        <h2 class="titlecart">${product.title}</h2>
        <p class="prixcart">$${product.price * product.quantity}</p>
        <p class="countlawalcart">${product.quantity}</p>
        <div class='gridbutton'>
          <button class="nakis" onclick="changeQuantity(${product.id}, ${product.quantity - 1})">-</button>
          <p class="countzawjcart">${product.quantity}</p>
          <button class="zaid" onclick="changeQuantity(${product.id}, ${product.quantity + 1})">+</button>
          <i onclick="removeFromCart(${product.id})" class="fa-sharp fa-solid fa-trash"></i>
        </div>
      </div>
    `;
    listCard.appendChild(newLi);
  });

  total.innerHTML = `$${totalPrice}`;
  count.innerHTML = totalCount;

  // Call the function to update total and count whenever the cart is reloaded
  updateTotalAndCount();
}


function changeQuantity(productId, newQuantity) {
  const productIndex = cart.findIndex(product => product.id === productId);
  if (newQuantity <= 0) {
    cart.splice(productIndex, 1);
  } else {
    cart[productIndex].quantity = newQuantity;
  }
  reloadCart();
}

function removeFromCart(productId) {
  const productIndex = cart.findIndex(product => product.id === productId);
  cart.splice(productIndex, 1);
  reloadCart();
}
function updateTotalAndCount() {
  let totalCount = 0;
  let totalPrice = 0;

  cart.forEach(product => {
    totalCount += product.quantity;
    totalPrice += product.price * product.quantity;
  });

  total.innerHTML = `$${totalPrice}`;
  count.innerHTML = totalCount;
}

// Call the function to update total and count initially
updateTotalAndCount();










