

//?Array elemanlarını toplama:

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, current) => acc + current, 0);
console.log(sum); // 15


//! reduce metodu bir dizinin her bir elemanını tek bir değere indirgemek için kullanılır. Aşağıdaki örnekte, reduce metodu ile bir dizinin tüm sayılarının toplamı hesaplanır:

var numbers = [1, 2, 3, 4, 5];

var sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum); // 15


//?Aynı örnek, reduce metodunun kısaltılmış formunun kullanımı ile de yapılabilir:
var numbers = [1, 2, 3, 4, 5];

var sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // 15
