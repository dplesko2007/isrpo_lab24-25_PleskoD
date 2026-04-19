//lab25 task1
const order = {
    customer: "customer",
    shipping: "shipping",
    payment: "cash"
};
console.log(order?.customer);
console.log(order?.payment);
console.log(order?.shipping);

const value = 0 ?? "default";

function displayOrder(user) {
    console.log(`Покупатель: ${customer}`);
    console.log(`Доставка: ${shipping}`);
    console.log(`Оплата: ${payment}`);
}
//lab25 task2

