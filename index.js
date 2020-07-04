"use strict";

/*Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b*/

function ostatok(a, b) {
    return a % b;
}
console.log(ostatok(10, 3));

/*Даны переменные a и b. Проверьте, что a делится без остатка на b.
Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком'
и остаток от деления.*/

function notOstatok(a, b) {
    if (a % b === 0) {
        console.log("Делится");
    } else {
        console.log("Делится с остатком");
    }
}
console.log(notOstatok(10, 3));
console.log(notOstatok(9, 3));

/*Возведите 2 в 10 степень. Результат запишите в переменную st.*/

