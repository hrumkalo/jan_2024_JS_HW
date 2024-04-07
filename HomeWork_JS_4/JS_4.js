//------------------------------------------------------4/13------------------------------------------------------

let currencyForExchange = prompt('If you have 1 000 UAH, you can exchange USD or EURO. Which currency do you want exchange?');
let weHave = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}];

if (currencyForExchange === 'USD' || currencyForExchange === 'EURO') {
    document.write('Let`s exchange ');
} else {
    document.write('Please choose, and write "USD" or "EURO"');
}
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let sumUA = 1000;
    for (const item of currencyValues){
        if (item.currency === exchangeCurrency) {
            let exchangedSum = sumUAH / item.value;
            document.write('Let`s exchange');
            return exchangedSum;
        }
    }
    // Якщо валюта для обміну не знайдена
    document.write('Currency not available for exchange');
}

// Виклик функції та виведення результату
let currencyForExchange = prompt('If you have 1 000 UAH, you can exchange USD or EURO. Which currency do you want exchange?');
let result = exchange(1000, weHave, currencyForExchange);
document.write(result);
