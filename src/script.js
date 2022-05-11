// Размеры гамбургера (size)
const SIZE_SMALL = {
    price: 50,
    calories: 20,
}
const SIZE_MEDIUM = {
    price: 75,
    calories: 30,
}
const SIZE_LARGE = {
    price: 100,
    calories: 40,
}

// Начинки (modifiers)
const CHEESE = {
    price: 10,
    calories: 20,
}
const SALAD = {
    price: 20,
    calories: 5,
}
const POTATO = {
    price: 15,
    calories: 10,
}
const SPRINKLE_SEASONING = {
    price: 15,
    calories: 0,
}
const TOPPING_MAYO = {
    price: 20,
    calories: 5,
}

// Функция-конструктор Hamburger
function Hamburger(size) {
    this.price = size.price;
    this.calories = size.calories;

    this.addModifier = function(modifier){
        this.price += modifier.price;
        this.calories += modifier.calories;
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