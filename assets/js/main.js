const products = document.getElementById("products");
const btn =document.getElementById("btn");

let page = 1
let limit = 3

async function getProducts() {
    let skip = (page - 1) * limit;
        const response = await axios.get(`https://655dd2b79f1e1093c599f093.mockapi.io/products?page=${page}&limit=${limit}&skip=${skip}`);
        const data = response.data;
        db = data
        db.forEach(item => {
            const col = document.createElement('div');
            col.className ="col-4"
            col.innerHTML = `
                <div class="data-cart">
                <img src="${item.image}" alt="">
                <p>${item.title}</p>
                <button onclick="addToBasket(${item.id})">Basket</button>
                </div>
            `;
            products.appendChild(col);
        });
        page++;
}
btn.addEventListener('click', getProducts)
function addToBasket (itemId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(db.find(item => item.id == itemId))
    localStorage.setItem('cart', JSON.stringify(cart))
}
window.onload = () => {
    getProducts()
}