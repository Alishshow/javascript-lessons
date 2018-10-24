let money = +prompt("Ваш бюджет на месяц?", "50000");
let time = prompt("Введите дату в формате YYYY-MM-DD", "2018-10-10");

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

for (let i = 0; i < 2; i++) {
    let answerFirst = prompt("Введите обязательную статью расходов в этом месяце", ''),
        answerSecond = prompt("Во сколько обойдется?", '');

    if ( (typeof(answerFirst))=== 'string' && (typeof(answerFirst)) != null && (typeof(answerSecond)) != null && answerFirst != '' && answerSecond != '' && answerFirst.length < 50) {
        console.log("done");
        appData.expenses[i] = {
            answerFirst: answerSecond
            };
    } else {

    }
}

// let i = 0
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');
//     i++;
//     if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
//         && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {

//     }
// };

// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');
//     i++;
//     if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
//         && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {

//     }
// } while (i < 2);

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка"); 
} else if (appData.moneyperDay > 2000) {
    console.log("Высокий уровень достатка");    
} else {
    console.log("Произошла ошибка");
}
