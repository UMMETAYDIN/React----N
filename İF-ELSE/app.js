//? örnek

//Sayının pozitif veya negatif olup olmadığını kontrol etme: 

let num = -5;
if (num >= 0) {
    console.log(num + " is positive");
} else {
    console.log(num + " is negative");
    }


    //?örnek

    // Girilen değerin 10 dan büyük veya küçük olduğunu kontrol etme:

let num = 15;

if (num > 10) {
    console.log(num + " is greater than 10");
} else {
    console.log(num + " is less than or equal to 10");
}


//?örnek

//Girilen değerin bir sayı mı değil mi olduğunu kontrol etme:

let input = "hello";
if (typeof input === "number") {
    console.log(input + " is a number");
} else {
    console.log(input + " is not a number");
}


//? örnek

// Bir gün haftanın hangi günü olduğunu kontrol etme:

let day = "Monday";
if (day === "Monday") {
    console.log("Today is Monday");
} else if (day === "Tuesday") {
    console.log("Today is Tuesday");
} else if (day === "Wednesday") {
    console.log("Today is Wednesday");
} else if (day === "Thursday") {
    console.log("Today is Thursday");
} else if (day === "Friday") {
    console.log("Today is Friday");
} else if (day === "Saturday") {
    console.log("Today is Saturday");
} else if (day === "Sunday") {
    console.log("Today is Sunday");
} else {
    console.log("Invalid day");
}


//? örnek
//Girilen notun geçerli veya geçersiz olduğunu kontrol etme:

let grade = 101;
if (grade >= 0 && grade <= 100) {
    console.log("Valid grade");
} else {
    console.log("Invalid grade");
}
