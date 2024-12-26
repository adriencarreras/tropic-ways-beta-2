const headerBG = document.querySelector('.js-header-black-bg')
const header = document.querySelector(".js-header")

const navLinks = document.querySelectorAll('.js-nav-link')
const dropdownCont = document.querySelector('.js-dropdown-container')
const dropdownText = document.querySelectorAll('.js-dropdown-text')
const mobileReturnBtn = document.querySelector('.js-mobile-return-btn')

const modal = document.querySelector('.js-modal');
const modalBtns = document.querySelectorAll('.modal-btn')
const modalBG = document.querySelector('.js-modal-black-bg')

const faqs = document.querySelectorAll('.js-faq')

let lastLinkClicked;

let burgerStatus = "close";


// Detect scroll to change padding and color of header
document.addEventListener('scroll', () => {
    
    if (window.scrollY > 50){
        header.classList.add('scrolled')
        dropdownCont.classList.add('scrolled')

    } else {
        header.classList.remove('scrolled')
        dropdownCont.classList.remove('scrolled')
    }
    changeHeaderBg()
})


// dropdown menu
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        let linkClicked = link.dataset.id
        
        navLinks.forEach(l => {l.classList.remove('underline')}) // reset previous underline
        
        if (linkClicked === lastLinkClicked){   // if same navLink is clicked twice
            closeDropdown()
        } else {
            dropdownCont.classList.add('show');
            headerBG.style.display = "block";
            changeHeaderBg()

            link.classList.add('underline');
            showText(linkClicked)

            lastLinkClicked = linkClicked;
        }
        
        // CLOSE DROPDOWN if same user clicks outside of the dropdown, on the header background.
        document.addEventListener("click", (event) => {
            const elementUnderClick = document.elementFromPoint(event.clientX, event.clientY);
            if (elementUnderClick === headerBG){
                closeDropdown()
            }
          });
    })
})

function changeHeaderBg(){

    if (window.scrollY > 50 || dropdownCont.classList.contains('show') || burgerStatus === "open") {
        header.classList.add('dark');
    }

    else  {
        header.classList.remove('dark');
    }
}

function showText(section){
    dropdownText.forEach(dropdown => {
        dropdown.classList.remove('show')  // reset previous show

        // setTimeout() --------------------------- code this to 500ms
        if (dropdown.dataset.id == section){
            dropdown.classList.add('show')
        }
    })    
}

function closeDropdown(){
    // hide and reset dropdown
    dropdownCont.classList.remove('show');
    dropdownText.forEach(dropdown => {
        dropdown.classList.remove('show')  // reset previous show
    })
    navLinks.forEach(l => {l.classList.remove('underline')}) // reset previous underline
    headerBG.style.display = "none";
    lastLinkClicked = undefined;

    changeHeaderBg()
}


const burgerBtn = document.querySelector('.js-burger-btn')

burgerBtn.addEventListener('click', () => {
    if (burgerStatus === "close"){
        document.querySelector('.js-extended').classList.add('open');
        burgerBtn.classList.add('close')

        burgerStatus = "open";
    
    } else { // if burger is open
        document.querySelector('.js-extended').classList.remove('open');
        burgerBtn.classList.remove('close')

        burgerStatus = "close"
    }        

    changeHeaderBg()
})


mobileReturnBtn.addEventListener('click', () => {
    closeDropdown();
})



// Modal animation
modalBtns.forEach(btn => {
    btn.addEventListener('click', () => {

        modal.style.display = "block";
        modalBG.style.display = "block";
        document.querySelector("body").style.overflow = "hidden";
        
        // close modal button
        modal.querySelector('.close').addEventListener('click', () => {
            modal.style.display = "none";
            modalBG.style.display = "none";
           document.querySelector("body").style.overflow = "scroll";
        })

    })
})


// FAQs animation

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faqs.forEach(f => {
            f.classList.remove('active')
        })
        faq.classList.toggle('active')
    })
})