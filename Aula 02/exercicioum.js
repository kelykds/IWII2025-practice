var a = 10;
var b = 20;

console.log(b);
b = 5;
console.log(a, b);

var c = 30;
var d = 20;
var e = c + d;
console.log(e);
d = 10;
console.log(d, e);
e = c + d;
console.log(c, d, e);

var f = 10;
var g = 20;
var h = f;
g = h;
f = g;
console.log(f, g, h);

var i = 10;
var j = i + 1;
i = j + 1;
j = i + 1;
console.log(i);
i = j + 1;
console.log(i, j);