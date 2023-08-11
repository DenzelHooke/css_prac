"use strict";
let message = 'hello';
const age = 21;
const sales = 102030;
const course = 'English';
let level;
function render(document) {
    console.log(document);
}
const values = [1, 2, 3, 4, 5];
const values_2 = [];
values_2.forEach((n) => n.toString());
const vals = ['1'];
const ages = [1];
const user = [10, 'John Doe'];
const mySize = 4;
const height = 4;
function calcTax(income, tax_year = 2022) {
    if (tax_year < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
console.log(calcTax(10000, 1950));
const employee = {
    id: 1,
    name: '',
    retire: (date) => {
        console.log(date);
    },
};
employee.name = 'Denzel';
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
let weight;
const textBox = {
    drag: () => { },
    resize: () => { },
};
//# sourceMappingURL=index.js.map