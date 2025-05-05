function Product(name, price) {
    this.name = name;
    this.price = price;
  }

  function ShoppingCart() {
    this.products = [];

    this.addProduct = function(name, price) {
      let product = new Product(name, price);
      this.products.push(product);
    };

    this.getTotal = function() {
      let total = 0;
      for (let i = 0; i < this.products.length; i++) {
        total += this.products[i].price;
      }
      return total;
    };
  }
  
  let cart = new ShoppingCart();
  cart.addProduct("Apple", 1.5);
  cart.addProduct("Bread", 2.0);
  
  console.log("Total Price:", cart.getTotal());