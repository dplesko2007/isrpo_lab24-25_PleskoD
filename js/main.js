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

