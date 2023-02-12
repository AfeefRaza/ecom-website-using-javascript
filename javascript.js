import items from './items.json' assert { type: 'JSON' };
import categories from './categories.json' assert { type: 'JSON' };



    document.getElementById('cat').innerHTML = categories.map(cat => 
        `
        <a href="/category.html">
        <div  class="cat">
          
          <h1>${cat.name}</h1>
          <div class="image">
          <img src=${cat.image} alt="">
          </div>
          
        </div>
        </a>
        `

    ).join('')


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



