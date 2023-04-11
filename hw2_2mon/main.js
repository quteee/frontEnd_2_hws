let arr = [10, 20, 30, 40, 50, 235, 1200]
for (i=0; i<arr.length; i++) {
    b = String(arr[i])
    if (b[0]==1 || b[0]==2 || b[0]==5) {
        console.log(arr[i])
    }
}


var arrNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
arrNumbers.reverse()
for (var number of arrNumbers) {
    console.log(number)
}
// 2 вариант
// var arrNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// arrNumbers.reverse()
// console.log(arrNumbers)

var obj = {
    red: 'Красный',
    yellow: 'Желтый',
    green: 'Зеленый'
}
var colors = String(prompt('Вводите цвета'))

if ( colors >= obj.red) {
    alert('Стоп')
} else if (colors >= obj.green) {
    alert('Идите')
} else if (colors >= obj.yellow) {
    alert('Ждите')
} else {
    alert('Вводите цвета')
}


for (var i = 0; i<=10; i++) {
    console.log(i)
}