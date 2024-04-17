var picturesContainer = document.querySelector('.pictures');
var bigPicture = document.querySelector('.big-picture');
var bigImg = bigPicture.querySelector('.big-picture__img img');
var likesCount = bigPicture.querySelector('.likes-count');
var commentsCount = bigPicture.querySelector('.comments-count');
var socialComments = bigPicture.querySelector('.social__comments');
var socialCaption = bigPicture.querySelector('.social__caption');
var closeButton = bigPicture.querySelector('.big-picture__cancel');
var commentCountBlock = bigPicture.querySelector('.social__comment-count');
var commentsLoader = bigPicture.querySelector('.comments-loader');

var displayedComments = 5; // Количество показываемых комментариев изначально

var renderComments = function(photo) {
    var commentsToShow = photo.comments.slice(0, displayedComments); // Получаем первые 5 комментариев или меньше, если их меньше
    socialComments.innerHTML = ''; // Очищаем контейнер для комментариев
    commentsToShow.forEach(function(comment) {
        var commentElement = document.createElement('li');
        commentElement.className = 'social__comment';
        commentElement.innerHTML = `
            <img class="social__picture" src="${comment.avatar}" alt="${comment.name}" width="35" height="35">
            <p class="social__text">${comment.text}</p>
        `;
        socialComments.appendChild(commentElement);
    });

    // Обновляем счетчик показанных комментариев
    commentCountBlock.textContent = `${displayedComments} из ${photo.comments.length}`;

    // Если количество показанных комментариев меньше общего числа комментариев, показываем кнопку "Загрузить ещё"
    if (displayedComments < photo.comments.length) {
        commentsLoader.classList.remove('hidden');
    } else {
        commentsLoader.classList.add('hidden');
    }
};

var loadMoreComments = function(photo) {
    displayedComments += 5; // Увеличиваем количество показываемых комментариев на 5
    renderComments(photo); // Перерисовываем комментарии
};

var renderBigPicture = function(photo) {
    bigImg.src = photo.url;
    likesCount.textContent = `Нравится: ${photo.likes}`;
    commentsCount.textContent = `Комментарии: ${photo.comments.length}`;
    socialCaption.textContent = photo.description;

    renderComments(photo); // Вызываем функцию для отображения комментариев

    document.body.classList.add('modal-open');
    bigPicture.classList.remove('hidden');
};

picturesContainer.addEventListener('click', function(e) {
    if (e.target.closest('.picture')) {
        var photoId = e.target.closest('.picture').dataset.id;
        var photoData = tempData.find(function(p) { return p.id === parseInt(photoId); });
        renderBigPicture(photoData);
    }
});

var closeBigPicture = function() {
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
};

closeButton.addEventListener('click', closeBigPicture);
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeBigPicture();
    }
});

commentsLoader.addEventListener('click', function() { loadMoreComments(currentPhotoData); });
