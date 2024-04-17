var picturesContainer = document.querySelector('.pictures');
var pictureTemplate = document.getElementById('picture-template').content;

var tempData = [
        { id: 1, url: 'photo1.jpg', description: 'Закат на море', likes: 120, comments: 5 },
        { id: 2, url: 'photo2.jpg', description: 'Горный пейзаж', likes: 90, comments: 10 },
	{ id: 3, url: 'photo3.jpg', description: 'Цветущее поле', likes: 150, comments: 20 },
];

var renderPhotos = (photos) => {
        var fragment = document.createDocumentFragment();

        photos.forEach(photo => {
            var photoElement = pictureTemplate.cloneNode(true);
            photoElement.querySelector('.picture__image').src = photo.url;
            photoElement.querySelector('.picture__image').alt = photo.description;
            photoElement.querySelector('.picture__likes').textContent = photo.likes;
            photoElement.querySelector('.picture__comments').textContent = photo.comments;
            fragment.appendChild(photoElement);
        });

        picturesContainer.appendChild(fragment);
};

renderPhotos(tempData);
