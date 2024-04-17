var picturesContainer = document.querySelector('.pictures');
var bigPicture = document.querySelector('.big-picture');
var bigImg = bigPicture.querySelector('.big-picture__img img');
var likesCount = bigPicture.querySelector('.likes-count');
var commentsCount = bigPicture.querySelector('.comments-count');
var socialComments = bigPicture.querySelector('.social__comments');
var socialCaption = bigPicture.querySelector('.social__caption');
var closeButton = bigPicture.querySelector('.big-picture__cancel');

var renderBigPicture = function(photo) {
    bigImg.src = photo.url;
    likesCount.textContent = `Нравится: ${photo.likes}`;
    commentsCount.textContent = `Комментарии: ${photo.comments.length}`;
    socialCaption.textContent = photo.description;

    socialComments.innerHTML = '';
    photo.comments.forEach(function(comment) {
        var commentElement = document.createElement('li');
        commentElement.className = 'social__comment';
        commentElement.innerHTML = `
            <img class="social__picture" src="${comment.avatar}" alt="${comment.name}" width="35" height="35">
            <p class="social__text">${comment.text}</p>
        `;
        socialComments.appendChild(commentElement);
    });

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
