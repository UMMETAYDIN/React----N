//? Dizi oluşturma örneği:

let dizi = [1, 2, 3, 4, 5];


//? .push() örneği:

let dizi = [1, 2, 3];
dizi.push(4);
console.log(dizi); // [1, 2, 3, 4]

//? .pop() örneği:

let dizi = [1, 2, 3];
dizi.pop();
console.log(dizi); // [1, 2]

//?.shift() örneği:

let dizi = [1, 2, 3];
dizi.shift();
console.log(dizi); // [2, 3]


//?.unshift() örneği:

let dizi = [1, 2, 3];
dizi.unshift(0);
console.log(dizi); // [0, 1, 2, 3]

//? .sort() örneği:

let dizi = [3, 2, 1];
dizi.sort();
console.log(dizi); // [1, 2, 3]

//?.reverse() örneği:

let dizi = [1, 2, 3];
dizi.reverse();
console.log(dizi); // [3, 2, 1]

//?.concat() örneği: 

let dizi1 = [1, 2, 3];
let dizi2 = [4, 5, 6];
let dizi3 = dizi1.concat(dizi2);
console.log(dizi3); // [1, 2, 3, 4, 5, 6]

