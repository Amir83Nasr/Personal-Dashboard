const menuOpen = document.getElementById('menu-open')
const menuOpenI = document.getElementById('menu-open-i')
const menuClose = document.getElementById('menu-close')
const sideBar = document.querySelector('.container .left-section')
const sideBarItems = document.querySelectorAll('.container .left-section .sidebar .item')
const bell = document.querySelector('.container .right-section .top i')

menuOpen.addEventListener('click', () => {
    sideBar.style.top = '0'
    sideBar.style.zIndex = '1'

    bell.style.zIndex = '-1'
})


menuClose.addEventListener('click', () => {
    sideBar.style.top = '-60vh'
    bell.style.zIndex = '0'
})


document.addEventListener('click', e => {
    if (!sideBar.contains(e.target) && ((e.target !== menuOpen) && (e.target !== menuOpenI))) {
        sideBar.style.top = '-60vh'
        bell.style.zIndex = '0'
    }
})


let activeItem = sideBarItems[0]

sideBarItems.forEach(element => {
    element.addEventListener('click', () => {
        if (activeItem) activeItem.removeAttribute('id')

        element.setAttribute('id', 'active')
        activeItem = element
    })
})



bell.addEventListener('click', () => {
    if (bell.id === 'ring') bell.removeAttribute('id')
    else bell.setAttribute('id', 'ring')
})



let icon = document.getElementById("icon")

icon.addEventListener('click', () => {
    document.body.classList.toggle("dark-theme")

    if (document.body.classList.contains("dark-theme")) icon.className = "bx bxs-moon"
    else icon.className = "bx bxs-sun"
})