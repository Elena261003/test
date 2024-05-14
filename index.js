console.log('Hola')
console.log(6*7)
//console.log ('Hello World!') - комментарий

/*
многострочный комментарий

может занимать несколько строк
*/
/*/переменные.
Переменная в JavaScript — именованная область памяти, которая используется для хранения данных.
нельзя объявить переменную больше одного раза.
let age = 35;
let age = 6;
но можно изменить значение переменной без let
*/
let age = 35;
age = 44;

console.log(age) //  вывод значения переменной age в консоли

let x = 80;
let y = 100;

console.log(x, y); // 80 y 100
console.log(x + y); // 180

//переменная Age и переменная age - это две разные переменные.

// копирование значений из одной переменной в другую

let name = 'Lena';
let surname;
surname = name ;

console.log(name);
console.log(surname);

/*Константа
тип переменной, ее значение нельзя изменить после ее определения.

отличие константы от обычной переменной:
нельзя изменять значение константы, const

const num = 222;
num = 111; (ОШИБКА)
*/

const myName = "Elena";
console.log(myName);

/*
Создайте переменную age и присвойте ей значение 96
Выведите переменную age
Выведите сообщение «Прошел год»
Присвойте переменной age значение 97
Выведите переменную age

let age = 96;
console.log(age);
console.log('Прошел год');
age = 97;
console.log(age); 


Создайте две переменные source и destination.
Присвойте переменной source значение "sigma".
Затем скопируйте значение переменной source в переменную destination. Измените значение source на "delta".
Выведите значениe source, a затем значение destination с новой строки.

let source = 'sigma';
let destination = source;
source = 'delta';
console.log(source);
console.log(destination);
*/

