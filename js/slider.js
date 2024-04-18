import noUiSlider from '/vendor/nouislider.min.js';


var scaleSlider = document.getElementById('scaleSlider');
var scaleInput = document.getElementById('scaleInput');


noUiSlider.create(scaleSlider, {
    start: 100,
    range: {
        'min': 50,
        'max': 200
    }
});


scaleSlider.noUiSlider.on('update', function(values, handle) {
    var scale = values[handle] / 100;
    scaleInput.value = scale;
});


document.getElementById('filterSelect').addEventListener('change', function() {
    
    scaleSlider.noUiSlider.set(100);
});
