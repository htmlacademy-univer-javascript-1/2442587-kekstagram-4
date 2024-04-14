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

function isMeetingWithinWorkHours(workStart, workEnd, meetingStart, durationMinutes) {
    // Функция для преобразования времени в формате "часы:минуты" в количество минут с начала дня
    // Корректно обрабатывает форматы "HH:MM", "H:M", "HH:M", "H:MM"
    function timeToMinutes(time) {
        const [hours, minutes] = time.split(":").map(Number); // Преобразует "08" и "8" к числу 8, "05" и "5" к 5
        return hours * 60 + minutes;
    }

    // Конвертируем время начала и окончания рабочего дня в минуты
    const workStartMinutes = timeToMinutes(workStart);
    const workEndMinutes = timeToMinutes(workEnd);

    // Конвертируем время начала встречи в минуты и вычисляем время окончания встречи
    const meetingStartMinutes = timeToMinutes(meetingStart);
    const meetingEndMinutes = meetingStartMinutes + durationMinutes;

    // Проверяем, что встреча начинается и заканчивается в рабочее время
    return meetingStartMinutes >= workStartMinutes && meetingEndMinutes <= workEndMinutes;
}

// Примеры использования
console.log(isMeetingWithinWorkHours("09:00", "17:00", "10:00", 30)); // true
console.log(isMeetingWithinWorkHours("9:0", "17:00", "16:45", 15)); // true
console.log(isMeetingWithinWorkHours("09:00", "17:0", "16:5", 10)); // false, встреча заканчивается после рабочего времени
console.log(isMeetingWithinWorkHours("9:00", "17:00", "8:59", 1)); // false, встреча начинается до начала рабочего дня

