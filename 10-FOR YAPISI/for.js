// JavaScript dili içindeki "for" döngüsünün temel yapısı aşağıdaki gibidir:
for (var i = 0; i < limit; i++) {
    // döngü içeriği
  }
  

  //? Bu yapıdaki "var i = 0" ifadesi döngü için bir sayaç tanımlar. "i < limit" ifadesi döngünün bitme koşulu belirlenir ve "i++" ifadesi her adımda sayaç değerinin bir artmasını sağlar. "// döngü içeriği" kısmı döngünün yapılmasını istediğiniz herhangi bir işlemi içerebilir.

  
//? Aşağıdaki örnekler JavaScript dili içindeki "for" döngü yapısının nasıl kullanılabileceğini gösterir:

//1- Sayılar dizisi üzerinde döngü:

var numbers = [1, 2, 3, 4, 5];
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}


//? İç içe döngü:

for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 3; j++) {
      console.log(i * j);
    }
  }
  

  //? for...of döngüsü:

  var fruits = ['apple', 'banana', 'cherry'];
for (var fruit of fruits) {
  console.log(fruit);
}


//? for...in döngüsü:

var person = { name: 'John Doe', age: 30, job: 'developer' };
for (var key in person) {
  console.log(key + ': ' + person[key]);
}


//? Bu örnekte, "i" değişkeni 1'den başlatılır ve 10'a kadar artırılır. Her adımda, "i" değişkeninin değeri ekrana yazdırılır.

for (var i = 1; i <= 10; i++) {
    console.log(i);
  }

  
