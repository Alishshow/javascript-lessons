let money, time, a, b;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "50000");
    time = prompt("Введите дату в формате YYYY-MM-DD", "2018-10-12");
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "50000");
    }    
}  
start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let answerFirst = prompt("Введите обязательную статью расходов в этом месяце", ''),
            answerSecond = prompt("Во сколько обойдется?", '');
    
        if ( (typeof(answerFirst))=== 'string' && (typeof(answerFirst)) != null && (typeof(answerSecond)) != null && answerFirst != '' && answerSecond != '' && answerFirst.length < 50) {
            console.log("done");
            appData.expenses[i] = {
                answerFirst: answerSecond
                };
        } else {
            i = i--;
        }
    }
}
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel(number) {
    if(number < 100) {
        console.log("Минимальный уровень достатка");
    } else if (number > 100 && number < 2000) {
        console.log("Средний уровень достатка"); 
    } else if (number > 2000) {
        console.log("Высокий уровень достатка");    
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel(appData.moneyPerDay);

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses () {
    for (let i = 0; i < 3; i++) {
        let oexp = prompt("Статья необязательных расходов?", "");
        appData.optionalExpenses[i] = {[i+1]: oexp};
    }
}
chooseOptExpenses();