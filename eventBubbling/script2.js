var p = document.querySelector('#parent');

p.addEventListener('click', function () {
    console.log('parent clicked');
}, true);

var c = document.querySelector('#child');

c.addEventListener('click', function () {
    console.log('child clicked');
}, true);