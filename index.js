const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#btn-menu")
const closeBtn = document.querySelector("#btn-close")
const themeToggle = document.querySelector(".theme-toggle")
const menuItems = document.querySelectorAll(".menu-item")


menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables')

    themeToggle.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggle.querySelector('span:nth-child(2)').classList.toggle('active');
})

const quitarActive = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        quitarActive();
        item.classList.add('active');
    });
})
