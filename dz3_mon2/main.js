// Пункт 1
var one = Number(prompt('Введите первое число'))
var two = Number(prompt('Введите второе число'))
var func = (len, newLen) => {
    if (len > newLen) {
        console.log('Ваше число равно', newLen)
    } else if (len < newLen) {
        console.log('Ваше число равно', len)
    } else if (len === newLen) {
        console.log('Ваши числа ровны')
    } else {
        console.log('Вводите числа')
    }
}
func(one, two)



// Пункт 2

var score = prompt()
function len(score) {
    console.log(score.length)
}
len(score)

// Пункт 3

var calcOne = prompt('Введите цифру')
var calcTwo = prompt('Введите знак')
var calcTree = prompt('Введите цифру')
var calc = (lan, lans, newLans) => {
    if (lans === '/') {
        alert(lan / newLans)
    } else if (lans === '+') {
        alert(lan + newLans)
    } else if (lans === '-') {
        alert(lan - newLans)
    } else if (lans === '*') {
        alert(lan * newLans)
    } else if (lans === '/' && newLans === '0') {
        alert('Делить на ноль нельзя')
    }
}
calc(calcOne, calcTwo, calcTree)




