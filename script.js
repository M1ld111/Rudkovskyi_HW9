// Вивести на сторінку в один рядок через кому числа від 10 до 20.

const max1 = 20;
let str = '';
for (let i = 10; i <= max1; i++) {
    str = `${str + i}`;
    if (i !== max1) {
        str = `${str}, `;
    };
};
console.log(`Вивести на сторінку в один рядок через кому числа від 10 до 20 : ${str}`);

// Вивести квадрати чисел від 10 до 20.

const max2 = 20;
let square = '';
for (let i = 10; i <= max2; i++) {
    square += `${i * i}`;
    if (i !== max2) {
        square += ', '
    };
};
console.log(`Вивести квадрати чисел від 10 до 20 : ${square}`);


// Вивести таблицю множення на 7.

const num = 7;
const max3 = 10;
let mult = '';
for (let i = 1; i <= max3; i++) {
    mult = `${i * num}`;
    console.log(`Вивести таблицю множення на 7 : ${num} * ${i} = ${mult}`);
}
// Знайти суму всіх цілих чисел від 1 до 15.

let sum = 0;
const max4 = 15;
for (let i = 1; i <= max4; i++) {
    sum += i;
    
}
console.log(`Знайти суму всіх цілих чисел від 1 до 15 : ${sum}`);

// Знайти добуток усіх цілих чисел від 15 до 35.

let mult2 = 1;
const max5 = 35;
for (let i = 15; i <= max5; i++) {
    mult2 = mult2 * i;
    
}
console.log(`Знайти добуток усіх цілих чисел від 15 до 35 : ${mult2}`);

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let meanSum = 0;
let meanCount = 0;
const max6 = 500;
for (let i = 1; i <= 500; i++){
     meanCount++;
     meanSum += i;
} 
console.log(`Знайти середнє арифметичне всіх цілих чисел від 1 до 500 : ${meanSum / meanCount}`);


// Вивести суму лише парних чисел в діапазоні від 30 до 80.

let evenSum = 0;
const max7 = 80;
for (let i = 30; i <= max7; i++) {
    if (i % 2 === 0) {
        evenSum += i;
    }
    
}
console.log(`Вивести суму лише парних чисел в діапазоні від 30 до 80 : ${evenSum}`)

// Вивести всі числа в діапазоні від 100 до 200 кратні 3.

let num2 = '';
const max8 = 200;
for (let i = 100; i <= max8; i++) {
    if (i % 3 === 0) {
        num2 += `${i}`;
        num2 += ', ';
    }
    
}
console.log(`Вивести всі числа в діапазоні від 100 до 200 кратні 3 : ${num2}`)


// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// Визначити кількість його парних дільників.
// Знайти суму його парних дільників.


const natNum = +prompt('enter number');
let natCount = '';
let natEven = '';
let natEvenSum = 0;
for (let i = 1; i <= natNum; i++) {
    if (natNum % i ===0) {
        natCount += i;
        if (i % 2 === 0) {
            natEven++;
            natEvenSum += i;
        }
       if (i !== natNum) {
            natCount += ', '
        }
    }    
}
console.log(`Дано натуральне число "${natNum}". Всі його дільники : ${natCount}`)
console.log(`Дано натуральне число "${natNum}". Кількість його парних дільників : ${natEven}`)
console.log(`Дано натуральне число "${natNum}". Сума його парних дільників : ${natEvenSum}`)

// Надрукувати повну таблицю множення від 1 до 10.

const max9 = 10;
let calc = '0';
for (let i = 1; i <= max9; i++) {
    for (let j = 1; j <=max9; j++) {
        calc = `${i * j}`
        console.log(`таблиця множення ${i} * ${j} = ${calc}`)
    }
    
}