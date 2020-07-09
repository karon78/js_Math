"use strict";

/**
 * Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b
 * */

function getBalance(a, b) {
    return a % b;
}

console.log(getBalance(10, 3));

/**Даны переменные a и b. Проверьте, что a делится без остатка на b.
 * Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком'
 * и остаток от деления.
 * */

function getNotBalance(a, b) {
    if (a % b === 0) {
        console.log("Делится");
    } else {
        console.log("Делится с остатком");
    }
}

console.log(getNotBalance(10, 3));
console.log(getNotBalance(9, 3));

/**
 * Возведите 2 в 10 степень. Результат запишите в переменную st.
 * */

function getPow(a, b) {
    console.log(Math.pow(a, b));
}

getPow(2, 10);

/**
 * Найдите квадратный корень из 245.
 * */

function getSqrt(a) {
    console.log(Math.sqrt(a));
}

getSqrt(245);

/**Дан массив с элементами 4, 2, 5, 19, 13, 0, 10.
 * Найдите квадратный корень из суммы кубов его элементов.
 * Для решения воспользуйтесь циклом for.
 * */

const arr = [4, 2, 5, 19, 13, 0, 10];

const arrayResult = function () {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i], 3);
    }
    return Math.sqrt(sum);
}
console.log(arrayResult())

/**
 * Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
 * */

function getSqrt2(a) {
    const sqrtValue = Math.sqrt(a);
    console.log(Math.round(sqrtValue));
    console.log(sqrtValue.toFixed(1));
    console.log(sqrtValue.toFixed(2));
}

getSqrt2(379);

/**
 * Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны,
 * запишите результаты округления в объект с ключами 'floor' и 'ceil'.
 */

function getSqrt3(a) {
    const sqrtValue = Math.sqrt(a);
    console.log('round = ', Math.round(sqrtValue));
    console.log('ceil = ', Math.ceil(sqrtValue));
}

getSqrt3(587);

/**
 * Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
 * */

function getMinValue(...arg) {
    return Math.min(...arg);
}

console.log(getMinValue(4, -2, 5, 19, -130, 0, 10))

function getMaxValue(...arg) {
    return Math.max(...arg);
}

console.log(getMaxValue(4, -2, 5, 19, -130, 0, 10))

/**
 * Выведите на экран случайное целое число от 1 до 100.
 * */

function getRandomNumber (min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor( Math.random()*(max-min + 1))+min;
}
alert(getRandomNumber(1,100))

/**
 * Заполните массив 10-ю случайными целыми числами.
 * (Подсказка: нужно воспользоваться циклами for или while).
 * */

function getRandomArray () {
    let array =[];
    for (let i = 0; i < 10; i++) {
        array[i] = Math.floor(Math.random()*100);
    }
    return array;
}
console.log(getRandomArray())

/**
 * Даны переменные a и b. Найдите найдите модуль разности a и b.
 * Проверьте работу скрипта самостоятельно для различных a и b.
 */

function getAbs(a,b) {
    return Math.abs(a-b);
}

console.log('2-8 =|',getAbs(2,8),'|')
console.log('5-1 =|',getAbs(5,1),'|')
console.log('21-3 =|',getAbs(21,3),'|')

/**
 * Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c.
 * Сделайте так, чтобы в любом случае в переменную c записалось положительное значение.
 * Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.
 * */

function getAbs1(a,b) {
    const c = Math.abs(a-b);
    return c;
}

console.log('c =',getAbs1(3,5))
console.log('c =',getAbs1(6,1))

/**
 * Дан массив arr. Найдите среднее арифметическое его элементов.
 * Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
 */

const arr1 = [12, 15, 20, 25, 59, 79]

function getAverage(array) {
    let sum = 0;
    for(let i = 0; i<array.length; ++i){
        sum += array[i];
    }
    return sum/array.length;
}
const average = getAverage(arr1)
console.log(average);

/**
 * Напишите скрипт, который будет находить факториал числа.
 * Факториал (обозначается !) - это произведение (умножение) всех целых чисел,
 * меньше данного, и его самого. Например, 4! = 1*2*3*4.
 * */

let factorial = 1;
function getFactorial(n) {

    if(n===1){
        return factorial;
    }
    if (n>1){
        factorial *=n
        getFactorial(--n)
    }
}
getFactorial(4)
console.log(factorial)






