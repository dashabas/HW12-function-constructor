// Размеры гамбургера (size)
const SIZE_SMALL = {name: 'small burger', price: 50, calories: 20};
const SIZE_MEDIUM = {name: 'medium burger', price: 75, calories: 30};
const SIZE_LARGE = {name: 'large burger', price: 100, calories: 40};

// Начинки (modifiers)
const CHEESE = {name: 'cheese', price: 10, calories: 20};
const SALAD = {name: 'salad', price: 20, calories: 5};
const POTATO = {name: 'potato', price: 15, calories: 10};
const SPRINKLE_SEASONING = {name: 'sprinkle seasoning', price: 15, calories: 0};
const TOPPING_MAYO = {name: 'topping mayo', price: 20, calories: 5};

// Функция-конструктор Hamburger
function Hamburger(size) {
    this.size = size;
    this.price = this.size.price;
    this.calories = this.size.calories;
    this.modifiers = [];

    this.addModifier = function(modifier){
        this.price += modifier.price;
        this.calories += modifier.calories;
        this.modifiers.push(modifier);
    }

    this.getPrice = function() {
        return this.price
    }

    this.getCalories = function() {
        return this.calories;
    }
}

const hamburger = new Hamburger(SIZE_SMALL);

// добавляем добавки
hamburger.addModifier(TOPPING_MAYO);
hamburger.addModifier(POTATO);

// // вывод результата
console.log('Price with sauce: ' + hamburger.getPrice());
console.log('Calories with sauce: ' + hamburger.getCalories());