//------------------------------------------------------5/1------------------------------------------------------

// const findS = (a = 10, b = 2) => { return a * b; }
// console.log(findS (10, 2));

//------------------------------------------------------5/2------------------------------------------------------

// let numOfRadius = {radius: 10};
// const circleR = (radius) => { return 3.14 * radius * radius; }
// document.write(circleR(numOfRadius.radius));










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