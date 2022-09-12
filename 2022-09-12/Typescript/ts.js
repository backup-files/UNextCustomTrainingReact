var username = 'john';
var age = 25;
var userMarried = true;
var salary = 200000000;
var products = ['apple', 'mango', 'banana']; // string[]
var values = [1, '1', true];
var tuple = [25, 'truck'];
console.log(username, age, userMarried, salary);
function multiply1(a, b) {
    if (b == undefined)
        return a * a;
    else
        return a * b;
}
console.log(multiply1(5));
var kevin = { name: 'john', age: 20 };
