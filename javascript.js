
import categories from "./categories.js"
let category = categories

    document.getElementById('cat').innerHTML = category.map(cat => 
        `
        <a href="/${cat.name}.html">
        <div  class="cat">
          
          <h1>${cat.name}</h1>
          <div class="image">
          <img src=${cat.image} alt="">
          </div>
          
        </div>
        </a>
        `

    ).join('')

import Allproducts from "./items.js"
let items = Allproducts
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
          <a href="#" class="btn"> Add to Cart</a>
          
        </div>`
    ).join('')


// import afeef from "./items"
// let afeef1 = afeef
// console.log(afeef1)
