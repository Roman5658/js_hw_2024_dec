// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const rectangleArea = (a, b) => a*b
console.log(rectangleArea(10, 20))

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

const radius = (r) => Math.PI * r *r
console.log(radius(50))



// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const cilinder = (radiuscilinder, height) => Math.PI * radiuscilinder * height
console.log(cilinder(10, 40))



// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const funcArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

funcArr(arr);




// #59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

const paragraph = (text) => {
    document.write(`<p>${text}</p>`);
}

paragraph("Hello, World!");

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const ulli = (text) => {
    document.write("<ul>");
   for (let i = 0; i < 3; i++) {
       document.write("<li>" + text + "</li>");
   }
    document.write("</ul>")
}

ulli("Hello");

// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const ulli2 = (text, count) => {
    document.write("<ul>");
    for (let i = 0; i < count; i++) {
        document.write("<li>" + text +  "</li>");

    }
    document.write("</ul>")
}
ulli2("Hi", 3);
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const list = (arr) => {
   document.write("<ul>")
    for (let i = 0; i <arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write("</ul>");
}
list([1 , "Hello", true])

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const users = (user) => {
    for (const userElement of user) {
        document.write(`<div>${userElement.id} ${userElement.name} ${userElement.age}</div>`);

    }
}
users([{id:123, name: "Petya", age:32},
    {id:547, name: "Ania", age:37},
    {id:875, name: "Kola", age:23}])
//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

const minNumbers = (numbers) => {
    let num = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i]
        if (number < num) {
            num = number
        }

    }
    return num
}

console.log(minNumbers([32, 43, 12, 56, 1232]))


// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sum = (arr) => {
    let result = 0;
    for (const arrElement of arr) {
        result = result + arrElement;
    }

return result;
}



    console.log(sum([1, 2, 10,]))
// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

const swap = (arr, index1, index2) => {
    if (index1 < arr.length && index2 < arr.length) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;

        return arr;
    }

    function error() {

    }

    return error
}
console.log(swap([11,22,33,44],0,1))

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

const exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    let chosen;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            chosen = item;
        }
    }
    let result = sumUAH/chosen.value
    return result;
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))
