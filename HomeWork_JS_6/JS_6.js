//------------------------------------------------------6/1------------------------------------------------------

// Знайти та вивести довижину настипних стрінгових значень: 'hello world', 'lorem ipsum', 'javascript is cool'

// let strings = [
//     {text1: 'hello world'},
//     {text2: 'lorem ipsum'},
//     {text3: 'javascript is cool'},
// ]
// console.log(strings.length);
// console.log(strings[0].text1.length);
// console.log(strings[1].text2.length);
// console.log(strings[2].text3.length);

// Перевести до великого регістру наступні стрінгові значення: 'hello world', 'lorem ipsum', 'javascript is cool'

// let toUpperCase = strings[0].text1.toUpperCase();
// console.log(toUpperCase);
// let toUpperCase = strings[1].text2.toUpperCase();
// console.log(toUpperCase);
// let toUpperCase = strings[2].text3.toUpperCase();
// console.log(toUpperCase);

// Перевести до нижнього регістру настипні стрінгові значення: 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let strings = [
//     {text1: 'HELLO WORLD'},
//     {text2: 'LOREM IPSUM'},
//     {text3: 'JAVASCRIPT IS COOL'},
// ]
// let toLowerCase = strings[0].text1.toLowerCase();
// console.log(toLowerCase);

// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str.substring(str.indexOf(' '), str.lastIndexOf('   ')));

//------------------------------------------------------6/2.0------------------------------------------------------

// Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let stringToarray = 'Ревуть воли як ясла повні';
// let split = stringToarray.split(' ');
// console.log(split);

//------------------------------------------------------6/2.1------------------------------------------------------

// Є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// let arrOfNum = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// let stringNumbers = arrOfNum.map(num => num.toString());
//
// console.log(stringNumbers);

//------------------------------------------------------6/2.2------------------------------------------------------

// Створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]


// let nums = [11, 21, 3];
// // let sortNums = nums.sort((first, neighbor) => {
// //     return first - neighbor;
// // });
// // console.log(sortNums);
//
// let sortNums = nums.sort((first, neighbor) => {
//     return  neighbor - first;
// });
// console.log(sortNums);

//------------------------------------------------------6/3.0------------------------------------------------------

// - є масив let coursesAndDurationArray = [{title: 'JavaScript Complex', monthDuration: 5}, {title: 'Java Complex', monthDuration: 6}, {title: 'Python Complex', monthDuration: 6}, {title: 'QA Complex', monthDuration: 4}, {title: 'FullStack', monthDuration: 7}, {title: 'Frontend', monthDuration: 4}];
// - відсортувати його за спаданням за monthDuration
// - залишивши тільки курси з тривалістю більше 5 місяців
// - за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}


// let coursesAndDurationArray = [
//     { title: 'JavaScript Complex', monthDuration: 5 },
//     { title: 'Java Complex', monthDuration: 6 },
//     { title: 'Python Complex', monthDuration: 6 },
//     { title: 'QA Complex', monthDuration: 4 },
//     { title: 'FullStack', monthDuration: 7 },
//     { title: 'Frontend', monthDuration: 4 }
// ];
//
// //відсортувати його за спаданням за monthDuration
// coursesAndDurationArray.sort((first, neighbor) => {
//     return neighbor.monthDuration - first.monthDuration;
// });
//
// console.log(coursesAndDurationArray);
//
// //залишивши тільки курси з тривалістю більше 5 місяців
//
// let longDurationCourses = coursesAndDurationArray.filter(course => course.monthDuration > 5);
//
// console.log(longDurationCourses);
//
// // за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//
// let changeElements = coursesAndDurationArray.map((course, index) => {
//     return {
//         id: index + 1,
//         title: course.title,
//         monthDuration: course.monthDuration
//     };
// });
//
// console.log(changeElements);

//------------------------------------------------------6/3.1------------------------------------------------------

// Описати колоду карт (від 6 до туза без джокерів):
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

let SixtySix = [
    { cardSuit: 'Hearts', cardsRanked: ['6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'], color: 'red'}, // ♥ чирва
    { cardSuit: 'Diamonds', cardsRanked: ['6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'], color: 'red'}, // ♦ бубна
    { cardSuit: 'Spades', cardsRanked: ['6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'], color: 'black'}, // ♠ піка
    { cardSuit: 'Clubs', cardsRanked: ['6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'], color: 'black'} // ♣ трефа
];
console.log(SixtySix);

// - знайти піковий туз

let aceOfSpades = SixtySix.filter(card => card.cardSuit === 'Spades' && card.cardsRanked.includes('Ace'));
console.log(aceOfSpades);

  



