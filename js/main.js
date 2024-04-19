import { createPhotos } from './photo.js';
import { fetchData, postData } from './api.js';


document.addEventListener('DOMContentLoaded', async () => {
  try {
    const data = await fetchData();

    renderPhotos(data);
  } catch (error) {
    console.error('Failed to load initial data:', error);

  }
});

const form = document.querySelector('#your-form-id');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  try {
    const response = await postData(formData);
    console.log('Server response:', response);

    form.reset();
    alert('Data submitted successfully!');
  } catch (error) {
    console.error('Failed to submit form:', error);

    alert('Failed to submit data.');
  }
});

const closeButton = document.querySelector('#your-close-button-id');
closeButton.addEventListener('click', () => {
  form.reset();

  form.classList.remove('visible');
});

const photosArray = createPhotos();
console.log(photosArray);
