//! Destructuring, JavaScript'deki nesneler ve dizilerden verileri çıkarmaya olanak tanıyan bir yapıdır. Aşağıdaki örnekte, bir nesnenin a ve b anahtarlarındaki değerlerini, ayrı değişkenlere atama yapar:

const obj = {a: 1, b: 2};
const {a, b} = obj;
console.log(a, b); // 1 2


//! Başka bir örnekte, bir dizinin ilk ve son elemanlarını çıkarmak için destructuring kullanabiliriz:

const arr = [1, 2, 3, 4];
const [first, second, ...rest] = arr;
console.log(first, second, rest); // 1 2 [3, 4]

//?Destructuring, fonksiyon parametrelerine de uygulanabilir:

function fn({a, b}) {
    console.log(a, b);
  }
  fn({a: 1, b: 2}); // 1 2
  

//? Basit değişken ataması:

const obj = {a: 1, b: 2};
const {a, b} = obj;
console.log(a, b);  // 1 2

//? Nested destructuring:

const obj = {a: 1, b: {c: 2, d: 3}};
const {a, b: {c, d}} = obj;
console.log(a, c, d);  // 1 2 3


//? Renaming variables during destructuring:
const obj = {a: 1, b: 2};
const {a: x, b: y} = obj;
console.log(x, y);  // 1 2


//? Destructuring arrays:

const arr = [1, 2, 3, 4];
const [first, second, ...rest] = arr;
console.log(first, second, rest);  // 1 2 [3, 4]


//?Default values during destructuring:
const obj = {a: 1};
const {a, b = 2} = obj;
console.log(a, b);  // 1 2


//? Destructuring function parameters:
function fn({a, b}) {
    console.log(a, b);
  }
  fn({a: 1, b: 2});  // 1 2

  
  //?Complex destructuring:

const arr = [1, [2, 3], 4];
const [a, [b, c], d] = arr;
console.log(a, b, c, d);  // 1 2 3 4

