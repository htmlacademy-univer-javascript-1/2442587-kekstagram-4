// Генерация случайного числа в заданном диапазоне
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для создания комментария
function createComment(id) {
    const messages = [
        "Всё отлично!",
        "В целом всё неплохо. Но не всё.",
        "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
        "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
        "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
        "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"
    ];
    const names = ["Артём", "Мария", "Иван", "Светлана", "Алексей", "Дарья"];
    return {
        id: id,
        avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
        message: messages[getRandomInt(0, messages.length - 1)],
        name: names[getRandomInt(0, names.length - 1)]
    };
}

// Функция для создания массива фотографий
function createPhotos() {
    const photos = [];
    let commentId = 0;

    for (let i = 1; i <= 25; i++) {
        const comments = [];
        const numComments = getRandomInt(0, 30);
        for (let j = 0; j < numComments; j++) {
            comments.push(createComment(++commentId));
        }

        photos.push({
            id: i,
            url: `photos/${i}.jpg`,
            description: "Описание фотографии " + i,
            likes: getRandomInt(15, 200),
            comments: comments
        });
    }

    return photos;
}

// Создаем массив фотографий и выводим в консоль
const photosArray = createPhotos();
console.log(photosArray);
