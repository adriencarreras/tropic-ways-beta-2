


const burgerBtn = document.querySelector('.js-burger-btn')
burgerBtn.addEventListener('click', () => {
    document.querySelector('.js-extended').classList.add('open');
})





const header = document.querySelector(".js-header")

const toursNav = document.querySelector('.js-tours-nav')
const servicesNav = document.querySelector('.js-services-nav')
const infoNav = document.querySelector('.js-info-nav')

const toursDropdown = document.querySelector('.js-tours-dropdown')
const servicesDropdown = document.querySelector('.js-services-dropdown')
const infoDropdown = document.querySelector('.js-info-dropdown')

toursNav.addEventListener('click', () => {
    toursDropdown.classList.add('slide-in')
})

servicesNav.addEventListener('click', () => {
    servicesDropdown.classList.add('slide-in')
})



document.addEventListener('scroll', () => {
    
    if (window.scrollY > 50){
        header.classList.add('scrolled'),
        toursDropdown.classList.add('scrolled')
        servicesDropdown.classList.add('scrolled')
        infoDropdown.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')
        toursDropdown.classList.remove('scrolled')
        servicesDropdown.classList.remove('scrolled')
        infoDropdown.classList.remove('scrolled')
    }
})


// const triggerBtn = document.querySelector('.js-trigger')

// triggerBtn.addEventListener('click', () => {
//     header.classList.add('scrolled')
// })


