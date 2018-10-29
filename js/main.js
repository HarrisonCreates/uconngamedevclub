var docBody = document.querySelector('.body');
var hamburger = document.querySelector('.hamburgerMenu');
var firstImg = document.querySelector('.welcomeImg');
var slideMenu = document.querySelector('.slideInMenu');
var closeButton = document.querySelector('.closeButton');

let bodyHeight = docBody.offsetHeight;

let bodyWidth = docBody.offsetWidth;

firstImg.setAttribute('src', 'https://via.placeholder.com/' + firstImg.width + 'x' + firstImg.height + '/333/888');

hamburger.addEventListener('click', function(){
  slideMenu.style.left = "0%";
});

closeButton.addEventListener('click', function(){
  slideMenu.style.left = "-100%";
});
