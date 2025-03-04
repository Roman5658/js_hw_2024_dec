// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectangleArea(a, b) {
    return a * b;
}

console.log(rectangleArea(10, 20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circleArea(r) {
    return Math.PI * r * r;
}

console.log(circleArea(50));

// - створити функцію яка приймає масив та виводить кожен його елемент


function arr(array) {
    for (let i = 0; i < arrFunction.length; i++) {
        console.log(array[i])
    }
}

let arrFunction = [1, 2, 3, 4, 5, 6, 7, 8];

arr(arrFunction);

// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function text(paragraph) {
    document.write("<p>" + paragraph + "</p>");
}

text("Hello, World!");

// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

function ulli(text) {
    document.write("<ul>");
    for (let i = 0; i < 3; i++) {
        document.write("<li>" + text + "</li>");
    }
    document.write("</ul>");
}

ulli("Hello");


// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
// #gEFoxMMO

function ulli2(text, count) {
    document.write("<ul>");
    for (let i = 0; i < count; i++) {
        document.write("<li>" + text + "</li>");
    }
    document.write("</ul>")
}

ulli2("lorem", 1)
ulli2("ipsum", 1)
ulli2("kfjkdh", 1)
ulli2("Hi, Octen", 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function users(id, name, age) {
    return {
        id: id,
        name: name,
        age: age
    };
}

let userArray = [
    users(1, 'Vassia', 32),
    users(2, 'Olya', 18),
    users(3, 'Petya', 34),
];

for (let i = 0; i < userArray.length; i++) {
    document.write(`<div>
<p>ID: ${userArray[i].id}</p>
<p>Name: ${userArray[i].name}</p>
<p>Age: ${userArray[i].age}</p>

                   </div>`)
}

//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
let calc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function minNumber (num) {
    let min = num[0]
    for (let i = 1; i < num.length; i++) {
        let numbers = num[i]
        if (numbers < min){
            min = numbers
        }
    }
    return min
}

console.log(minNumber(calc))
// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400


