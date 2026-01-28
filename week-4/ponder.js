const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('#menu')

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    document.querySelector('.bar1').classList.toggle('active')
    document.querySelector('.bar2').classList.toggle('active')
    document.querySelector('.bar3').classList.toggle('active')
})