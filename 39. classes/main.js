// class = (ES6 feature) wprowadza bardziej structured i czystszy sposób
//         do pracy z obiektami w porównaniu do tradycyjnych constructor functions
//         np. static keyword, inkapsulację, dziedziczenie

class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax)
    }
}
const salesTax = 0.05;
const product1 = new Product("Shirt",19);

product1.displayProduct() // output: Product: Shirt
                          //         Price: $19.00
const product2 = new Product("Pants",22.5);

product2.displayProduct(); // output: Product: Pants
                           //         Price: $22.50

const total = product1.calculateTotal(salesTax);

console.log(`Total price (with tax) $${total.toFixed(2)}`); // output: Total price (with tax) $19.95