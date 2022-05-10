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





















