// ? Array elemanlarının değerlerini 2 katına çıkarmak:

let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(x => x * 2);
console.log(doubled); // [2, 4, 6, 8, 10]


//?Array içindeki nesne elemanlarından sadece belirli bir alanı seçmek:

let users = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Jim', age: 35 }
  ];
  let names = users.map(user => user.name);
  console.log(names); // ['John', 'Jane', 'Jim']
  

  //? Array içindeki elemanların uzunluklarını bulmak:

  let words = ['hello', 'world', 'foo', 'bar'];
  let lengths = words.map(word => word.length);
  console.log(lengths); // [5, 5, 3, 3]
  

  //? Array içindeki nesne elemanlarını farklı bir nesne formatına dönüştürmek:

  let users = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Jim', age: 35 }
  ];
  let userData = users.map(user => {
    return {
      fullName: `${user.name} (${user.age})`,
      age: user.age
    };
  });
  console.log(userData);
  /*
  [
    { fullName: 'John (30)', age: 30 },
    { fullName: 'Jane (25)', age: 25 },
    { fullName: 'Jim (35)', age: 35 }
  ]
  */
  

  //?Array içindeki elemanların bir kısmını filtrelemek:
  let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(x => x % 2 === 0);
console.log(evenNumbers); // [2, 4]


//? Array içindeki nesne elemanlarının belirli bir kritere göre sıralanması:

let users = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 35 },
    { name: 'Jim', age: 25 }
  ];
  let sortedUsers = users.sort((a, b) => (a.age > b.age ? 1 : -1));
  console.log(sortedUsers);
  /*
  [
    { name: 'Jim', age: 25 },
    { name: 'John', age: 30 },
    { name: 'Jane', age: 35 }
  ]
  */
  

  //?Array içindeki elemanları toplamak:

  let numbers = [1, 2, 3, 4, 5];
    let sum = numbers
