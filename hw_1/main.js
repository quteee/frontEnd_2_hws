var grade = Number(prompt("Оцените наше приложение от 1 до 10"))
if (grade>=5 && grade<=10) {
    alert("Спасибо за высокую оценку!")
} else if (grade<5) {
    alert("Мы работаем над улучшением сервиса!")
} else {
    alert("Ошибка")
}
var week = String(prompt("Choose RUS or ENG"))
if (week>='RUS') {
    alert(arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'])
}else if (week>='ENG') {
    alert(arr = ['mn', 'tu', 'wd', 'th', 'fr','st', 'sn'])
} else {
    alert("Error")
}

var days = String(prompt('Choose ENG or RUS'))
switch (days) {
    case 'RUS':
        alert(arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'])
        break
    case 'ENG':
        alert(arr = ['mn', 'tu', 'wd', 'th', 'fr', 'st', 'sn'])
        break
    default:
        alert('Error')
}