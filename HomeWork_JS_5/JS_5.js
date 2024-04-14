//------------------------------------------------------5/1------------------------------------------------------

// const findS = (a = 10, b = 2) => { return a * b; }
// console.log(findS (10, 2));

//------------------------------------------------------5/2------------------------------------------------------

// let numOfRadius = {radius: 10};
// const circleR = (radius) => { return 3.14 * radius * radius; }
// document.write(circleR(numOfRadius.radius));

//------------------------------------------------------5/3------------------------------------------------------

//Повна площа поверхні циліндра : S = 2 πr (h + r)

// let weHaveSomeNum = {radius: 25, height: 100};
// const Scylinder = (obj) => { return 2 * 3.14 * obj.radius * (obj.height + obj.radius); }
// document.write(Scylinder(weHaveSomeNum));

//------------------------------------------------------5/4------------------------------------------------------
// створити функцію яка приймає масив та виводить кожен його елемент

// let listOfItems = [' html', ' css', ' javascript', ' mysql', ' mongodb', ' react', ' angular', ' node.js'];
// ArrayElements = (array) => {
//     array.forEach(element => console.log(element));
// }
// ArrayElements(listOfItems);

//------------------------------------------------------5/6------------------------------------------------------
// створити функцію яка створює параграф з текстом. Текст задати через аргумент

const SomeText = (text) => {document.write(`<p>${text}</p>`);}
SomeText("Welcome to my page");


//------------------------------------------------------4/13------------------------------------------------------

// let currencyForExchange = prompt('If you have 1 000 UAH, you can exchange USD or EURO. Which currency do you want exchange?');
// let weHave = [{currency: 'USD', value: 40}, {currency: 'EURO', value: 42}];
//
// if (currencyForExchange === 'USD' || currencyForExchange === 'EURO') {
//     document.write('Let`s exchange your money');
// } else {
//     document.write('Please choose, and write "USD" or "EURO"');
// }
// function exchange(sumUAH, currencyValues, exchangeCurrency) {
//     let sumUA = 1000;
//     for (const item of currencyValues) {
//         if (item.currency === exchangeCurrency) {
//             if (exchangeCurrency === 'USD') {
//                 let exchangedSum = sumUAH / item.value;
//                 console.log('Let`s exchange to USD');
//                 return exchangedSum;
//             } else if (exchangeCurrency === 'EURO') {
//                 let exchangedSum = sumUAH / item.value;
//                 console.log('Let`s exchange to EURO');
//                 return exchangedSum;
//             }
//         }
//     }
//     // Повторне введення валюти, якщо валюта для обміну не знайдена
//     let newCurrency = prompt('Currency not available for exchange. Please choose, and write "USD" or "EURO"');
//     return exchange(sumUAH, currencyValues, newCurrency);
// }
//
// // Виклик функції та виведення результату
// let currencyForExchangeUSD = 'USD'; // Валюта для обміну
// let resultUSD = exchange(1000, weHave, currencyForExchangeUSD);
// console.log(resultUSD);
//
// // Виклик функції та виведення результату для обміну на EUR
// let currencyForExchangeEURO = 'EURO'; // Валюта для обміну
// let resultEURO = exchange(1000, weHave, currencyForExchangeEURO);
// console.log(resultEURO);