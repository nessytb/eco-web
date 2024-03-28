const openshopping = document.querySelector('.cartt');
const closeShopping = document.querySelector('.closeShopping');
const list = document.querySelector('.list');
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
    image: 'sport16.png',
    title: 'sport machine',
    price: 240,
    quantity: 'Quantity available: 5',
    details: 'Sport machines are fitness equipment used for various exercises like cardio, strength training, and flexibility. They include treadmills, ellipticals, bikes, rowing machines, and more, catering to different fitness goals and preferences.',
  },
  {
    id: 2,
    image: 'sport17.png',
    title: 'Benches Weights',
    price: 99,
    quantity: 'Quantity available: 2',
    details: 'Weight benches are essential for strength training, providing a stable surface for exercises like bench presses and dumbbell workouts. They come in various designs to target different muscle groups effectively.',
  },
  {
    id: 3,
    image: 'sport15.png',
    title: 'sole 95s elliptical machine',
    price: 89,
    quantity: 'Quantity available: 11',
    details: 'The Sole 95S elliptical machine is a high-quality fitness equipment designed for effective cardio workouts with minimal impact on joints. It features adjustable stride length, resistance levels, and preset programs for versatility. Its ergonomic design ensures comfort, making it a popular choice for home gyms and commercial settings.',
  },
  {
    id: 4,
    image: 'sport14.png',
    title: 'leg weight',
    price: 199,
    quantity: 'Quantity available: 35',
    details: 'Leg weights, worn around the ankles or thighs, serve to intensify leg exercises by adding resistance. These accessories are commonly used during activities like walking, running, or leg lifts, effectively enhancing lower body strength and endurance during workouts.',
  },
  {
    id: 5,
    image: 'sport18.png',
    title: 'Gym fitness',
    price: 98,
    quantity: 'Quantity available: 25',
    details: 'Gym fitness involves working out in a gym to improve health and fitness. It includes using various equipment like cardio machines and weights to build strength, endurance, and flexibility. It\'s a structured way to achieve personal fitness goals',
  },
  {
    id: 6,
    image: 'sport19.png',
    title: 'American Football',
    price: 59,
    quantity: 'Quantity available: 55',
    details: 'American football is a popular, physical sport played between two teams of eleven players each. The goal is to advance the ball down the field and score points by crossing the opponent\'s goal line or kicking it through the goalposts. It\'s known for its strategy, athleticism, and cultural impact',
  },
  {
    id: 7,
    image: 'sport20.png',
    title: 'Gym ball',
    price: 99,
    quantity: 'Quantity available: 9',
    details: 'Gym balls, also known as stability or exercise balls, are inflatable fitness tools used for a variety of exercises. They enhance balance, core strength, and flexibility, making them versatile additions to workouts. From core exercises to stretching and rehabilitation, gym balls offer effective ways to engage multiple muscle groups and improve overall fitness',
  },
  {
    id: 8,
    image: 'sport21.png',
    title: 'weight sets',
    price: 98,
    quantity: 'Quantity available: 7',
    details: 'Weight sets are comprehensive packages containing barbells, dumbbells, and weight plates, facilitating a diverse range of strength training exercises. With adjustable resistance options, these sets cater to individuals of varying fitness levels, enabling effective full-body workouts and muscle development.',
  },
  {
    id: 9,
    image: 'sport22.png',
    title: 'Gym Weights',
    price: 159,
    quantity: 'Quantity available: 5',
    details: 'Gym weights are vital tools for building strength and muscle. They include dumbbells, barbells, kettlebells, and weight plates, offering a variety of exercises to target different muscle groups. Whether lifting, swinging, or pressing, these weights provide resistance, leading to stronger, more defined muscles and improved fitness levels.',
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
