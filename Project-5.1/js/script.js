//Восстановить порядок в меню, добавить пятый пункт
let menu = document.querySelector('.menu')
menu.insertBefore(menu.children[2], menu.children[1]);
newMenu = document.createElement('li');
newMenu.classList.add('menu-item');
newMenu.innerHTML = 'Пятый пункт';
menu.insertBefore(newMenu, menu.children[4]);
// Готово

// Заменить картинку заднего фона на другую из папки img
document.body.style.background = 'url(../img/apple_true.jpg) center no-repeat';
document.body.style.backgroundSize = 'cover';
// Готово

// Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")
title.innerHTML = 'Мы продаем только подлинную технику Apple';
// Готово

// Удалить рекламу со страницы
let column = document.getElementsByClassName('column')[1],
    advert = document.querySelector('.adv');
column.removeChild(advert);
// Готово

// Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
let question,
    relation = document.getElementById('prompt');
function start() {
    question = prompt("Ваше отношение к технике Apple?", "Super");
    while(!isNaN(question) || question == "" || question == null) {
        question = prompt("Ваше отношение к технике Apple?", "Super");
    }
}
start();
relation.textContent = question;
// Готово