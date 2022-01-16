//bugermenu
const menuBar = document.querySelector('.burger-menu');
const menuBox = document.querySelector('.menubox');
const visible = () => {
    menuBar.classList.toggle('visible');
    menuBox.classList.toggle('visible');
}
menuBar.addEventListener('click', visible)