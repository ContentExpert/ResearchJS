class Product {
    constructor (name, price) {
        this.name = name
        this.price = price
    }
}

let product = new Product("바나나", 1200);
console.log(product.name) // 바나나
console.log(product.price) // 1200