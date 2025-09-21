console.log('JS #2. Домашнє завдання. Від простих до складних обчислень і рядків')

/*
 * #1
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */

var i = 10;
// інкремент префіксний
var preIncrement = ++i;
console.log('Префіксний інкремент:', preIncrement); // 11

// інкремент постфіксний
var postIncrement = i++;
console.log('Постфіксний інкремент:', postIncrement); // 11
console.log('Значення i після постфіксного інкременту:', i); // 12

// декремент префіксний
var preDecrement = --i;
console.log('Префіксний декремент:', preDecrement); // 11

// декремент постфіксний
var postDecrement = i--;
console.log('Постфіксний декремент:', postDecrement); // 11
console.log('Значення i після постфіксного декременту:', i); // 10

// Виведення у консоль кінцевого значення i
console.log('Кінцеве значення i:', i); // 10



/*
 * #2
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */
var myNum = 10;
var myTest = 20;

myTest += myNum; // 30
console.log('myTest після += :', myTest);

myTest -= 5; // 25
console.log('myTest після -= :', myTest);

myTest *= 2; // 50
console.log('myTest після *= :', myTest);

myTest /= 5; // 10
console.log('myTest після /= :', myTest);

myTest %= 3; // 1
console.log('myTest після %= :', myTest);


/*
 * #3
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

// константа Pi → myPi
// округлене значення числа 89.279 → myRound
// випадкове число між 0..10 (10 не включено) → myRandom
// 3 у 5 степені → myPow
var myPi = Math.PI;
console.log('Константа Pi:', myPi);

var myRound = Math.round(89.279);
console.log('Округлене значення числа 89.279:', myRound);

var myRandom = Math.random() * 10;
console.log('Випадкове число між 0..10:', myRandom);

var myPow = Math.pow(3, 5);
console.log('3 у 5 степені:', myPow);



/*
 * #4
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */

// Мама мыла раму, рама мыла маму
// strObj
var strObj = {
    str: 'Мама мыла раму, рама мыла маму',
    length: 'Мама мыла раму, рама мыла маму'.length
};

console.log('Об\'єкт strObj:', strObj);




/*
 * #5
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.4), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

// isRamaPos
// isRama

var isRamaPos = strObj.str.indexOf('рама');
console.log('Індекс входження "рама":', isRamaPos); // 10

var isRama = strObj.str.includes('рама');
console.log('Чи містить рядок "рама":', isRama); // true



/*
 * #6
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.4), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */

// strReplace
var strReplace = strObj.str.replace('мыла', 'моет').replace('рама', 'Рама').replace('мыла', 'держит');
console.log('Результат заміни підрядка:', strReplace); // 'Мама моет раму, Рама держит маму'



/*
 * #7
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

// var someStr = 'some STRING'
// var upperStr
// var lowerStr
var someStr = 'some STRING';
var upperStr = someStr.toUpperCase();
console.log('Рядок у верхньому регістрі:', upperStr); // 'SOME STRING'

var lowerStr = someStr.toLowerCase();
console.log('Рядок у нижньому регістрі:', lowerStr); // 'some string'


