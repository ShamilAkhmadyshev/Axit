



/*
let num = 0;
while (num < 10) {
    console.log(num);
    num++;
}
console.log(num);
*/
//!-----------------------------------------------------------------

/*
let num = 10;
while (num) {
    console.log(num);
    num--;
}
console.log(num);
*/
//!-----------------------------------------------------------------

/*
while (num !== 1) console.log(num--);
*/
//!-----------------------------------------------------------------


// let num = 5;
// do {
//     console.log(num);
//     num++;
// } while (num != 10);

//!-----------------------------------------------------------------


// for (let num = 0; num <= 10; num++) {
//     console.log(num);
// }
// console.log(num);

//!-----------------------------------------------------------------

/*
let num = 1;
for (; num < 5;) {
    console.log(num);
    num++
}
*/
//!-----------------------------------------------------------------

/*
let num = 0;
for (; num < 5; num++) {
    console.log(num);
    if (num == 2) break;
}
console.log("Work is over");
*/
//!-----------------------------------------------------------------

/*
let num = 0;
for (; num < 5; num++) {
    if (num == 2 || num == 3) continue;
    console.log(num);
}
console.log("Work is over");
*/
//!-----------------------------------------------------------------


// stopFor: for (let num = 0; num < 2; num++) {
//     console.log(num);
//     for (let size = 0; size < 5; size++) {
//         console.log(size);
//         if (size == 4) {
//             break stopFor
//         };
//         console.log(size);
//     }
// }
//!-----------------------------------------------------------------


// continueFor: for (let num = 0; num < 1; num++) {
//     console.log(num);
//     for (let size = 0; size < 5; size++) {
//         console.log(size);
//         if (size == 4) {
//             continue continueFor;
//         }
//         console.log(size);
//     }
//     console.log(num);
// }

//!-----------------------------------------------------------------

/*
let big = 0;
stopWhile: while (big < 10) {
    big++
    if (big == 6) {
        break stopWhile;
    }
    console.log(big);
}
*/

// Домашнее задание

// let num = 0;

// while (num < 6) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++
// } while (num < 6)

// for (; num < 6; num++) {
//     console.log(num);
// }

// for (; num < 3; num++) {
//     console.log(`Число: ${num}`);
// }

// while (num < 3) {
//     console.log(`Число: ${num}`);
//     num++;
// }

// stopFor: for (; num < 2; num++) {
//     for (let size = 0; size < 10; size++) {
//         console.log(size);
//         if (size == 9) {
//             break stopFor;
//         }
//     }
// }


//!-----------------------------------------------------------------


// function showMessage() {
//     console.log("Hello world!")
// }

// showMessage();

//!-----------------------------------------------------------------


// function getSum() {
//     let numOne, numTwo;

//     function getNumOne() {
//         numOne = 1;
//     }
//     function getNumTwo() {
//         numTwo = 12;
//     }

//     getNumOne();
//     getNumTwo();

//     let numSum = numOne + numTwo;
//     console.log(numSum);
// }
// getSum();

//!-----------------------------------------------------------------

// let message;
// function showMessage() {
//     let message = "Hello";
//     console.log(message)
// };
// showMessage();
// message = "Good bye";
// console.log(message)

//!-----------------------------------------------------------------


// function calcSum(numOne = 1, numTwo = 15) {
//     console.log(`Первое число = ${numOne}`);
//     console.log(`Второе число = ${numTwo}`);

//     let numSum = numOne + numTwo;

//     if (numSum > 30) {
//         console.log(`Сумма ${numSum} больше 30`);
//     } else {
//         console.log(`Сумма ${numSum} меньше 30`);
//     }
// }

// calcSum(10,15);


//!-----------------------------------------------------------------


// function calcSum(numOne, numTwo) {

//     let numSum = numOne + numTwo;

//     if (numSum < 20) {
//         function showLessMessage() {
//             console.log("Число меньше 20");
//         }
//         showLessMessage();
//     } else {

//         function showMoreMessage() {
//             console.log("Число больше 20");
//         }
//         showMoreMessage();
//     }
// }

// calcSum(16, 5);


//!-----------------------------------------------------------------


// function calcSum(numOne, numTwo, less, more) {

//     let numSum = numOne + numTwo;

//     if (numSum < 20) {
//         less()

//     } else {

//         more()
//     }
// }
// function showMoreMessage() {
//     console.log("Число больше 20");
// }

// function showLessMessage() {
//     console.log("Число меньше 20");
// }
// calcSum(11, 5, showLessMessage, showMoreMessage);
//!-----------------------------------------------------------------


// function calcSum(numOne, numTwo) {
//     let numSum = numOne + numTwo;

//     return numSum;
// }

// let funcResult = calcSum(21, 10);
// console.log(`Сумма равна ${funcResult}`)
//!-----------------------------------------------------------------

// function getSum(numOne, numTwo) {
//     let numSum = calcSum(numOne, numTwo);
//     console.log(numSum);
// };
// function calcSum(numOne, numTwo) {
//     return numOne + numTwo;
// }
// getSum(5, 10);

//!-----------------------------------------------------------------

//!Возведение в степень

// function calcSum(numOne, numTwo) {
//     if (numTwo === 1) {
//         return numOne;
//     } else {
//         return numOne * calcSum(numOne, numTwo - 1);
//     }
// }
// console.log(calcSum(10, 5));

//!-----------------------------------------------------------------
// let showMessage = function () {
//     console.log("Привет");
// }
// showMessage()
//!-----------------------------------------------------------------
// function showMessage() {
//     console.log("Привет World!");
// }
// let varMessage = showMessage;
// varMessage();
//!-----------------------------------------------------------------
// let getSum;

// if (2 > 1) {
//     getSum = function () {
//         let sum = 1 + 2;
//         console.log(sum)
//     }
// }
// getSum();
//!-----------------------------------------------------------------
// let getMessage = (text, name) => text + "!" + name + "?";
// console.log(getMessage("Привет", "Как дела"));
//!-----------------------------------------------------------------
// function showMessage(text, name) {
//     console.log(`${text}, ${name}!`);
// }
// showMessage("Hi", "Johm");
// setTimeout(showMessage, 3200, "Bye", "Frank");
// setInterval(showMessage, 700, "Hello", "World");
//!-----------------------------------------------------------------
// function showMessage(text, name) {
//     console.log(`${text}, ${name}!`);
//     setTimeout(showMessage, 600, text, name);
// }
// showMessage("Hi", "Johm");
// setTimeout(showMessage, 600, "Bye", "Frank");
//!-----------------------------------------------------------------
// function showMessage(num) {
//     console.log(num);
//     if (num < 20) {
//         setTimeout(showMessage, 1000, ++num);
//     }
// }
// setTimeout(showMessage, 1000, 10);
//!-----------------------------------------------------------------
// function showMessage(num) {
//     console.log(num);
//     let timeID = setTimeout(showMessage, 1000, ++num);
//     if (num === 6) {
//         clearTimeout(timeID);
//     }
// }
// setTimeout(showMessage, 1000, 1);
//!-----------------------------------------------------------------
// function showName() {
//     console.log("Gabe")
// };
// setTimeout(showName, 0);
// console.log("Nate");
//!-----------------------------------------------------------------


// let userInfo = {
//     name: "Коля",
//     age: 30,
//     "year of birth": 1992,
// };

// console.log(userInfo);
// console.log(userInfo.age);
// console.log(userInfo["year of birth"]);

//!-----------------------------------------------------------------
// const userInfo = {
//     name: "Vasya",
//     age: 30,
// };
// console.log(userInfo);
// userInfo.name = "Lena";
// console.log(userInfo);
// delete userInfo.name;
// console.log(userInfo);

// console.log(age);
// var age = 15;

// let greeting = +"25" // результатом будет 25 (тип number)

// let users = "10", admins = "20";
// console.log(users + admins) //результатом будет 1020 (тип string)
// console.log(+users + +admins) //результатом будет 30 (тип number)

// let resultOne = resultTwo = resultThree = 1 + 2; //все три переменные при выведении получат результат 3

// let users = 5;
// users++;
// console.log(users) //резултат увеличится на 1 (= 6)

// let userCounter = (8 - 2, 5 + 1);
// console.log(userCounter); //результат равен 6

// console.log(null >= 0); //результат вернётся true
// console.log(undefined == 0); //undefined всегда будет false при сравнении с 0

// console.log(0 || 1); //результат вернётся 1
// console.log(true || "Freelancer"); //результат вернётся true
// console.log(null || 58); //результат вернётся 58
// console.log(undefined || false || "" || null || 0); //результат вернётся 0

// let userName = '';
// let userNickName = "Deker";
// let user = userName || userNickName || "Без имени";
// console.log(user); //результат вернётся Deker

// let admins = 10;
// let users = 4;
// admins > users || users++;
// console.log(users); //результат вернётся 4

// console.log(true && true); //результат вернётся true
// console.log(true && false); //результат вернётся false
// console.log(false && true); //результат вернётся false
// console.log(false && false); //результат вернётся false

// console.log("Фриланс" && 1 && 0 && 3); //результат вернётся 0
// console.log(1 && null && 0 && 3); //результат вернётся null
// console.log(10 && 8); //результат вернётся 8

// console.log(1 && null || 2 && 3); //результат вернётся 3

// let users = 0;
// (users > 0) && console.log(`Пользователей ${users}`); //не вернётся никакого результата, т.к. процнесс остановлен на первом операнде

// console.log(!true); // результат вернётся false

// console.log(!null); // результат вернётся true
// console.log(!1); // результат вернётся false
// console.log(!''); // результат вернётся true
// console.log(!'Freelance'); // результат вернётся false

// console.log(Boolean("Freelance")); // результат вернётся true

// let userName = "Коля";
// console.log(true && 11 || 18 && !"") //результат вернётся Коля

// let message = "Hello world"

// let number = 5;
// if (number > 30) {
//     console.log(`${number} больше 30`);
// } else if (number > 15) {
//     console.log(`${number} больше 15`);
// } else if (number > 10) {
//     console.log(`${number} больше 10`);
// } else {
//     console.log(`${number} не удовлетворяет ни одному условию`);
// }


// if (5 < 10) {
//     messageEnd = " Вася";
// } else {
//     messageEnd = " Женя";
// }
// message += messageEnd;
// console.log(message);


// message = "Привет,"
// let messageEnd = (5 > 10) ? " Вася" : " Женя";
// message += messageEnd;
// console.log(message);

// let num = 0;
// do {
//     console.log(num);
//     num++;
// } while (num < 5)

// while (num) {
//     console.log(num);
//     num--;
// }

// while (num) console.log(num--);
// let num = 0;
// for (; num < 5; num++) {
//     if (num == 3) continue;
//     console.log(num);
// }

// console.log(`Работы окончена, num = ${num}`);

// firstFor: for (let num = 0; num < 4; num++) {
//     for (let size = 0; size < 5; size++) {
//         if (size == 3) {
//             continue firstFor;}
//         console.log(size);}
// }

let num = 0;
// while (num) {
//     console.log(num);
//     num--
// }

// do {
//     console.log(num);
//     num++
// } while (num < 6);

// for (; num < 6; num++) {
//     console.log(num);
// }

// while (num < 3) {
//     console.log(`Число: ${num}`);
//     num++;
// }

// firstFor: for (; num < 2; num++) {
//     for (let size = 0; size < 3; size++) {
//         if (size == 2) {
//             break firstFor;
//         }
//         console.log(size);
//     }
//     console.log(num);
// }

// function showMessage() {
//     console.log(`Message`);
// };
// showMessage();

// function getSum() {
//     let numOne, numTwo;
//     function getNumOne() {
//         numOne = 1;
//     }
//     function getNumTwo() {
//         numTwo = 2;
//     }
//     getNumOne();
//     getNumTwo();
//     let numSum = numOne + numTwo;
//     console.log(numSum);
// }
// getNumOne(); //вернёт ошибку
// getSum();


// let message = `Message №1`;
// function showMessage() {
//     let message = `Message №2`
//     console.log(message);
// }
// console.log(message);
// showMessage();

// let globalVar = "Глобальная переменная";

// function calcSum(numOne, numTwo) {
//     if (numTwo === 1) {
//         return numOne;
//     } else {
//         return numOne * calcSum(numOne, numTwo - 1)
//     }
// }
// console.log(calcSum(2, 3)); // в консоль вернётся 27

// let showMessage = function () {
//     console.log("Hello");
// };
// let message = showMessage;
// message();
// showMessage();

// let getSum;
// if (2 > 1) {
//     getSum = function () {
//         let sum = 4 + 2;
//         console.log(sum);
//     };
// };
// getSum();

// function showNumber(num) {
//     console.log(num);
//     let timeID = setTimeout(showNumber, 1000, ++num);
//     if (num === 6) {
//         clearTimeout(timeID);
//     }
// }
// setTimeout(showNumber, 1000, 1); //вывод функции от 0 до 6 с увеличением числа задержкой 1 секунды

function createMessage(text, name) {
    return `${text}, ${name}!`; //соединение строк
}
function showMessage(message) {
    console.log(message);//вывод в консоль
}
function initMessage(text, name) {
    showMessage(createMessage(text, name));
} // объединение функций и их вывод в консоль
initMessage("Hi", "Mark");