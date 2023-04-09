        /* Contact Form send Mail */

var contactName = document.getElementById('name').value
var contactMailAdress = document.getElementById('mail').value
var contactMessage = document.getElementById('message').value



        /* Popup Window send Mail Confirmation */

let popup = document.getElementById('popup')

function openPopup(){
  popup.classList.add('open-popup')
}

function closePopup(){
  popup.classList.remove('open-popup')
}



        /* Hamburger Menu responsive Navigation */

const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav_link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }))