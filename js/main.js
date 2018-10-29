var docBody = document.querySelector('.body');

var firstImg = document.querySelector('.welcomeImg');

let bodyHeight = docBody.offsetHeight;

let bodyWidth = docBody.offsetWidth;

firstImg.setAttribute('src', 'https://via.placeholder.com/' + firstImg.width + 'x' + firstImg.height + '/333/888');
