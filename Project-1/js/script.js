var money = +prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");
var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}
var answer = prompt("Введите обязательную статью расходов в этом месяце"),
    answer2 = prompt("Во сколько обойдется?");
    answer = prompt("Введите обязательную статью расходов в этом месяце");
    answer2 = prompt("Во сколько обойдется?");
    expenses = {
        1 : answer,
        2 : answer2
    }
alert(money / 30);