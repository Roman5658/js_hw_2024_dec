// Масиви та об'єкти
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr
arr = [123, '123', 321, 'hello', 'world', true, false, 'nan', 'okten', 'school']
console.log(arr)

// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book
book = {
    title: 'Harry Potter and the Philosophers Stone. MinaLima Edition',
    pageCount: 368,
    genre: 'Action'
}
console.log(book)

let book1
book1 = {
    title: 'Harry Potter and the Chamber of Secrets. MinaLima Edition',
    pageCount: 400,
    genre: 'Action'
}
console.log(book1)

let book2
book2 = {
    title: 'Harry Potter and the Prisoner of Azkaban. Minalima Edition',
    pageCount: 480,
    genre: 'Action'
}
console.log(book2)

//     #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let objPotter
objPotter = {
    title: 'Harry Potter and the Philosophers Stone. MinaLima Edition',
    pageCount: 300,
    genre: 'Action',
    authors: [
        {
            name: 'J.K. Rowling',
            age: 30
        },
        {
            name: 'vasia',
            age: 45
        }
    ]
}
console.log(objPotter)

let objPotter2
objPotter2 = {
    title: 'Harry Potter and the Philosophers Stone. MinaLima Edition',
    pageCount: 300,
    genre: 'Action',
    authors: [
        {
            name: 'J.K. Rowling',
            age: 30
        },
        {
            name: 'vasia',
            age: 45
        }
    ]
}
console.log(objPotter2)

let objPotter1
objPotter1 = {
    title: 'Harry Potter and the Philosophers Stone. MinaLima Edition',
    pageCount: 300,
    genre: 'Action',
    authors: [
        {
            name: 'J.K. Rowling',
            age: 30
        },
        {
            name: 'vasia',
            age: 45
        }
    ]
}
console.log(objPotter1)
//     #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users
users = [
    {
        name: 'John',
        username: 'J.N',
        password: '123454566gnblbm',
    },
    {
        name: 'Johny',
        username: 'J.O',
        password: '1234',
    },
    {
        name: 'Ebi',
        username: 'J.D',
        password: '1234545',
    },
    {
        name: 'Elis',
        username: 'Merge',
        password: '123gnblbm',
    },
    {
        name: 'Petro',
        username: 'Prycep',
        password: 'Tractor',
    },
    {
        name: 'Deniil',
        username: 'john',
        password: 'blbm',
    },
    {
        name: 'John',
        username: 'john',
        password: '123454566gnblbm',
    },
    {
        name: 'John',
        username: 'john',
        password: '123454566gnblbm',
    },
    {
        name: 'John',
        username: 'john',
        password: '123454566gnblbm',
    },
    {
        name: 'John',
        username: 'john',
        password: '123454566gnblbm',}
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let temperature = [
    { day: "Monday", morning: 12, dayTemp: 23, evening: 8 },
    { day: "Tuesday", morning: 13, dayTemp: 23, evening: 7 },
    { day: "Wednesday", morning: 13, dayTemp: 23, evening: 7 },
    { day: "Thursday", morning: 15, dayTemp: 27, evening: 10 },
    { day: "Friday", morning: 13, dayTemp: 23, evening: 7 },
    { day: "Saturday", morning: 17, dayTemp: 30, evening: 15 },
    { day: "Sunday", morning: 11, dayTemp: 24, evening: 9 }
];

console.log(temperature);

// Логічні розгалуження:
//
//     #bAUsaq6LI
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x
x = 0
if (x !== 0)
{
    console.log(true)}
else{
    console.log(false)
}
x = 1
if (x !== 0)
{
    console.log(true)}
else{
    console.log(false)
}
x = -3
if (x !== 0)
{
    console.log(true)}
else{
    console.log(false)
}


// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 12;

if (time >= 0 && time < 15) {
    console.log("первая четверть");
} else if (time >= 15 && time < 30) {
    console.log("вторая четверть");
} else if (time >= 30 && time < 45) {
    console.log("третья четверть");
} else if (time >= 45 && time < 60) {
    console.log("четвертая четверть");
}

let time2 = 17;

if (time2 >= 0 && time2 < 15) {
    console.log("первая четверть");
} else if (time2 >= 15 && time2 < 30) {
    console.log("вторая четверть");
} else if (time2 >= 30 && time2 < 45) {
    console.log("третья четверть");
} else if (time2 >= 45 && time2 < 60) {
    console.log("четвертая четверть");
}





// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
let day = 43
if (day >= 0 && day <10){
    console.log('1 decade')
} else if (day >= 11 && day <20){
    console.log('2 decade')
} else if (day >=21 && day <31){
    console.log('3 decade')
} else{
    console.log('invalid date')
}

// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let days = +prompt('Enter number day for week');
switch (days){
    case 1:
        console.log('Полежать на правом боку');
        break;
    case 2:
        console.log('Перевернуться на левый бок');
        break;
    case 3:
        console.log('Покушать');
        break;
    case 4:
        console.log('сходить в туалет');
        break;
    case 5:
        console.log('Полежать на правом боку');
        break;
    case 6:
        console.log('Перевернуться на левый бок');
        break;
    case 7:
        console.log('Покушать');
        break;
    default:
        console.log('не верный день недели, введите цыфру от 1 до 7');
        break;
}
// #uwsz1RnTQJ1
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
let number1 = +prompt('enter your number');
let number2 = +prompt('enter your number');
if (number1 > number2) {
    console.log(number1);
} else if (number1 < number2) {
    console.log(number2);
}else if (number1 === number2) {
    console.log('числа равные')
}
//     #iBvqtjEm
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let y = '';

y = y || "default";

console.log(y);

y = NaN
y = y || "default";
console.log(y)

y = 0;
y = y || "default";
console.log(y)

y = undefined;
y = y || "default";
console.log(y)

y = 56758787878;
y = y || "default";
console.log(y)

// #awLXL6TBzg
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
//

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if ( coursesAndDurationArray [0].monthDuration > 5){
    console.log('Супер')
}
else {
    console.log('Не супер :)')}
if ( coursesAndDurationArray [1].monthDuration > 5){
    console.log('Супер')
}
else {
    console.log('не супер :)')}
if ( coursesAndDurationArray [2].monthDuration > 5){
    console.log('Супер')
}
else {
    console.log('не супер :)')}
if ( coursesAndDurationArray [3].monthDuration > 5){
    console.log('Супер')
}
else {
    console.log('не супер :)')}
if ( coursesAndDurationArray [4].monthDuration > 5){
    console.log('Супер')
}
else {
    console.log('не супер :)')}
if ( coursesAndDurationArray [5].monthDuration > 5) {
    console.log('Супер')
}else {
    console.log('не супер :)')}