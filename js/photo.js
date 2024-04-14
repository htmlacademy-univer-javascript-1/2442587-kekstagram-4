import { getRandomInt } from './randomUtils.js';
import { createComment } from './comment.js';

export function createPhotos() {
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
