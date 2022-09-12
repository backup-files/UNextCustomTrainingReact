class BankAccount {
    constructor(accountName, accountNumber) {
        this.accountName = accountName;
        this.accountNumber = accountNumber;
        this.balance = 2000;
    }
    withdraw(amount) {
        this.balance -= amount;
    }
    deposit(amount) {
        this.balance += amount;
    }
}

ba = new BankAccount('tejas', 100);
ba.withdraw('john');
ba.deposit('john');
console.log(ba.balance);
