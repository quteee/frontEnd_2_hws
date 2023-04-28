class Cars {
    constructor(options) {
        this.model = options.model
        this.color = options.color
        this.wheels = options.wheels
    }
    start () {
        return console.log('Машина заведена')
    }
}

class CarOne extends Cars {
    constructor(options) {
        super(options);
        this.lights = options.lights
    }
}

class CarTwo extends Cars {
    constructor(options) {
        super(options);
        this.seats = options.seats
    }
}
class CarThree extends Cars {
    constructor(options) {
        super(options);
        this.engine = options.engine
    }
}

const carOne = new CarOne({
    model: 'BMW',
    color: 'white',
    wheels: 3,
    lights: 2
})
console.log(carOne)
carOne.start()

const carTwo = new CarTwo({
    model: 'Bugatti',
    color: 'black',
    wheels: 4,
    seats: 2
})
console.log(carTwo)
carTwo.start()

const carThree = new CarThree({
    model: 'Zhiguli',
    color: 'blue',
    wheels: 1,
    engine: 'BA3-21-13'
})
console.log(carThree)
carThree.start()

class Component {
    constructor(selector) {
        this.$element = document.querySelector(selector)
    }
}

class Red extends Component {
    constructor(options) {
        super(options.selector);
        this.$element.style.width = this.$element.style.height = options.size + 'px'
        this.$element.style.background = options.bgColor
        this.$element.style.borderRadius = options.r + '%'
    }
}

class Yellow extends Red {
    constructor(options) {
        super(options);
    }
}

class Green extends Red {
    constructor(options) {
        super(options);
    }
}

const color = prompt('Введите цвет')
if (color === 'Красный') {
    const red = new Red({
        selector: '#red',
        size: 200,
        bgColor: 'red',
        r: 50
    })
} else  if (color === 'Желтый') {
    const yellow = new Yellow({
        selector: '#yellow',
        size: 200,
        bgColor: 'yellow',
        r: 50
    })
} else if (color === 'Зеленый') {
    const green = new Green({
        selector: '#green',
        size: 200,
        bgColor: 'green',
        r: 50
    })
} else {
    alert('Вводите цвета')
}




