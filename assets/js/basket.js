const products = document.getElementById ("products")

function getProduct(){
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    products.innerHTML = ''
    cart.map((item, index)=> {
        const cart = document.createElement('div')
        cart.className="cart-basket"
        cart.innerHTML = `<img src="${item.image}" alt="">
        <p>${item.title}</p>
        <button onclick="removeCart(${index})">delete</button>`
        products.appendChild(cart)
    })
}

function removeCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index ,1)
    localStorage.setItem('cart', JSON.stringify(cart) )
    getProduct()
}


 getProduct()



