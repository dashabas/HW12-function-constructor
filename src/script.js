// Первый вариант реализации
console.log('--------#1')

// Размер гамбургера (size)
const SIZE_SMALL = 'small';
const SIZE_MEDIUM = 'medium';
const SIZE_LARGE = 'large';

// Начинки (modifier)
const CHEESE = 'cheese';
const SALAD = 'salad';
const POTATO = 'potato';
const SPRINKLE_SEASONING = 'sprinkle seasoning';
const TOPPING_MAYO = 'topping mayo';

// Функция-конструктор Hamburger
function Hamburger(size) {
    this.price = 0;
    this.calories = 0;

    switch (size) {
        case 'small':
            this.price += 50;
            this.calories += 20;
            break;
        case 'medium':
            this.price += 75;
            this.calories += 30;
            break;
        case 'large':
            this.price += 100;
            this.calories += 40;
            break;
    }

    this.addModifier = function(modifier) {
        switch (modifier) {
            case 'cheese':
                this.price += 10;
                this.calories += 20;
                break;
            case 'salad':
                this.price += 20;
                this.calories += 5;
                break;
            case 'potato':
                this.price += 15;
                this.calories += 10;
                break;
            case 'sprinkle seasoning':
                this.price += 15;
                this.calories += 0;
                break;
            case 'topping mayo':
                this.price += 20;
                this.calories += 5;
                break;
        }
    }

    this.getPrice = function() {
        return this.price;
    }

    this.getCalories = function() {
        return this.calories;
    }
}

const hamburger = new Hamburger(SIZE_SMALL);

// добавляем добавки
hamburger.addModifier(TOPPING_MAYO);
hamburger.addModifier(POTATO);

// вывод результата
console.log('Price with sauce: ' + hamburger.getPrice());
console.log('Calories with sauce: ' + hamburger.getCalories());



// Второй вариант реализации
console.log('--------#2')

// Размер гамбургера (size)
const SIZE_SMALL1 = {
    price: 50,
    calories: 20,
}

const SIZE_MEDIUM1 = {
    price: 75,
    calories: 30,
}
const SIZE_LARGE1 = {
    price: 100,
    calories: 40,
}

// Начинки (modifier)
const CHEESE1 = {
    price: 10,
    calories: 20,
}
const SALAD1 = {
    price: 20,
    calories: 5,
}
const POTATO1 = {
    price: 15,
    calories: 10,
}
const SPRINKLE_SEASONING1 = {
    price: 15,
    calories: 0,
}
const TOPPING_MAYO1 = {
    price: 20,
    calories: 5,
}

// Функция-конструктор Hamburger
function Hamburger1(size) {
    this.price = size.price;
    this.calories =size.calories;

    this.addModifier1 = function(modifier){
        this.price += modifier.price;
        this.calories += modifier.calories;
    }

    this.getPrice1 = function() {
        return this.price;
    }

    this.getCalories1 = function() {
        return this.calories;
    }
}

const hamburger1 = new Hamburger1(SIZE_SMALL1);

// добавляем добавки
hamburger1.addModifier1(TOPPING_MAYO1);
hamburger1.addModifier1(POTATO1);

// вывод результата
console.log('Price with sauce: ' + hamburger1.getPrice1());
console.log('Calories with sauce: ' + hamburger1.getCalories1());



// Третий вариант реализации (сама функция-конструткор аналогична второму варианту)
console.log('--------#3')

// Размеры бургера
const burgerSizes = {
    SIZE_SMALL: {price: 50, calories: 20},
    SIZE_MEDIUM: {price: 75, calories: 30},
    SIZE_LARGE: {price: 100, calories: 40}
}

// Начинки
const modifiers = {
    CHEESE: {price: 10, calories: 20},
    SALAD: {price: 20, calories: 5},
    POTATO: {price: 15, calories: 10},
    SPRINKLE_SEASONING: {price: 15, calories: 0},
    TOPPING_MAYO: {price: 20, calories: 5}
}

// Функция-конструктор Hamburger
function Hamburger2(size) {
    this.price = size.price;
    this.calories = size.calories;

    this.addModifier2 = function(modifier){
        this.price += modifier.price;
        this.calories += modifier.calories;
    }

    this.getPrice2 = function() {
        return this.price;
    }

    this.getCalories2 = function() {
        return this.calories;
    }
}

const hamburger2 = new Hamburger2(burgerSizes.SIZE_SMALL);

// добавляем добавки
hamburger2.addModifier2(modifiers.TOPPING_MAYO);
hamburger2.addModifier2(modifiers.POTATO);

// вывод результата
console.log('Price with sauce: ' + hamburger2.getPrice2());
console.log('Calories with sauce: ' + hamburger2.getCalories2());