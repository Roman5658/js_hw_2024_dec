// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User2(id, name, email, phone) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
}

let users1 = [
    new User2(1, 'kokos', 'fhf@gmail.com', '+3672774663526'),
new User2(2, 'kokos', 'fhf@gmail.com', '+3672774663526'),
new User2(3, 'kokos', 'fhf@gmail.com', '+3672774663526'),
new User2(4, 'kokos', 'fhf@gmail.com', '+3672774663526'),
new User2(5, 'kokos', 'fhf@gmail.com', '+3672774663526'),
new User2(6, 'kokos', 'fhf@gmail.com', '+3672774663526'),
new User2(7, 'kokos', 'fhf@gmail.com', '+3672774663526'),
new User2(8, 'kokos', 'fhf@gmail.com', '+3672774663526'),
new User2(9, 'kokos', 'fhf@gmail.com', '+3672774663526'),
new User2(10, 'kokos', 'fhf@gmail.com', '+3672774663526')
];

console.log(users1)


//
// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

let filterIndex = users.map((value, index) => {
    return {id: index + 1, name: value.name, age: value.age, status: value.status};
})
console.log(filterIndex);
console.log(users);

function filterUsers(arr, callback) {
    let newUsers = []
    for (const item of arr) {
        if (callback(item)) {
            newUsers.push(item);
        }

    }
    return newUsers;
}

let eventUsers = filterUsers(filterIndex, user => user.id % 2 === 0)
console.log(eventUsers)


//
// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let user = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

let userSortMap = user.map((value, index) => {
    return {id: index + 1, name: value.name, age: value.age, status: value.status};
})
console.log(userSortMap);

let userSort = [...userSortMap].sort((a, b) => a.id - b.id)
console.log(userSort);

let userIdSort = [...userSortMap].sort((a, b) => b.id - a.id)
console.log(userIdSort);
//
// #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//

function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let clients = [];

clients.push(new Client(1, 'John', 'Li', 'john@gmail.com', '+342868478845', ['tv', 'phone']));
clients.push(new Client(2, 'Jane', 'Doe', 'jane@example.com', '+342868478846', ['laptop', 'tablet']));
clients.push(new Client(3, 'Tom', 'Smith', 'tom.smith@example.com', '+342868478847', ['keyboard', 'mouse', 'smartwhatch', 'appleTV']));
clients.push(new Client(4, 'Emily', 'Johnson', 'emily.johnson@example.com', '+342868478848', ['headphones', 'usb stick', 'external HDD']));
clients.push(new Client(5, 'Michael', 'Brown', 'michael.brown@example.com', '+342868478849', ['monitor', 'router']));
clients.push(new Client(6, 'Jessica', 'Wilson', 'jessica.wilson@example.com', '+342868478850', ['camera', 'tripod', 'external HDD', 'external HDD']));
clients.push(new Client(7, 'David', 'Moore', 'david.moore@example.com', '+342868478851', ['printer', 'scanner']));
clients.push(new Client(8, 'Sarah', 'Taylor', 'sarah.taylor@example.com', '+342868478852', ['smartwatch', 'charger']));
clients.push(new Client(9, 'James', 'Anderson', 'james.anderson@example.com', '+342868478853', ['phone case', 'screen protector']));
clients.push(new Client(10, 'Daniel', 'Thomas', 'daniel.thomas@example.com', '+342868478854', ['flash drive', 'external HDD']));

console.log(clients);


//
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortClients = clients.sort((a, b) => a.order.length - b.order.length)
console.log(sortClients)
//
//
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(mode, manufacturer, year, maxSpeed, volume) {
    this.mode = mode;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    }
    this.info = function () {
        for (const key in this) {
            console.log(key, this[key]);

        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    this.changeYear = function (newYear) {
        this.year = newYear;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }

}

let car = new Car('Audi', 'Germany', '2022', 249, 3.5);
console.log(car)

car.info()
car.drive()
car.increaseMaxSpeed(100)
console.log(car)
car.changeYear(2025)
console.log(car)
car.addDriver({name: name = 'Petro'})
console.log(car)

//
//
// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//

class CarBMW {
    constructor(mode, manufacturer, year, maxSpeed, volume) {
        this.mode = mode;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
        this.drive = function () {
            console.log(`зуярим ${maxSpeed} на годину`);
        }
    }

    info() {
        for (const key in this) {
            console.log(key, this[key]);

        }
    }
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    changeYear(newYear) {
        this.year = newYear;
    }
   addDriver (driver) {
        this.driver = driver;
    }
}

let car1 = new CarBMW('BMW', 'Germany', '2022', 180, 4.5);
console.log(car1);

car1.info()
car1.drive()
car1.increaseMaxSpeed(400)
console.log(car1)
car1.changeYear(2025)
console.log(car1)
car1.addDriver({name: name = 'Dodik'})
console.log(car1)

//
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Popelucha {
    constructor(name, age, tapok) {
        this.name = name;
        this.age = age;
        this.tapok = tapok;
    }
}

class Prince {
    constructor(name, age, tapokPrince) {
        this.name = name;
        this.age = age;
        this.tapokPrince = tapokPrince;
    }
}
let popeluchi = [
    new Popelucha('Pepka', 67, 42),
    new Popelucha('Zina', 64, 45),
    new Popelucha('Zana', 68, 32),
    new Popelucha('Jolla', 23, 56),
    new Popelucha('Ivona', 54, 46),
    new Popelucha('Karga', 65, 47),
    new Popelucha('Natasha', 76, 48),
    new Popelucha('Elis', 20, 36)
];

let prince = new Prince('PETRO', 30, 36);

let popeluchaForPrince = popeluchi.find(popelucha => popelucha.tapok === prince.tapokPrince);
console.log('лапоть найден', popeluchaForPrince)
//
//
//
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

Array.prototype.myForEach = function (callback) {
    const muArray = this;
    for (const item of muArray) {
        callback(item);

    }


};
[11,22,33,44,55,66,66].myForEach((myCallback => console.log(myCallback)));

Array.prototype.myFilter  = function (callback) {
    const muArray = [];
    for (const item of this) {
        if (callback(item, this.indexOf(item), this)) {
            muArray.push(item);
        }
    }
    return muArray;
};

let arrNumbers = [11,23,33,44,55,66,77,88,99];
let numbersNew = arrNumbers.myFilter(num => num % 2 === 0)
console.log(numbersNew)

