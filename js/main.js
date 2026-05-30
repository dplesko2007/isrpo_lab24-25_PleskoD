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

// import { square, cube, E } from "./math"; 

// console.log(square(3));
// console.log(cube(2));
// console.log(E);

// console.log("Промисы");
// const simplePromise = new Promise((resolve, reject) => {
//     const success = true;
//     if (success) { resolve("Операция выполнена успешно!");
// } else {
//     reject("Произошла ошибка!");
//   }
// });
// simplePromise
//   .then((result) => console.log("Result:", result))
//   .then((error) => console.log("Error:", error));
// function delay(ms) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`Прошло ${ms} миллисекунд`);
//         }, ms);
//     });
// }
// delay(1000)
//   .then((message) => console.log(message));

// function fetchUserData(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (userId > 0) {
//                 resolve({
//                     id: userId,
//                     name: "Иван Иванов",
//                     email: "ivan@example.com",
//                 });
//             } else {
//                 reject("Неверный ID пользователя");
//             }
//         }, 1500);
//     });
// }
// fetchUserData(1)
// .then((user) => console.log("Пользователь: ", user))
// .catch((error) => console.log("Ошибка:", error));

// function step1() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(`Шаг 1 завершен`), 500);
//     });
// }
// function step2() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(`${previousResult} -> Шаг 2 завершен`), 500);
//     });
// }
// function step3() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(`${previousResult} -> Шаг 3 завершен`), 500);
//     });
// }
// step1()
//   .then((result1) => step2(result1))
//   .then((result2) => step3(result2))
//   .then((finalResult) => console.log("Финальный результат:", finalResult))
//   .catch((error) => console.log("Ошибка в цепочке: ", error));

// function checkInventory(productName, stock) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (stock > 0) {
//                 resolve(`Товар "${productName}" есть в наличии. Остаток: ${stock} шт.`);
//             } else {
//                 reject(`Товара "${productName}" нет на складе.`);
//             }
//         }, 1000);
//     });
// }
// checkInventory("Ноутбук", 5)
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error));

// console.log("Async/Await");
// async function greet() {
//     return "Привет!";
// }
// greet().then((message) => console.log(message));
// function getWeather() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ temp: 22, condition: "Солнечно" });
//         }, 1000);
//     });
// }
// async function showWeather() {
//     console.log("Загрузка погоды...");
//     const weather = await getWeather();
//     console.log(`Температура: ${weather.temp}C, ${weather.condition}`);
// }
// showWeather();
// async function fetchData(shouldFail) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (shouldFail) {
//                 reject("Ошибка при загрузке данных");
//             } else {
//                 resolve({ data: "Важные данные" });
//             }
//         }, 800)
//     });
// }
// async function getData() {
//     try {
//         const result = await fetchData(false);
//         console.log("Успешно: ", result.data);

//         const failedResult = await fetchData(true);
//         console.log("Это не выполнится");
//     } catch (error) {
//         console.log("Поймана ошибка: ", error);
//     }
// }
// getData()
// function delay(ms) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`Прошло ${ms} миллисекунд`);
//         }, ms)
//     });
// }

// async function cookDinner() {
//     console.log("Начинаем готовить...");

//     const pasta = await delay(1000).then(() => "Паста готова");
//     console.log(pasta);
//     const sauce = await delay(500).then(() => "Соус готов");
//     console.log(sauce);
//     const salad = await delay(700).then(() => "Салат готов");
//     console.log(salad);

//     return "Ужин готов!";
// }

// cookDinner().then((result) => console.log(result));

// async function cookDinnerFast() {
//     console.log("Готовим всё одеовременно...");

//     const [pasta, sauce, salad] = await Promise.all([
//         delay(1000).then(() => "Паста готова"),
//         delay(500).then(() => "Соус готов"),
//         delay(700).then(() => "Салат готов"),
//     ]);

//     console.log(pasta, sauce, salad);
//     return "Ужин готов быстрее!";
// }
// cookDinnerFast().then((result) => console.log(result));

// async function processOrder() {
//     console.log("Готовим заказ...");

//     const lookFor = await delay(1000).then(() => "Проверяем наличие товара");
//     console.log(lookFor);
//     const calcPrice = await delay(500).then(() => "Проводим расчет стоимости");
//     console.log(calcPrice);
//     const acceptOrder = await delay(700).then(() => "Подтверждение заказа");
//     console.log(acceptOrder);

//     return "Заказ подтвержден!";
// }
// processOrder().then((acceptOrder) => console.log(acceptOrder));

// console.log("Fetch API");
// async function getUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/");
//         if (!response.ok) {
//             throw new Error(`HTTP ошибка! Статус: ${response.status}`);
//         }
//         const users = await response.json();
//         console.log("Первые три пользователя: ");
//         users.slice(0, 3).forEach((user) => {
//             console.log(`- ${user.name} (${user.email})`);
//         });
//     } catch(error) {
//         console.log(`Ошибка при загрузке пользователей: `, error_message);
//     }
// }
// getUsers();

// async function createPost() {
//     try {
//         const newPost = {
//             title: "Моя первая запись",
//             body: "Это содержание моей первой записи в блоге",
//             userId: 1,
//         };
//         const response = await fetch("https://jsonplaceholder.typicode.com/", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             bode: JSON.stringify(newPost),
//         });
//         const createdPost = await response.json();
//         console.log("Создана новая запись: ");
//         console.log("ID: ", createdPost.id);
//         console.log("Заголовок: ", createdPost.title);
//     } catch (error) {
//         console.log("Ошибка при создании записи: ", error.message);
//     }
// }
// createPost();

// console.log("Optional Chaining");
// const user1 = {
//     name: "Андрей",
//     address: {
//         city: "Волжский",
//         street: "Пушкина"
//     },
// };

// const user2 = {
//     name: "Дмитрий",
// };

// const city1 = user2.address && user2.address.city;
// console.log("Город (старый способ):", city1);

// const city2 = user2.address?.street;
// console.log("Город (новый способ):", city2);
// const street = user1.address?.street;
// console.log("Улица: ", street);

// const admin = {
//     name: "Администратор",
//     permissions: {
//         canDelete: () => true,
//     },
// };

// const guest = {
//     name: "Гость",
// };

// console.log("Админ может удалять?", admin.permissions?.canDelete?.());
// console.log("Гость может удалять?", guest.permissions?.canDelete?.());

// const company = {
//     name: "Tech Corp",
//     employees: [
//         { name: "Надежда", role: "Deve;oper" },
//         { name: "Анна", role: "Designer"},
//     ],
// };

// const startup = {
//     name: "New Startup",
// };

// console.log("Первый сотрудник:", company.employees?.[0]?.name);
// console.log("Первый сотрудник стартапа: ", startup.emplyees?.[0]?.name);

// console.log("Nullish Coalescing");
// const value1 = 0;
// const value2 = "";
// const value3 = false;
// const value4 = null;
// const value5 = undefined;

// console.log(`value1 || "defualt":`, value1 || "default");
// console.log(`value2 || "defualt":`, value2 || "default");
// console.log(`value3 || "defualt":`, value3 || "default");
// console.log(`value4 || "defualt":`, value4 || "default");
// console.log(`value5 || "defualt":`, value5 || "default");

// console.log(`value1 ?? "defualt":`, value1 ?? "default");
// console.log(`value2 ?? "defualt":`, value2 ?? "default");
// console.log(`value3 ?? "defualt":`, value3 ?? "default");
// console.log(`value4 ?? "defualt":`, value4 ?? "default");
// console.log(`value5 ?? "defualt":`, value5 ?? "default");

// function displayUserSettings(settings) {
//     const theme = settings?.theme ?? "light";
//     const fontSize = settings?.fontSize ?? 14;
//     const notifications = settings?.notifications ?? true;

//     console.log("Настройки пользователя: ");
//     console.log("Тема: ", theme);
//     console.log("Размер шрифта: ", fontSize);
//     console.log("Уведомления: ", notifications);
// }

// displayUserSettings({ theme: "dark", fontSize: 16 });
// displayUserSettings({ notifications: false });
// displayUserSettings({});

// const apiResponse = {
//     data: {
//         user: {
//             profile: {
//                 settings: {
//                     language: "ru",
//                 },
//             },
//         },
//     },
// }
// const language = apiResponse?.data?.user?.profile?.settings?.language ?? "en";
// console.log("Язык: ", language);

// const emptyResponse = {};
// const defaultLanguage = emptyResponse?.data?.user?.profile?.settings?.language ?? "en";
// console.log("Язык по умолчанию: ", defaultLanguage);