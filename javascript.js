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
    const itemsElement = document.getElementById('items');

    // Display the items in the HTML
    if (itemsElement) {
    document.getElementById('items').innerHTML = items.map(I => 
      `<div class="item">
        <img src=${I.image} alt="">
        <span>
          <a >
            <h1>${I.title}</h1>
            <h1> $ ${I.price}</h1>
          </a>
        </span>
        <p> ${I.description.slice(0, 35)}...</p>
        <p> ${I.rating.rate} <i class="fa-solid fa-star star"></i> (${I.rating.count})</p>
        <a  data-id=${I.id} data-img = ${I.image} data-qty = ${I.qty} data-name="${I.title}" data-price=${I.price} class="btn add-to-cart"> Add to Cart</a>
      </div>`
    ).join('');}



// Show and hide cartmenu function
// const myDiv = document.getElementById("cartmenu");
// const myButton = document.getElementById("cartbtn");
// if (myButton) {
// myButton.addEventListener("click", () => {
//   if (myDiv.style.display === "none") {
//     myDiv.style.display = "block";
//   } else {
//     myDiv.style.display = "none";
//   }
// });}
// //Hide cartmenu when you click continue shopping
// const continueshopping = document.getElementById("conshop");
// if (continueshopping) {
// continueshopping.addEventListener("click", () => {
//   if (myDiv.style.display === "block") {
//     myDiv.style.display = "none";
//   }
// });}
// //Hide cartmenu when you click outside the cartmenu
// if (continueshopping) {
// function hideOnOutsideClick(element, excludedElement) {
//   document.addEventListener("click", (event) => {
//     if (!element.contains(event.target) && !excludedElement.contains(event.target)) {
//       element.style.display = "none";
//     }
//   });
// }
// hideOnOutsideClick(myDiv, myButton);
// }


    


// Get all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Set up an empty cart array in local storage if it doesn't exist
if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify([]));
}
if (!localStorage.getItem('history')) {
  localStorage.setItem('history', JSON.stringify([]));
}
// sign in function
const signinBtn = document.getElementById("signinbtn");

console.log("reach")
if (signinBtn) {
signinBtn.addEventListener( 'click', () => {
  
  const username = document.getElementById("name").value;
  const useremail = document.getElementById("email").value;
  const userpass = document.getElementById("password").value;
  function containsAtSymbol(str) {
    if (str.indexOf("@") === -1) {
      return false;
    } else {
      return true;
    }
  }
  function isPasswordValid(password) {
    if (password.length >= 8) {
      return true;
    } else {
      return false;
    }
  }
    // Check if the data is already in local storage
if (localStorage.getItem('email') && localStorage.getItem('password')) {
  
  

function ClearHtml() {
  document.getElementById('warning').innerHTML = ``
}
document.getElementById('warning').innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="color: red;"></i>
<p> You are already logged in</p>`
setTimeout(ClearHtml, 3000)
  
} else if (!containsAtSymbol(useremail)){
  function ClearHtml() {
    document.getElementById('warning').innerHTML = ``
  }
  document.getElementById('warning').innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="color: red;"></i>
  <p> This email is invalid</p>`
  setTimeout(ClearHtml, 3000)
}
else if(!isPasswordValid(userpass)) {
  function ClearHtml() {
    document.getElementById('warning').innerHTML = ``
  }
  document.getElementById('warning').innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="color: red;"></i>
  <p> Password must be 8 characters long</p>`
  setTimeout(ClearHtml, 3000)
}
else{
  localStorage.setItem('email', useremail);
  localStorage.setItem('username', username);
  localStorage.setItem('password', userpass);
  
  window.location.href = "./index.html"
}

   
} )}

console.log('afeef')
if ("password" in localStorage) {
  const fullname = localStorage.getItem('username')
  const first = fullname.split(' ')[0]
  document.getElementById("account").innerHTML = `<i class="fa-regular fa-user"></i> ${first}` 
}else{
  document.getElementById("account").innerHTML = `<i class="fa-regular fa-user"></i>
  <a href="./signup.html">Account</a>`
}

const popup = document.getElementById("popup");
popup.style.display = "none";
const accountbtn = document.getElementById("account");

if ("password" in localStorage) {
accountbtn.addEventListener("click", () => {
  if (popup.style.display === "none") {
    popup.style.display = "flex";
  } 
});}
const yespopup = document.getElementById("yes-popup");
const nopopup = document.getElementById("no-popup");
nopopup.addEventListener('click', () => {
  console.log('no')
  popup.style.display = "none";
})
yespopup.addEventListener('click', () => {
  localStorage.removeItem('email');
  localStorage.removeItem('password');
  localStorage.removeItem('username');
  popup.style.display = "none";

})



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





  
var grandTotal = function(arr) {
  return arr.reduce((sum, item) => {
    let qty = item.qty;
let price = item.price * qty;
    return sum + (price * qty)
    
  }, 0)
};
var grandQty = function(arr) {
  return arr.reduce((sum, item) => {
    let qty = item.qty;
// let price =  qty;
    return sum + (qty)
    
  }, 0)
};


 
// Function to update cart items on the page
function updateCartItems() {
  
  // Get the cart items element
  const cartItemsElement = document.getElementById('middlecart');

  // Get the cart data from local storage
  const cart = JSON.parse(localStorage.getItem('cart'));
 
 
  // Clear existing cart items on the page
  cartItemsElement.innerHTML = '';

  // Loop through each item in the cart and display it
 
  let cartcount = cart.length
  if (document.getElementById('cartnumber')) {
    let cartnumber = document.getElementById('cartnumber')
    cartnumber.innerHTML = cartcount
  }
  
  
   
  cart.forEach(item => {
   
    let qty = item.qty;
    //updating price according to qty
    let price = item.price*qty;
    const li = document.createElement('div');

    li.innerHTML = `<img  src=${item.img} alt=""> 
    <div>
    <h1>${item.name}</h1>
    <h2>$${price}</h2>
    <div  > 
     <p class="qty"> qty: ${qty} </p> 
    <button id="addbtn" class="addbtn">+</button>
    <button id="minusbtn" class="minusbtn">-</button>
    </div>
    </div>
    `;
   
    
    function Totalprice() {
      let totalPrice = 0;
      
     
      const totalPriceElement = document.getElementById('total-price');
      const Shipprice = document.getElementById('ship-price');
      const Finalprice = document.getElementById('final-price');
      
      totalPriceElement.innerHTML = `$${grandTotal(cart).toFixed(2)}`;
      if (totalPrice <= 50 ) {
        Shipprice.innerHTML = `$25`;
       
      } else {
        Shipprice.innerHTML = `FREE`;
        
      }
      Finalprice.innerHTML = `$${grandTotal(cart).toFixed(2)}`;
      
      
      
    }
    

    Totalprice()
    
    

    cartItemsElement.appendChild(li);
    const addBtn = li.querySelector('.addbtn');
    addBtn.addEventListener('click', () => {
      console.log(qty);
      //updating value of qty
      qty++;
      price = item.price * qty;
      //updating new data in div
      li.querySelector('h2').textContent = `$${price}`;
      li.querySelector('.qty').textContent = `qty: ${qty}`;
      item.qty = qty;
      
      //updating value of qty in local storage
      localStorage.setItem('cart', JSON.stringify(cart));
      Totalprice()
    });
    
    
   
    const minusBtn = li.querySelector('.minusbtn');
    minusBtn.addEventListener('click', () => {
      //updating value of qty
      qty--;
      
      price = item.price * qty;
      //updating new data in div
      li.querySelector('h2').textContent = `$${price}`;
      li.querySelector('.qty').textContent = `qty: ${qty}`;
      item.qty = qty;
      
      //updating value of qty in local storage
      localStorage.setItem('cart', JSON.stringify(cart));
      //when vlaue of qty becomes zero that item will be removed automatically from the cart and local storage
      if (qty === 0) {
        //finding which is to be removed
        const index = cart.indexOf(item);
        cart.splice(index, 1);
        //updating value in local storage
        localStorage.setItem('cart', JSON.stringify(cart));
        //removing the items
        li.remove();
      }
      Totalprice()
    });
    
    
    
  });
  const history = JSON.parse(localStorage.getItem('history'));


const orderItems = document.getElementById('data')
if (orderItems) {
  orderItems.innerHTML = history.map(orders => 
    `<div class="orderheading">
    <h1>Order No# ${orders.ordernum}</h1>
    <h2>${orders.date}</h2>
    
    
    <div class="orderlist"> ${orders.cartitems.map(c => 
      `
      <div>
      <img src="${c.img}"/>
      <h5>${c.name}</h5>
      <h5> QTY:${c.qty} </h5>
      <h5> Price:${c.price} </h5>
      </div>

      
      `
      
      
      ).join('')
    }
    
      </div>
      <h4>TOTAL QTY:${orders.qty}</h4>
      <h1>SUBTOTAL:$${orders.Finalprice}</h1>
    
      
    </div>`
  ).join('');
}

//////checkout
const address = document.getElementById("address");
if (address) {
  

address.style.display = "none";
const adressbtn = document.getElementById("checkout");


adressbtn.addEventListener("click", () => {
  var fillout = document.getElementById("fillout");
      var email = document.getElementById("email").value;
      var phone = document.getElementById("phone").value;
      var name = document.getElementById("name").value;
      var address1 = document.getElementById("address").value;
      if (email == "" || phone == "" || address1 == "" || name == "") {
        fillout.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> 
        Please fill out all the fields`
      }
      else{
        if (address.style.display === "none") {
          address.style.display = "flex";
        } 
      }
  
});
  const cancel = document.getElementById("cancel");
cancel.addEventListener('click', () => {
  
  address.style.display = "none";
})
  const checkout = document.getElementById('placeorder')
  if (checkout) {
    
    checkout.addEventListener("click", () => {
      const date = new Date();
  
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      
      // This arrangement can be altered based on how we want the date's format to appear.
      let currentDate = `${day}-${month}-${year}`;
      const randomNumber = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
      // const p = document.getElementById('final-price').innerText
      const historyEntry = { Finalprice: grandTotal(cart).toFixed(2), cartitems: cart ,  date: currentDate , ordernum: randomNumber, qty: grandQty(cart)};
      history.push(historyEntry)
      localStorage.setItem('history', JSON.stringify(history));
      
      localStorage.removeItem("cart");
      address.style.display = "none";
      const orderplaced = document.getElementById('orderplaced')
      function OP() {
        setTimeout(() => {
          window.location.href = './confirmation.html'
        }, 1000);
        
        }
    OP()
      
    })
  }
}
  
}



// Call the updateCartItems function when the page is loaded
updateCartItems();
// const add = document.querySelectorAll('.add-to-cart');


const hamenu = document.getElementById("nav");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  if (hamenu.style.display === "none") {
    hamenu.style.display = "flex";
  } else {
    hamenu.style.display = "none";
  }
});
function hideHam(element, excludedElement) {
  document.addEventListener("click", (event) => {
    if ( element.style.display === "flex" && !element.contains(event.target) && !excludedElement.contains(event.target)) {
      element.style.display = "none";
    }
  });
}

hideHam(hamenu, hamburger);



///cart details hide unhide in mobile function

const dropdownarr = document.getElementById('dropdownarr')
const cartItemsElement = document.getElementById('middlecart');
const arrdown = document.getElementById('downarr');
if(dropdownarr){
dropdownarr.addEventListener("click", () => {
  
    if (cartItemsElement.style.display === "none") {
      cartItemsElement.style.display = "flex";
      arrdown.style.rotate = "180deg";
      
      
    }
    else{
      cartItemsElement.style.display = "none";
      arrdown.style.rotate = "0deg";
    }
  

})}





 

































