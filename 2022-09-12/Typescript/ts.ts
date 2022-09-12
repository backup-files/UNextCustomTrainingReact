var username: string = 'john';
var age:number = 25;
var userMarried: boolean = true;
var salary: number = 200_000_000; 
var products: Array<string> = ['apple', 'mango', 'banana']; // string[]
var values: any[] = [1, '1', true];
var tuple: [number, string] = [25, 'truck'];
console.log(username, age, userMarried, salary);
function multiply1(a:number, b?:number) {
    if (b ==  undefined)
        return a*a;
    else
        return a*b;
}
console.log(multiply1(5));

interface Iemployee {
    name:string;
    age:number;
}

var kevin: Iemployee = {name: 'john', age:20};

class BankAccount {
    accountName: string;
    accountNumber: number;
    balance: number;
    constructor(accountName: string, accountNumber: number) {
        this.accountName = accountName;
        this.accountNumber = accountNumber;
        this.balance = 2000;
    }
}

interface IBankAccount {
    accountName:string;
    accountNumber:number;
    balance:number;
    withdraw(amount: number): void;
    deposit(amount: number): void;
}

// implements 