let inventory = [{ product: "Laptop", quantity: 5 }, 
    { product: "Phone", quantity: 10 } ];

    function add(pdt, qty) {
        inventory.push({product:pdt, quantity:qty});
    }

    function remove(pdt) {
        inventory=inventory.filter(item => item.product!==pdt);
        
    }
    add("Tablet",3);
    remove("Phone");
    console.log(inventory);
    
    