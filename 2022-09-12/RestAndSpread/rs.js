function total(name, ...marks) {
console.log(name, marks);
}
total('john', 1, 2, 3, 4);

function total1(a, b, c, d) {
return a + b + c + d;
}
var args = [1, 2, 3, 4];
console.log(total1(...args));