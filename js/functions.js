function checkStringLength(str, maxLength) {
    return str.length <= maxLength;
}

// Пример использования:
var inputString = "Пример строки";
var maxLength = 10;

if (checkStringLength(inputString, maxLength)) {
    console.log("Строка подходит по длине");
} else {
    console.log("Строка слишком длинная");
}

function isPalindrome(str) {
    // Удаляем все пробелы из строки и приводим ее к нижнему регистру
    var formattedStr = str.replace(/\s/g, '').toLowerCase();
    // Создаем обратную версию строки
    var reversedStr = formattedStr.split('').reverse().join('');
    // Сравниваем исходную строку с обратной версией
    return formattedStr === reversedStr;
}

// Пример использования:
var exampleString1 = "А роза упала на лапу Азора";
var exampleString2 = "Привет, мир!";

console.log(isPalindrome(exampleString1)); // true
console.log(isPalindrome(exampleString2)); // false
