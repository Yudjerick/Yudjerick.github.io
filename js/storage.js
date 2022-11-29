var matchPairs = {"animals":[{"eng":"Badger","ru":"Барсук"},
{"eng":"Mole","ru":"Крот"},
{"eng":"Bull","ru":"Бык"},
{"eng":"Donkey","ru":"Осел"},
{"eng":"Seal","ru":"Тюлень"},
{"eng":"Camel","ru":"Верблюд"},
{"eng":"Boar","ru":"Кабан"},
{"eng":"Elk","ru":"Лось"},
{"eng":"Deer","ru":"Олень"},
{"eng":"Racoon","ru":"Енот"},
{"eng":"Rhinoceros","ru":"Носорог"},
{"eng":"Lizard","ru":"Ящерица"},
{"eng":"Dragonfly","ru":"Стрекоза"},
{"eng":"Wasp","ru":"Оса"},
{"eng":"Hornet","ru":"Шершень"},
{"eng":"Ostrich","ru":"Страус"},
{"eng":"Elephant","ru":"Слон"}],
"psyhology":
[{"eng":"Passion","ru":"Страсть"},
{"eng":"Temptation","ru":"Искушение"},
{"eng":"Sorrow","ru":"Печаль"},
{"eng":"Envy","ru":"Зависть"},
{"eng":"Pride","ru":"Гордость"},
{"eng":"Anxiety","ru":"Тревожность"},
{"eng":"Addiction","ru":"Зависимость"},
{"eng":"Behavior","ru":"Поведение"},
{"eng":"Attention","ru":"Внимание"},
{"eng":"Obedience","ru":"Послушание"},
{"eng":"Embarrassment","ru":"Смущение"},
{"eng":"Fear","ru":"Страх"},
{"eng":"Conscience","ru":"Совесть"}]}

let orderSentences = ["Have you ever been in Paris?", "He seems to be confused by what just happened.","I had my hair cut yesterday.",
"I was doing my homework when I heard you singing.","The future belongs to those, who believe in beauty of their dreams.","When inspiration does not come to me, I go halfway to meet it.",
"Illusion is the first of all pleasures.","All we have to decide is what to do with the time that is given to us.","Choose a job you love, and you will never have to work a day in your life.","In the middle of difficulty lies opportunity.",
];
var orderTasks = [];
for (const i of orderSentences) {
    orderTasks.push(i.split(' '))
}
window.localStorage.setItem('matchPairs', JSON.stringify(matchPairs))
window.localStorage.setItem('orderTasks', JSON.stringify(orderTasks))
