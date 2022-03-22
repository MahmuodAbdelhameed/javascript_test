let stars = document.getElementById('stars');
let moon = document.getElementById(' moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat6 = document.getElementById('boat');
let nouval = document.querySelector('.nouval');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
}