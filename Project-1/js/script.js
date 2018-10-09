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
let answer = prompt("Введите обязательную статью расходов в этом месяце", "Еда"),
    answer2 = prompt("Во сколько обойдется?", "20000");
    answer = prompt("Введите обязательную статью расходов в этом месяце", "Еда"),
    answer2 = prompt("Во сколько обойдется?", "200000");
let expenses = {
        1: answer,
        2: answer2
    };
    console.log(typeof(answer));
alert(money / 30);

