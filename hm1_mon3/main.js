const emailInput = document.querySelector('#emailInput')
const emailResult = document.querySelector('#emailResult')
const pass1Input = document.querySelector('#emailPas1')
const pass1Result = document.querySelector('#pass1Result')
const pass2Input = document.querySelector('#emailPas2')
const pass2Result = document.querySelector('#pass2Result')
const butOne = document.querySelector('#butOne')
const butTwo = document.querySelector('#butTwo')
const check = document.querySelector('.check')

const emailRegExp = /^\{2,8}\{@}\{2,6}$[0-9A-aZ-z]/g
const pass1RegExp = /\{4,16}[0-9A-aZ-z]/g
const pass2RegExp = /\{4,16}[0-9A-aZ-z]/g

butOne.onclick = function () {
    if (pass1Input.getAttribute('type') === 'password') {
        pass1Input.setAttribute('type', 'text');
    } else {
        pass1Input.setAttribute('type', 'password');
    }
}
butTwo.onclick = function () {
    if (pass2Input.getAttribute('type') === 'password') {
        pass2Input.setAttribute('type', 'text');
    } else {
        pass2Input.setAttribute('type', 'password');
    }
}
check.addEventListener('click', () => {
    if (emailRegExp.test(emailInput.value)) {
        emailResult.innerText = 'ok'
        emailResult.style.color = 'green'
    } else if (pass1RegExp.test(pass1Input.value)) {
        pass1Result.innerText = 'ok'
        pass1Result.style.color = 'green'
    } else if (pass2RegExp.test(pass2Input.value)) {
        pass2Result.innerText = 'ok'
        pass2Result.style.color = 'green'
    } else {
        emailResult.innerText = 'not ok'
        pass1Result.innerText = 'not ok'
        pass2Result.innerText = 'not ok'
        emailResult.style.color = 'red'
        pass1Result.style.color = 'red'
        pass2Result.style.color = 'red'
    }
})
check.addEventListener('click', () => {
    if  (pass1Input.value === pass2Input.value) {
        pass1Result.innerText = 'ok'
        pass1Result.style.color = 'green'
        pass2Result.innerText = 'ok'
        pass2Result.style.color = 'green'
    } else {
        pass1Result.innerText = 'not ok'
        pass1Result.style.color = 'red'
        pass2Result.innerText = 'not ok'
        pass2Result.style.color = 'red'
    }
})


let child = document.querySelector('.child')

function count (px) {
    if (px <= 450) {
        child.style.left = `${px}px`
        count(+10)
    }
}
const number = 50
count(number)

