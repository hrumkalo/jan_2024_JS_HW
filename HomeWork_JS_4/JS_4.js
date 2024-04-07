//------------------------------------------------------4/13------------------------------------------------------

let currencyForExchange = prompt('You can exchange USD or EURO. Which currency do you want exchange?');
let weHave = [
    {currency: 'USD', value: 40},
    {currency: 'EUR', value: 42}
];

if (currencyForExchange === 'USD' || currencyForExchange === 'EURO') {
    document.write('Let`s exchange ');
} else {
    document.write('Please write "USD" or "EURO"');
}
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let sumUA = 1000;
    for (const item of weHave){
        if (item.currency !== exchangeCurrency) {
            let exchangedSum = sumUAH / item.value;
            console.log('Exchange is done');
            return exchangedSum;
        }
    }
    // Якщо валюта для обміну не знайдена
    console.log('Currency not available for exchange');
}

// Виклик функції та виведення результату
let result = exchange(1000, weHave, currencyForExchange);
console.log(result);
