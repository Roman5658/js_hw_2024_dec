// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
//

function cloner (obj) {
    if (obj) {
        let functions = [];
        for (const key in obj) {
            if (typeof obj[key] === 'function') {
                const functionCloner = obj[key].bind({});
                functions.push({functionCloner, key});
            }

        }
        const cloneObj = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
cloneObj[func.key] = func.functionCloner;
        }
        console.log(cloneObj)
        return cloneObj;
    }

    throw new Error('Nie tuda')
}

let clone = cloner({id:123, name:'Petro', greateng() {
        console.log('uuu')}, foo () {
        console.log('rrr')}});

clone.greateng()
clone.foo()

//
// #iz6emEsP2BA
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray.map((course, index) => ({...course, id: index + 1, school:("OCTEN SCHOOL")})));



// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції