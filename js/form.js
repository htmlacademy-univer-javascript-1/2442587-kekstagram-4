import Pristine from '/vendor/pristine.min.js';


var form = new Pristine(document.getElementById('imageForm'));


document.getElementById('imageForm').addEventListener('submit', function(event) {

    if (!form.validate()) {
        event.preventDefault();
    }
});


document.getElementById('hashtagsInput').addEventListener('input', function() {
    form.validate(); 
});

document.getElementById('commentInput').addEventListener('input', function() {
    form.validate();
});


var imageForm = document.getElementById('imageForm');
var imageInput = document.getElementById('imageInput');


function closeForm() {
    imageForm.reset();
    imageInput.value = '';

}

document.getElementById('closeButton').addEventListener('click', function() {
    closeForm();
});

