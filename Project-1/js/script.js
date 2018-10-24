'use strict';

let money = +prompt("Ваш бюджет на месяц?", "60000");
let time = prompt("Введите дату в формате YYYY-MM-DD", "2018-10-10");
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
alert(money / 30);
for (let i = 0; i < 2; i++) {
    let answerFirst = prompt("Введите обязательную статью расходов в этом месяце", ''),
        answerSecond = prompt("Во сколько обойдется?", '');
        
let expenses = {
        [i]: answerFirst,
        [i]: answerSecond
    };
console.log(expenses);
};