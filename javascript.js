//fetch items function
    import Allproducts from "./items.js"
    import { electronics, women, men, jewelery } from "./categoryproducts.js";
    
    var url = window.location.href;
    
    // Get the part of the URL after the last slash
    var path = url.substring(url.lastIndexOf('/') + 1);
    
    // Remove the .html extension from the path
    var page = path.replace('.html', '');
    
    // Create an empty array to hold the filtered items
    let items = [];
    
    // Check if the page name is not equal to "index"
    if (page !== "index" && page !== "" && page !== "#")  {
      // Filter the products based on the category
      if (page === "electronics") {
        items = electronics;
      } else if (page === "women") {
        items = women;
      } else if (page === "men") {
        items = men;
      } else if (page === "jewellary") {
        items = jewelery;
      }
      if (page !== "index" && page !== "" && !electronics.includes(page) && !women.includes(page) && !men.includes(page) && !jewelery.includes(page)) {
        console.log("Display nothing");
      }
    } else {
      // Display all products on the index page
      items = Allproducts;
    }
    
    // Display the items in the HTML
    document.getElementById('items').innerHTML = items.map(I => 
      `<div class="item">
        <img src=${I.image} alt="">
        <span>
          <a href="/product.html">
            <h1>${I.title}</h1>
            <h1> $ ${I.price}</h1>
          </a>
        </span>
        <p> ${I.description.slice(0, 50)}...</p>
        <p> ${I.rating.rate} <i class="fa-solid fa-star star"></i> (${I.rating.count})</p>
        <a  data-id=${I.id} data-img = ${I.image} data-qty = ${I.qty} data-name="${I.title}" data-price=${I.price} class="btn add-to-cart"> Add to Cart</a>
      </div>`
    ).join('');



// Show and hide cartmenu function
const myDiv = document.getElementById("cartmenu");
const myButton = document.getElementById("cartbtn");

myButton.addEventListener("click", () => {
  if (myDiv.style.display === "none") {
    myDiv.style.display = "block";
  } else {
    myDiv.style.display = "none";
  }
});
//Hide cartmenu when you click continue shopping
const continueshopping = document.getElementById("conshop");
continueshopping.addEventListener("click", () => {
  if (myDiv.style.display === "block") {
    myDiv.style.display = "none";
  }
});
//Hide cartmenu when you click outside the cartmenu
function hideOnOutsideClick(element, excludedElement) {
  document.addEventListener("click", (event) => {
    if (!element.contains(event.target) && !excludedElement.contains(event.target)) {
      element.style.display = "none";
    }
  });
}

hideOnOutsideClick(myDiv, myButton);
    


// Get all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Set up an empty cart array in local storage if it doesn't exist
if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify([]));
}

// Add event listener to each button
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get product data from button attributes
    const productId = button.getAttribute('data-id');
    const productName = button.getAttribute('data-name');
    const productPrice = button.getAttribute('data-price');
    const productImg = button.getAttribute('data-img');
    var   productqty = button.getAttribute('data-qty');

    // Get cart data from local storage
    const cart = JSON.parse(localStorage.getItem('cart'));

    // Add new item to cart
      // check if the already exist in the cart
      function onAdd() {
        
      
      const exist = cart.find(function(x) {
        return x.id === productId;
      })
    
    
      if (exist) {
        //if the product already exist in the cart increase its qty by 1
       
        cart.forEach( function (x) {
          if (x.id === productId) {
            x.qty = parseInt(x.qty) + 1;
          }
        });
      } else {
        //if the product doesnt exist in the cart push it in the cart
        cart.push({ id: productId, name: productName, price: productPrice, img: productImg, qty: parseInt(productqty) + 1 });
      }
    }
    onAdd()

    // Save updated cart to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update cart items on the page
    updateCartItems();
  });


});


// Function to update cart items on the page
function updateCartItems() {
  // Get the cart items element
  const cartItemsElement = document.getElementById('middlecart');

  // Get the cart data from local storage
  const cart = JSON.parse(localStorage.getItem('cart'));
 console.log(cart)
  // Clear existing cart items on the page
  cartItemsElement.innerHTML = '';

  // Loop through each item in the cart and display it
  cart.forEach(item => {
    
    const li = document.createElement('div');
    let price = item.price*item.qty
    li.innerHTML = `<img src=${item.img} alt=""> 
    <div>
    <h1>${item.name}</h1>
    <h2>$${price}</h2>
    <div  > 
    qty: ${item.qty}
    <button data-qty = ${item.qty} id="addbtn" class="addbtn">+</button>
    </div>
    </div>
    `;
    
    cartItemsElement.appendChild(li);
  });
}

// Call the updateCartItems function when the page is loaded
updateCartItems();
// const add = document.querySelectorAll('.add-to-cart');
const addBtn = document.querySelectorAll('.addbtn');
addBtn.forEach(button => {
  var   productqty = button.getAttribute('data-qty');
  button.addEventListener('click' , () => {
    console.log(productqty)
 
})
})

const hamenu = document.getElementById("nav");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  if (hamenu.style.display === "none") {
    hamenu.style.display = "block";
  } else {
    hamenu.style.display = "none";
  }
});
function hamHide(element, excludedElement) {
  document.addEventListener("click", (event) => {
    if (!element.contains(event.target) && !excludedElement.contains(event.target)) {
      element.style.display = "none";
    }
  });
}

hamHide(hamenu, hamburger);


































