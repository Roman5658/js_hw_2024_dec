// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
document.getElementById('btn').onclick = function() {
    const div = document.getElementById('text');
    if (div){
        div.style.display = 'none';
    }
}


//
//         #j693ca8
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//

document.getElementById('checkBtn').onclick = function() {
    const age = document.getElementById('ageInput').value;
    const message = document.getElementById('message');

    if (!age) {
        message.textContent = 'Please enter your age';
        message.style.color = 'red';
    }
    else if(age < 18){
        message.textContent = 'You not a 18 age'
        message.style.color = 'red';
    }
    else {
        message.textContent = 'its good';
        message.style.color = 'green';
    }
}

// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
//
document.getElementById('submitButon').onclick = function() {
    const name = document.getElementById('name').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const age = document.getElementById('age').value.trim();
    const output = document.getElementById('output');
    const message = document.getElementById('message');

    if (!name || !surname || !age || !age) {
        output.style.display = 'block';
        output.style.color = 'red';
        output.textContent = 'please enter all fields'
        message.style.display = 'none'

        return;
    }
    const user = {
        name: name,
        surname: surname,
        age: Number(age),
    }

    output.style.display = 'block';
    output.style.color = 'black';
    message.textContent = "Submission successful!";
    message.style.color = "green";
    message.style.display = "block";


    console.log(JSON.stringify(user, null, 4))
}

// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
//

document.getElementById('textForReload').textContent = 'Number Reload Link';
let counterValue = localStorage.getItem('counter');
if (counterValue === null) {
    counterValue = 0
}else {
    counterValue = Number(counterValue) + 1;
}
document.getElementById('counter').textContent = counterValue;
localStorage.setItem('counter', counterValue);


// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
//
//
let sessionList = JSON.parse(localStorage.getItem('sessionList')) || [];
sessionList.push(new Date())
localStorage.setItem('sessionList', JSON.stringify(sessionList));

//
// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
//

const input = document.getElementById('inputNumber');
const resultDiv = document.getElementById('result');
input.oninput = function() {
    resultDiv.innerText = +this.value *2.2;
}

// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
//
function addToLocalStorage (arrayName,objToAdd) {
    const liItem = localStorage.getItem(arrayName);
    if (!liItem) {
        throw new Error('is not Array')
    }
    const array = JSON.parse(liItem);
    if (typeof objToAdd === 'object') {
        array.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(array));
}
addToLocalStorage('sessionList', {});
//     #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//
//

document.getElementById('generateTable').onclick = function() {
    // Получаем данные с инпутов
    const rows = document.getElementById('rows').value;
    const cells = document.getElementById('cells').value;
    const cellContent = document.getElementById('cellContent').value;

    // Проверка на валидность данных
    if (rows <= 0 || cells <= 0 || !cellContent.trim()) {
        alert("Please enter valid values.");
        return;
    }

    // Создаем таблицу
    const table = document.createElement('table');
    table.style.border = '1px solid blue';

    // Генерация строк и ячеек
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < cells; j++) {
            const cell = document.createElement('td');
            cell.textContent = cellContent;
            cell.style.border = '1px solid black';
            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    // Очищаем контейнер и добавляем новую таблицу
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = ''; // очищаем контейнер
    tableContainer.appendChild(table);
}





//     #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
//
// Получаем блок, в котором будет отображаться цена
const priceBlock = document.getElementById('priceBlock');

// Получаем цену из localStorage, если она существует, иначе устанавливаем начальное значение
let currentPrice = localStorage.getItem('currentPrice') ? parseInt(localStorage.getItem('currentPrice')) : 100;

// Получаем время последней перезагрузки из localStorage
let lastReloadTime = localStorage.getItem('lastReloadTime');

// Если время последней перезагрузки присутствует в localStorage
if (lastReloadTime) {
    // Вычисляем разницу времени с последней перезагрузки
    const timeDifference = Date.now() - parseInt(lastReloadTime);

    // Если прошло больше 10 секунд, увеличиваем цену на 10 грн
    if (timeDifference > 10000) {
        currentPrice += 10; // Увеличиваем цену на 10 грн
    }
}

// Отображаем актуальную цену
priceBlock.textContent = `${currentPrice}грн`;

// Сохраняем время последней перезагрузки и актуальную цену в localStorage
localStorage.setItem('lastReloadTime', Date.now().toString());
localStorage.setItem('currentPrice', currentPrice.toString());

//
// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
let currentPage = 0;
const itemsPerPage = 10;

function renderItems() {
    const list = document.getElementById("item-list");
    list.innerHTML = "";
    const startIndex = currentPage * itemsPerPage;
    const visibleItems = items.slice(startIndex, startIndex + itemsPerPage);
    visibleItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
    document.getElementById("prev").disabled = currentPage === 0;
    document.getElementById("next").disabled = startIndex + itemsPerPage >= items.length;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("prev").addEventListener("click", () => {
        if (currentPage > 0) {
            currentPage--;
            renderItems();
        }
    });
    document.getElementById("next").addEventListener("click", () => {
        if ((currentPage + 1) * itemsPerPage < items.length) {
            currentPage++;
            renderItems();
        }
    });
    renderItems();
});