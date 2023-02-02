//? string metotları şunlardır


//1- `.length`: Dizginin uzunluğunu verir.
let isim = "OpenAI";
console.log(isim.length); // 6



//2-.concat(): İki veya daha fazla dizgi birleştirir.
let sehir1 = "San Francisco";
let sehir2 = "Berlin";
let sehirler = sehir1.concat(", ", sehir2);
console.log(sehirler); // "San Francisco, Berlin"



///3- .indexOf(): Belirli bir karakterin veya dizginin başlangıç indeksini verir.
let metin = "OpenAI is a research organization";
console.log(metin.indexOf("r")); // 8



//4- .lastIndexOf(): Belirli bir karakterin veya dizginin son indeksini verir.
let metin = "OpenAI is a research organization";
console.log(metin.lastIndexOf("r")); // 32



//5- .slice(): Belirli bir aralıktaki karakterleri verir.
let isim = "OpenAI";
console.log(isim.slice(0, 4)); // "Open"



//6 .substring(): Belirli bir aralıktaki karakterleri verir.
let isim = "OpenAI";
console.log(isim.substring(0, 4)); // "Open"



//7- .substr(): Belirli bir başlangıç indeksi ve uzunluk değerine göre karakterleri verir.

let metin = "OpenAI";
console.log(metin.substr(2, 3)); // "pen"



//8-.toLowerCase(): Tüm karakterleri küçük harfe dönüştürür.

let isim = "OPENAI";
console.log(isim.toLowerCase()); // "openai"



// 9-.toUpperCase(): Tüm karakterleri büyük harfe dönüştürür.

let isim = "openai";
console.log(isim.toUpperCase()); // "OPENAI"



//10- .trim(): Baştaki ve sondaki boşlukları siler.
let metin = "   OpenAI   ";
console.log(metin.trim()); // "OpenAI"



// 11-.charAt(): Belirli bir indekste bulunan karakteri verir.
let metin = "OpenAI";
console.log(metin.charAt(2)); // "p"



//!!!  En çok kullanılan string metotları arasında .length, .concat(), .toLowerCase() ve .toUpperCase() bulunur.