//?Sayıları filtreleme örneği:

let sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tekSayilar = sayilar.filter(sayi => sayi % 2 !== 0);
console.log(tekSayilar); // [1, 3, 5, 7, 9]


//?İsimleri filtreleme örneği:

let isimler = ['Ahmet', 'Mehmet', 'Hasan', 'Hüseyin', 'Ali'];
let hHarfiIleBaslayanlar = isimler.filter(isim => isim.startsWith('H'));
console.log(hHarfiIleBaslayanlar); // ['Hasan', 'Hüseyin']



//?Nesne dizisi filtreleme örneği:


let nesneler = [
    { ad: 'Ahmet', yas: 30 },
    { ad: 'Mehmet', yas: 25 },
    { ad: 'Hasan', yas: 20 },
    { ad: 'Hüseyin', yas: 35 },
    { ad: 'Ali', yas: 40 }
];
let yas30Ustu = nesneler.filter(nesne => nesne.yas > 30);
console.log(yas30Ustu); 
/* 
[
    { ad: 'Ahmet', yas: 30 },
    { ad: 'Hüseyin', yas: 35 },
    { ad: 'Ali', yas: 40 }
]
*/


//?Karakter dizisi filtreleme örneği:

let karakterler = ['a', 'b', 'c', 'd', 'e'];
let vokaller = karakterler.filter(karakter => 'aeıioöuü'.includes(karakter));
console.log(vokaller); // ['a', 'e', 'i', 'o', 'u']



//?Object dizisi filtreleme örneği:


let objeler = [
    { id: 1, ad: 'Ahmet', yas: 30 },
    { id: 2, ad: 'Mehmet', yas: 25 },
    { id: 3, ad: 'Hasan', yas: 20 },
    { id: 4, ad: 'Hüseyin', yas: 35 },
    { id: 5, ad: 'Ali', yas: 40 }
];
let id2Ve3 = objeler.filter(obj => [2,3].includes(obj.id));
console.log(id2Ve3);
/* 
[
    { id: 2, ad: 'Mehmet', yas: 25 },
    { id: 3, ad: 'Hasan', yas: 20 }
]
*/
