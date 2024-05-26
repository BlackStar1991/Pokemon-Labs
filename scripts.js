let prev = document.querySelector('.prev');
let next = document.querySelector('.next');


next.addEventListener("click", function () {
    let items = document.querySelectorAll('.slider_item');
    document.querySelector('.slider_list').appendChild(items[0]);

});

prev.addEventListener("click", function () {
    let items = document.querySelectorAll('.slider_item');
    document.querySelector('.slider_list').prepend(items[items.length - 1]);

});