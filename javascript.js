
let categories = fetch("/categories.json")
categories.then((category)=>{
    return category.json()
}).then((category2) => {
    console.log(category2)

    document.getElementById('cat').innerHTML = category2.map(cat => 
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

    //    let cat =  category2.map((value)=>{
//         let c = value
        
//     document.getElementById("cat").innerHTML = c.name ;
//     console.log(c.name)
// })
})
let items = fetch("/items.json")
items.then((item)=>{
    return item.json()
}).then((item2) => {
    console.log(item2)

    document.getElementById('items').innerHTML = item2.map(I => 
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

})

