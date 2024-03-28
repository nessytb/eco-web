const openshopping = document.querySelector('.cartt');
const closeShopping = document.querySelector('.closeShopping');
const list = document.querySelector('#products');
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
function pages(){
  const page = document.getElementById('thepages');
  if (page.style.display == 'none') {
    page.style.display = 'flex';
    page.classList.add("thepages");
  }
  else{
    page.style.display = 'none';
  }
}
let products = {
    data: [
    {
      id: 1,
      quantity: 5,
      category: 'Topwear',
      image: 'images/topwear1.jpg',
      details: 'Our Women\'s Long Shirt offers a flattering, flowy silhouette perfect for any occasion. Crafted from soft, breathable fabric, it\'s ideal for layering or standalone wear, ensuring comfort and style all day long',
      productName: 'Women\'s long shirt',
      price: 49,
    },
    {
      id: 2,
      quantity: 5,
      category: 'Topwear',
      image: 'images/topwear2.jpg',
      details: 'Discover our sleek men\'s top, crafted for style and comfort. Tailored from premium materials, it offers a modern fit that effortlessly blends versatility and sophistication. Elevate your look with ease.',
      productName: 'Tops for Men',
      price: 50,
    },
    {
      id: 3,
      quantity: 5,
      category: 'Bottomwear',
      image: 'images/bottomwear1.jpg',
      details: 'Introducing our chic women\'s bottomwear, designed for style and comfort. Tailored from quality fabrics, these bottoms offer a flattering fit that accentuates your silhouette. Whether you\'re dressing up for a night out or keeping it casual, our versatile designs ensure effortless elegance for every occasion',
      productName: ' women\'s Bottomwear',
      price: 65,
      
    },
    {
      id: 4,
      quantity: 5,
      category: 'Jacket',
      image: 'images/jacket1.webp',
      details: 'Elevate your style with our bold men\'s red jacket. Crafted with precision and flair, it\'s the perfect statement piece for any occasion. Whether you\'re hitting the streets or heading to a social gathering, this jacket promises to turn heads and exude confidence. With its modern design and comfortable fit, it\'s a must-have addition to your wardrobe',
      productName: 'red jacket for Men',
      price: 80,
    },
    {
      id: 5,
      quantity: 5,
      category: 'Jacket',
      image: 'images/jacket2.webp',
      details: 'Introducing our classic men\'s jacket, a timeless essential for every wardrobe. Crafted with care from premium materials, it offers both style and durability. Whether you\'re braving the elements or adding a layer of sophistication to your ensemble, this jacket delivers unmatched comfort and versatility. Elevate your look with our signature piece.',
      productName: 'Jacket for Men',
      price: 85,
    },
    {
      id: 6,
      quantity: 5,
      category: 'Bottomwear',
      image: 'images/bottomwear2.jpg',
      details: 'Introducing our latest collection of men\'s bottomwear, crafted for the modern gentleman. From sleek trousers to comfortable jeans, our bottoms are designed to elevate your style while providing all-day comfort. With attention to detail and quality craftsmanship, our selection ensures you\'ll look sharp and feel confident in any setting. Explore the perfect fit for your lifestyle',
      productName: 'Men\'s Bottomwear',
      price: 60,
    },
    {
      id: 7,
      quantity: 5,
      category: 'Shoes',
      image: 'images/shoes1.jpg',
      details: 'Elevate your style with our stunning women\'s heels. Designed for both elegance and comfort, our heels are crafted from premium materials to ensure a perfect fit and lasting durability. From classic pumps to trendy sandals, our collection offers a variety of styles to suit any occasion. Step out in confidence and sophistication with our fashionable heels',
      productName: 'Women\'s Heel',
      price: 80,
      
    },
    {
      id: 8,
      quantity: 5,
      category: 'Shoes',
      image: 'images/shoes3.webp',
      details: 'Introducing our latest men\'s sneakers, blending style with functionality. Crafted with premium materials, these sneakers offer both comfort and durability. From classic designs to contemporary trends, find the perfect pair to elevate your everyday look',
      productName: 'Men\'s sneakers',
      price: 60,
    },
    {
      id: 9,
      quantity: 5,
      category: 'Shoes',
      image: 'images/shoes2.webp',
      details: 'Discover chic comfort with our feminine footwear. Crafted for style and support, our shoes elevate every step. From heels to flats, find your perfect pair today.',
      productName: 'Feminine Footwear',
      price: 70,
    },
    {
      id: 10,
      quantity: 5,
      category: 'Shoes',
      image: 'images/shoes4.jpg',
      details: 'Elevate your style with our formal footwear for gentlemen. Crafted for sophistication and comfort, our shoes are the epitome of refined elegance. From classic oxfords to sleek loafers, each pair exudes timeless charm and impeccable craftsmanship. Step into confidence with our distinguished collection',
      productName: 'Formal Footwear for Gentlemen',
      price: 65,
    },
  ],
  };
  for (let i of products.data) {
    //card should have category and should stay hidden initially
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");
    //img div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    image.classList.add("immg");
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //conaiter
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h4");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    card.appendChild(container);
  
    //product price
    let price = document.createElement("h5");
    price.classList.add("product-price");
    price.innerText = "$" + i.price;
    container.appendChild(price);
    
  
    document.getElementById("products").appendChild(card);
    
    card.addEventListener('click', () => showProductDetails(i));
  
  }
  
  //paramater passed from button(parameter same as category)
  function filterProduct(value){
    //button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if the value equals innertext
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      }
      else{
        button.classList.remove("active");
      }
    });
    // select all cards
  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    // display all cards when all button click
    if (value == "All") {
      element.classList.remove("hide");
    }
    else{
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      }
      else{
        element.classList.add("hide");
      }
    }
  });
  
  }
  
  
  
  //initially display all products
  window.onload = () => {
    filterProduct("All");
  }
  
  //search button click
  document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");  
    // loop through all element
    elements.forEach((element, index) => {
      // check if text includes search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        cards[index].classList.remove("hide");
      } else {
        cards[index].classList.add("hide");
      }
    });
  });



  function showProductDetails(i) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `<span class="close" onclick="closeModal()">&times;</span>
                        <img src="${i.image}" alt="${i.productName}">
                        <h2>${i.productName}</h2>
                        <p>Price: $${i.price}</p>
                        <p>${i.details}</p>
                        <button class="button1" onclick="addToCart(${i.id})">Add to Cart</button>
                        <button class="button2" onclick="checkout()">Checkout</button>`;
    
    document.body.appendChild(modal);
    modal.style.display = 'block';
  }
  function closeModal() {
    const modal = document.querySelector('.modal');
    modal.remove();
  }

  
  function checkout() {
    window.location.href = "checkout.html"
  }

    document.getElementById('searchinput').addEventListener('keypress', function(event) {
      // Check if the pressed key is Enter (key code 13)
      if (event.key === 'Enter') {
          // Prevent the default behavior of the Enter key (form submission)
          event.preventDefault();
          
          // Get the search query
          var searchQuery = this.value.trim().toLowerCase();
          
          // Find the element with the matching text
          var elements = document.getElementsByTagName('*');
          var foundElement = null;
          for(var i = 0; i < elements.length; i++) {
              if(elements[i].textContent.trim().toLowerCase() === searchQuery) {
                  foundElement = elements[i];
                  break;
              }
          }
      
          if(foundElement) {
              foundElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          } else {
              alert('Element not found!');
          }
      }
  });
  
function liens(){
  const lienn = document.getElementById('liens');
  if (lienn.style.display == 'none') {
    lienn.style.display = 'flex';
    lienn.classList.add("liens");
  }
  else{
    lienn.style.display = 'none';
  }
}




let cart = [];

function addToCart(productId) {
  const productToAdd = products.data.find(product => product.id === productId);
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
        <img class="imagecart" src="${product.image}" />
        <h2 class="titlecart">${product.productName}</h2>
        <p class="prixcart">$${product.price * product.quantity}</p>
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

updateTotalAndCount();
