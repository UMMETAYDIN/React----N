//? örnek

// JS'de ternary operator (üçlü operator), if-else yapısına benzer bir yapıdır, ancak daha kısadır ve kolayca okunabilir. Aşağıdaki örnekler, ternary operator kullanımını gösterir:

// Bir değişkenin eşitliğinin kontrol edilmesi:

var x = 10;
var y = (x == 10) ? "Eşittir" : "Eşit Değildir";
console.log(y); // Output: "Eşittir"


//?örnek

//Bir sayının pozitif veya negatif olup olmadığının kontrol edilmesi:

var x = -5;
var y = (x >= 0) ? "Pozitif" : "Negatif";
console.log(y); // Output: "Negatif"


//? örnek

// Bir değişkenin boş veya dolu olup olmadığının kontrol edilmesi:

var x = "";
var y = (x.length > 0) ? "Dolu" : "Boş";
console.log(y); // Output: "Boş"


//? örnek

//
var x = 10;
var y = (typeof x == "number") ? "Sayı" : "Metin";
console.log(y); // Output: "Sayı"


//? örnek

// Bir dizinin uzunluğunun kontrol edilmesi:

var x = [1, 2, 3, 4];
var y = (x.length > 0) ? "Dizi Dolu" : "Dizi Boş";
console.log(y); // Output: "Dizi Dolu"
