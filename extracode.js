// import categories from "./categories.js";
// if (page !== "index" && page !== "") {
  
// } else {
//   let category = categories;
// document.getElementById("cat").innerHTML = category.map(cat => {
//   return `
    
//   `;
// }).join("");

// window.onload = function() {
//   document.querySelectorAll(".cat").forEach(el => {
//     el.addEventListener("click", e => {
//       const clickedCatElement = e.target.closest(".cat");
//       if (clickedCatElement) {
//         const clickedCat = categories.find(cat => cat.name === clickedCatElement.querySelector("h1").innerText);
//         if (clickedCat) {
//           console.log(clickedCat.slug);
//         } else {
//           console.error("No matching category found");
//         }
//       } else {
//         console.error("No .cat element found");
//       }
//     });
//   });
// };
// }



    // document.getElementById('cat').innerHTML = category.map(cat => 
    //    catslug = cat.slug
    //     `
    //     <a href="/${cat.slug}.html">
    //     <div  class="cat">
          
    //       <h1>${cat.name}</h1>
    //       <div class="image">
    //       <img src=${cat.image} alt="">
    //       </div>
          
    //     </div>
    //     </a>
    //     `
       
    // ).join('')
    
    // Get the current URL

// import Allproducts from "./items.js"
// import {electronics,women,men,jewelery} from "./categoryproducts.js";

// var url = window.location.href;

// // Get the part of the URL after the last slash
// var path = url.substring(url.lastIndexOf('/') + 1);

// // Remove the .html extension from the path
// var page = path.replace('.html', '');

// // Check if the page name is not equal to "index"
// if (page !== "index") {
//   let items = page
//     document.getElementById('items').innerHTML = items.map(I => 
//         `<div class="item">
//         <img src=${I.image} alt="">

//           <span>
//           <a href="/product.html">
//           <h1>${I.title}</h1>
//           <h1> $ ${I.price}</h1>
//           </a>
//           </span>
//           <p> ${I.description.slice(0, 50)}...</p>
//           <p> ${I.rating.rate} <i class="fa-solid fa-star star"></i> (${I.rating.count})</p>
//           <a href="#" class="btn"> Add to Cart</a>
          
//         </div>`
//     ).join('')
// } else {
//   let items = Allproducts
//     document.getElementById('items').innerHTML = items.map(I => 
//         `<div class="item">
//         <img src=${I.image} alt="">

//           <span>
//           <a href="/product.html">
//           <h1>${I.title}</h1>
//           <h1> $ ${I.price}</h1>
//           </a>
//           </span>
//           <p> ${I.description.slice(0, 50)}...</p>
//           <p> ${I.rating.rate} <i class="fa-solid fa-star star"></i> (${I.rating.count})</p>
//           <a href="#" class="btn"> Add to Cart</a>
          
//         </div>`
//     ).join('')
// }



// import afeef from "./items"
// let afeef1 = afeef
// console.log(afeef1)
// const date = new Date();

// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();

// // This arrangement can be altered based on how we want the date's format to appear.
// let currentDate = `${day}-${month}-${year}`;

  
//     const checkout = document.getElementById('checkout')
//       checkout.addEventListener("click", () => {
//         const p = document.getElementById('final-price').innerText
//         const historyEntry = { Finalprice: p, date: currentDate };
//         history.push(historyEntry)
//         localStorage.setItem('history', JSON.stringify(history));
        
//         // localStorage.removeItem("cart");
//       })
// }