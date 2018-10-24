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
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка"); 
        } else if (appData.moneyperDay > 2000) {
            console.log("Высокий уровень достатка");    
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let oexp = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = oexp;
        }
    },
    chooseIncome: function() {
        let items = prompt('Спосообы доп. заработка. (Перечислите через запятую)', '');
        while(!isNaN(items) || items == "" || items == null) {
            items = prompt('Спосообы доп. заработка. (Перечислите через запятую)', '');
        }
        appData.income = items.split(', ');
        let itemsAdd = prompt('Может что-то еще?');
        while(!isNaN(itemsAdd) || itemsAdd == "" || itemsAdd == null) {
            itemsAdd = prompt('Может что-то еще?');
        }
        appData.income.push(itemsAdd);
        appData.income.sort();
        document.body.innerHTML += '<div style="font-size: 16px">Способы доп. заработка: </div>';
        appData.income.forEach(function(element, index) {
            document.body.innerHTML += '<div style="font-size: 16px">' + (index + 1) + ') ' + element + '</div>';
        });
    }
};
appData.chooseIncome();
for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + appData[key]);
}