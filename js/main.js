// console.log("\n=== Деструктуризация массивов ===");
// const colors = ["red", "green", "blue"];
// const color1 = colors[0];
// const color2 = colors[1];
// console.log(color1, color2);

// const [firstColor, secondColor, thirdColor] = colors;
// console.log(primary, tertiary);

// const [c1, c2, c3, c4 = "yellow"] = colors;
// console.log(c4);

// consolr.log("Деструктуризация объектов");
// const user = {
//     name: "Алиса",
//     age: 25,
//     city: "Москва",
// };
// const userName = user.name;
// const userAge = user.age;
// console.log(userName, userAge);

// const { name, age, city } = user;
// console.log(name, age, city);

// const { name: fullName, age: years } = user;
// console.log(fullName, years);

// const { name: personName, country = "Russia" } = user;
// console.log(personName, country);

// console.log("Деструктуризация в парамерах");
// const user = {
//     name: "Алиса",
//     age: 25,
//     city: "Москва",
// };
// function printUserOld(user) {
//     console.log(`Имя: ${user.name}`);
//     console.log(`Возраст: ${user.age}`);
//     console.log(`Город: ${user.city}`);
// }
// function printUser({ name, age, city }) {
//     console.log(`Имя: ${name}`);
//     console.log(`Возраст: ${age}`);
//     console.log(`Город: ${city}`);
// }

// printUserOld(user);
// console.log();
// printUser(user);

// const product = {
//     name: "iPhone",
//     price: "1000 USD",
//     category: "smartphone",
//     inStock: true,
// };
// function printProduct({name, price, category, inStock}) {
//     console.log(`Name: ${name}`);
//     console.log(`Price: ${price}`);
//     console.log(`Name: ${category}`);
//     console.log(`In Stock: ${inStock}`);
// }
// printProduct(product);

// console.log("Spread для массивов");
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2];
// console.log("Копия массива: ", copy);
// const extended = [0, ...arr1, 7, 8];
// console.log("Расширенный массив: ", extended);

// console.log("Spread для объектов");
// const person = {
//     name: "Ivan",
//     age: 30,
// };
// const address = {
//     city: "St. Petesburg",
//     street: "Невский проспект",
// };
// const fullInfo = {...person, ...address };
// console.log("Полная информация: ", fullInfo);
// const personCopy = { ...person };
// console.log("Копия объекта: ", personCopy);
// const updated = {...person, age: 31, occupation:
//     "Developer"
// };
// console.log("Обновленный объект: ", update);

// console.log("Rest оператор");
// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }
// console.log("Сумма 1,2,3: ", sum(1, 2, 3));
// console.log("Сумма 1,2,3,4,5: ", sum(1, 2, 3, 4, 5));

// const mas1 = [11, 32, 23];
// const mas2 = [34, 45, 56];
// const combined = [...mas1, ...mas2]
// console.log(combined);

// function findMax(...numbers) {
//     if (cumbers.length === 0) {
//         return undefined;
//     }
//     return Math,max(...numbers);
// }
// console.log(findMax(5, 12, 8, 21, 3));
// console.log(findMax(...combined));

import { square, cube, E } from "./math"; 

console.log(square(3));
console.log(cube(2));
console.log(E);

console.log("Промисы");
const simplePromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) { resolve("Операция выполнена успешно!");
} else {
    reject("Произошла ошибка!");
  }
});
simplePromise
  .then((result) => console.log("Result:", result))
  .then((error) => console.log("Error:", error));
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Прошло ${ms} миллисекунд`);
        }, ms);
    });
}
delay(1000)
  .then((message) => console.log(message));

function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({
                    id: userId,
                    name: "Иван Иванов",
                    email: "ivan@example.com",
                });
            } else {
                reject("Неверный ID пользователя");
            }
        }, 1500);
    });
}
fetchUserData(1)
.then((user) => console.log("Пользователь: ", user))
.catch((error) => console.log("Ошибка:", error));

function step1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`Шаг 1 завершен`), 500);
    });
}
function step2() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`${previousResult} -> Шаг 2 завершен`), 500);
    });
}
function step3() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`${previousResult} -> Шаг 3 завершен`), 500);
    });
}
step1()
  .then((result1) => step2(result1))
  .then((result2) => step3(result2))
  .then((finalResult) => console.log("Финальный результат:", finalResult))
  .catch((error) => console.log("Ошибка в цепочке: ", error));

function checkInventory(productName, stock) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (stock > 0) {
                resolve(`Товар "${productName}" есть в наличии. Остаток: ${stock} шт.`);
            } else {
                reject(`Товара "${productName}" нет на складе.`);
            }
        }, 1000);
    });
}
checkInventory("Ноутбук", 5)
    .then((result) => console.log(result))
    .catch((error) => console.error(error));