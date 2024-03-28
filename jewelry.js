
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

var silder=[
  {
  img:"images/hande.jpg",
  title:"necklaces ",
  p:"mixed cluster drop pendant, Diamond ring ",
  pp:"and earings collection"
  
  },
  {
  img:"images/hende2.webp",
  title:"jewelry",
  p:"my jewelry is about a joy for life and a timeless beauty",
  pp:""
  },
  {
  img:"images/hande3.jpg",
  title:"jewelry",
  p:"princess cut diamond encrusted engagement",
  pp:" bridal set in 14k white gold"
  }
  
  ]
  var imgg=document.getElementById("imag");
  var phrase=document.getElementById("phrase");
  var titre=document.getElementById("titre");
  var pp=document.getElementById("para2");
  var i=0;
  function sildershow(){
  imgg.src=silder[i].img;
  titre.textContent=silder[i].title;
  phrase.textContent=silder[i].p;
  pp.textContent=silder[i].pp;
  if (i<silder.length-1) {
  
  i++;
  }
  else{
  i=0;
  
  }

  }
  // Automatically change the picture every 3.5 seconds
  setInterval(sildershow, 3500);



    let products = {
      data: [
      {
        id: 1,
        quantity: 5,
        category: 'necklace',
        image: 'images/neckless3.jpg',
        details: 'The Golden Aura Necklace mesmerizes with its intricate design, crafted from the finest 18K gold and adorned with a resplendent gemstone. Each detail reflects unparalleled craftsmanship, capturing the essence of timeless elegance and sophistication, making it a cherished symbol of luxury and refinement',
        productName: 'The Golden Aura Necklace',
        price: 49,
      },
      {
        id: 2,
        quantity: 5,
        category: 'Rings',
        image: 'images/ring3.jpg',
        details: 'A sparkling testament to eternal love, featuring a mesmerizing diamond set in a delicate band of shimmering gold or platinum. Its brilliance dazzles the eye, reflecting the radiance of a thousand stars, while its timeless design symbolizes the enduring bond shared between two souls',
        productName: 'The Diamond Brilliance Ring',
        price: 300,
      },
      {
        id: 3,
        quantity: 5,
        category: 'Bracelet',
        image: 'images/bracelet.jpg',
        details: 'A whimsical fusion of vibrant gemstones and intricate metalwork, reminiscent of a mesmerizing kaleidoscope\'s ever-changing patterns. Each delicate link tells a story of beauty and harmony, captivating the imagination and celebrating the kaleidoscope of life\'s moments',
        productName: 'The Kaleidoscope Bracelet',
        price: 65,
        
      },
      {
        id: 4,
        quantity: 5,
        category: 'Bracelet',
        image: 'images/bracelet2.jpg',
        details: ' A graceful composition of ivory-hued beads delicately strung together, reminiscent of whispers of elegance and refinement. Its understated beauty speaks volumes, adding a touch of sophistication to any ensemble while evoking a sense of timeless charm and grace',
        productName: 'The Ivory Whisper Bracelet',
        price: 80,
      },
      {
        id: 5,
        quantity: 5,
        category: 'necklace',
        image: 'images/neckless3.webp',
        details: ' An enchanting cascade of glistening crystals, delicately intertwined with icy silver strands, evoking the ethereal beauty of a winter\'s frost. Each shimmering pendant whispers tales of snow-kissed landscapes and enchanted forests, casting a spell of elegance and intrigue wherever it adorns',
        productName: 'The Frost Whisper Necklace',
        price: 85,
      },
      {
        id: 6,
        quantity: 5,
        category: 'Earrings',
        image: 'images/earring.jpg',
        details: 'Inspired by the celestial dance of the Northern Lights, these earrings boast a mesmerizing array of colorful gemstones that evoke the vibrant hues of an aurora. Set against a backdrop of polished silver or gold, each delicate bloom captures the essence of nature\'s most spectacular light show, infusing every moment with a touch of magic and wonder.',
        productName: 'The Aurora Bloom Earrings',
        price: 60,
      },
      {
        id: 7,
        quantity: 5,
        category: 'Earrings',
        image: 'images/earring.avif',
        details: 'Radiating with the mystique of dusk, these earrings capture the essence of twilight\'s enchanting allure. Gleaming with iridescent gemstones nestled within intricate filigree settings, they evoke the mesmerizing hues of the setting sun and the twinkling stars that emerge as night falls. Adorning ears with an ethereal glow, they bring a touch of celestial beauty to every moment',
        productName: 'The Twilight Spark Earrings',
        price: 80,
        
      },
      {
        id: 8,
        quantity: 5,
        category: 'Bracelet',
        image: 'images/bracelet3.jpg',
        details: 'A delicate embrace of sterling silver links adorned with softly gleaming pearls, exuding an aura of grace and sophistication. With each gentle touch, the bracelet whispers of timeless elegance and understated charm, becoming a symbol of refined femininity and enduring beauty.',
        productName: 'The Gentle Touch Bracelet',
        price: 60,
      },
      {
        id: 9,
        quantity: 5,
        category: 'necklace',
        image: 'images/neckless4.jpg',
        details: 'A captivating embodiment of serenity and elegance, this necklace features a stunning azure gemstone suspended from a delicate chain. Its tranquil hue reminiscent of the vast expanse of the sky on a clear summer day, it whispers of dreams and aspirations, inspiring the wearer to reach for the heavens and embrace the beauty of possibility',
        productName: 'The Azure Dream Necklace',
        price: 70,
      },
      {
        id: 10,
        quantity: 5,
        category: 'Rings',
        image: 'images/ring2.jpg',
        details: 'A verdant masterpiece of exquisite craftsmanship, this ring showcases a resplendent emerald cradled within a gleaming band of precious metal. Its vibrant hue captures the essence of lush green landscapes, while its radiant sparkle illuminates the wearer with a sense of vitality and renewal. A symbol of growth and prosperity, it embodies the timeless allure of nature\'s abundant beauty',
        productName: 'The Verdant Gleam Ring',
        price: 65,
      },
    ],
    };
    for (let i of products.data) {
      //card should have category and should stay hidden initially
      let cardd = document.createElement("div");
      cardd.classList.add("cardd", i.category, "hide");
      //img div
      let imgContainer = document.createElement("div");
      imgContainer.classList.add("image-container");
      //img tag
      let image = document.createElement("img");
      image.setAttribute("src", i.image);
      image.classList.add("immg");
      imgContainer.appendChild(image);
      cardd.appendChild(imgContainer);
      //conaiter
      let container = document.createElement("div");
      container.classList.add("container");
      //product name
      let name = document.createElement("h4");
      name.classList.add("product-name");
      name.innerText = i.productName.toUpperCase();
      container.appendChild(name);
      cardd.appendChild(container);
    
      //product price
      let price = document.createElement("h5");
      price.classList.add("product-price");
      price.innerText = "$" + i.price;
      container.appendChild(price);
      
      cardd.addEventListener('click', () => showProductDetails(i));
      document.getElementById("products").appendChild(cardd);
    
    }
    
    //paramater passed from button(parameter same as category)
    function filterProduct(value){
      //button class code
      let buttons = document.querySelectorAll(".button-value");
      buttons.forEach((button) => {
        //check if the value equals innertext
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
          button.classList.add("activ");
        }
        else{
          button.classList.remove("activ");
        }
      });
      // select all cards
    let elements = document.querySelectorAll(".cardd");
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
      let cards = document.querySelectorAll(".cardd");  
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
  

    document.getElementById('fa-magnifying-glass').addEventListener('click', function() {
      // Get the search query
      var searchQuery = document.getElementById('searchinput').value.trim().toLowerCase();
      
      // Find the element with the matching text
      var elements = document.getElementsByTagName('*');
      var foundElement = null;
      for(var i = 0; i < elements.length; i++) {
          if(elements[i].textContent.trim().toLowerCase() === searchQuery) {
            foundElement = elements[i];
            break;
          }
      }
  
      // If the element is found, scroll to it
      if(foundElement) {
          foundElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
          alert('Element not found!');
      }
  });
  

  function toggleSearchh() {
    var navbar = document.getElementById('secondnav');
    var searchbar = document.getElementById('searchbar');
  
    if (navbar.style.display !== 'none') {
        navbar.style.display = 'none';
        searchbar.style.display = 'flex';
    } else {
        navbar.style.display = 'flex';
        searchbar.style.display = 'none';
    }
  }
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
    



























