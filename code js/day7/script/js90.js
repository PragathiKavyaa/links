function ShoppingCart() {
    this.products = [];

    this.addProduct = function(product) {
      this.products.push(product);
    };

    this.removeProduct = function(productName) {
      this.products = this.products.filter(function(p) {
        return p.name !== productName;
      });
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
  
  cart.addProduct({ name: "Apple", price: 1.5 });
  cart.addProduct({ name: "Milk", price: 2.0 });
  cart.addProduct({ name: "Bread", price: 2.5 });
  
  console.log("Total:", cart.getTotal()); // 6.0
  
  cart.removeProduct("Milk");
  
  console.log("Total after removing Milk:", cart.getTotal());