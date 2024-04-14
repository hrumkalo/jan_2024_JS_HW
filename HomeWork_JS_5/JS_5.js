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

//------------------------------------------------------5/5------------------------------------------------------
// створити функцію яка створює параграф з текстом.

// const SomeText = (text) => {document.write(`<p>${text}</p>`);}
// SomeText("Welcome to my page");

//------------------------------------------------------5/6------------------------------------------------------
// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// const OurText = (text) => {
//     document.write(`<ul>
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li>
// </ul>`);
// }
//
// OurText("Hello people");

//------------------------------------------------------5/7------------------------------------------------------
// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// const OurTask2 = (text, number) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// OurTask2('Hello people', 3);

//------------------------------------------------------5/8------------------------------------------------------
// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// const SomeList = [125, "ky-ky", true, false];
// const data = (array) => {
//     document.write(`<ul>`);
//     for (const item of array) {
//         document.write(`<li>${item}</li>`);
//     }
//     document.write(`</ul>`);
// }
// data(SomeList);

//------------------------------------------------------5/9------------------------------------------------------
// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let listOfPeople = [
//     {id: 1, name: "Viki", age: 50},
//     {id: 2, name: "Miki", age: 100},
//     {id: 3, name: "Fiki", age: 10}
// ];
//
// const obj = (array) => {
//     array.forEach(item => {
//         console.log(`${item.id}. ${item.name}, ${item.age}`);
//     });
// }
// obj(listOfPeople);

//------------------------------------------------------5/10------------------------------------------------------
//

// let listOfNumber = [6, 4, 2, 0, -2, -4, -6];
//
// const lessNumber = (array) => {
//     let least = array[0];
//     array.forEach(item => {
//         if (item < least) {
//             least = item;
//         }
//     });
//     return least; // повертаємо найменше число
// };
// document.write(lessNumber(listOfNumber));

//------------------------------------------------------5/11------------------------------------------------------

// let numberExist = [1, 2, 10];
//
// function sum(arr) {
//     let sum = 0;
//     for (const item of arr) {
//         sum = sum + item;
//     }
//     return sum;
// }
// console.log(sum(numberExist));

//------------------------------------------------------5/12------------------------------------------------------

// const swap = (arr, index1, index2) => {
//     let num = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = num;
//     return arr; // Повертаємо масив
// }
// const Pereprysvoinnia = swap([11, 22, 33, 44], 1, 2);
// document.write(Pereprysvoinnia);


//------------------------------------------------------4/13------------------------------------------------------

// const currencyForExchange = prompt('If you have 1 000 UAH, you can exchange USD or EURO. Which currency do you want exchange?');
// const weHave = [{currency: 'USD', value: 40}, {currency: 'EURO', value: 42}];
//
// if (currencyForExchange === 'USD' || currencyForExchange === 'EURO') {
//     document.write('Let`s exchange your money');
// } else {
//     document.write('Please choose, and write "USD" or "EURO"');
// }
//
// const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
//     const sumUA = 1000;
//     for (const item of currencyValues) {
//         if (item.currency === exchangeCurrency) {
//             let exchangedSum = sumUAH / item.value;
//             console.log(`Let's exchange to ${exchangeCurrency}`);
//             return exchangedSum;
//         }
//     }
//     // Повторне введення валюти, якщо валюта для обміну не знайдена
//     const newCurrency = prompt('Currency not available for exchange. Please choose, and write "USD" or "EURO"');
//     return exchange(sumUAH, currencyValues, newCurrency);
// }
//
// // Виклик функції та виведення результату
// const currencyForExchangeUSD = 'USD'; // Валюта для обміну
// const resultUSD = exchange(1000, weHave, currencyForExchangeUSD);
// console.log(resultUSD);
//
// // Виклик функції та виведення результату для обміну на EUR
// const currencyForExchangeEURO = 'EURO'; // Валюта для обміну
// const resultEURO = exchange(1000, weHave, currencyForExchangeEURO);
// console.log(resultEURO);