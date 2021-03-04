const btnNav = document.querySelector('.btn-nav');
const contentDiv = document.querySelector('.content');
const mainBody = document.querySelector('body');
const mainHTML = document.querySelector('html');

btnNav.addEventListener('click', btnNavToggle);

function btnNavToggle() {
   btnNav.classList.toggle('toggle');
   contentDiv.classList.toggle('toggle');
   mainBody.classList.toggle('toggle');
   mainHTML.classList.toggle('toggle');
}