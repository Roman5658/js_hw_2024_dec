// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

const div = document.createElement('div');
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');
div.textContent = 'Hello World!';

document.body.appendChild(div);





//
//     #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let arr = ['Main','Products','About us','Contacts'];
const menu = document.createElement('ul');
menu.classList.add('menu');
document.body.appendChild(menu);
for (const item of arr) {
    const li = document.createElement('li');
    li.innerText = item;
    menu.appendChild(li);

}
// #jeBqHV525U5
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let list = document.createElement('div');
div.classList.add('div');
for (const item of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.innerText = `Title: ${item.title}\nDuration: ${item.monthDuration} months`;
    div.classList.add('course-div')
    document.body.appendChild(div);


}


//
// =========================
//     #Kx1xgoKy8
//     - Є масив
let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
const div1 = document.createElement('div');
for (const courses of coursesAndDurationArray1) {
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    h1.innerText = courses.title;
    p.innerText = courses.monthDuration;
    p.classList.add('p-course')


    div1.append(h1, p);
}
document.body.appendChild(div1);
div1.classList.add('course-in-div');


//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
// ==========================