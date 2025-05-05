function BankAccount(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;

    this.deposit = function(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("Deposited: $" + amount + " | New Balance: $" + this.balance);
        } else {
            console.log("Invalid deposit amount.");
        }
    };

    this.withdraw = function(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrew: $" + amount + " | New Balance: $" + this.balance);
        } else if (amount > this.balance) {
            console.log("Insufficient funds.");
        } else {
            console.log("Invalid withdrawal amount.");
        }
    };

    this.display = function() {
        console.log("Account Number: " + this.accountNumber + " | Balance: $" + this.balance);
    };
}

let account1 = new BankAccount("9876543210", 1000);
account1.display();
account1.deposit(500);
account1.withdraw(300);
account1.withdraw(1500);