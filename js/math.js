export function square(number) {
    if (number<0) {
        console.log("Число не может быть отрицательным");
        return undefined;
    }
    return(number * number);
}
export function cube(number) {
    return (number * number* number);
}

export const E = 2.718;