// ALL TOURS
const tours =  [
    {
        name: "ATV Cultural Ride",
        id: "atv",
        tags: ["local-tours", "cultural-animals", "easy"],
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus libero, nihil, quas quisquam cupiditate, omnis a esse sint assumenda fugit nostrum beatae. Voluptatem fuga ullam pariatur cum culpa vel harum saepe quaerat asperiores laborum praesentium delectus unde recusandae, doloribus et  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus libero, nihil, quas quisquam cupiditate, omnis a esse sint assumenda fugit nostrum beatae. Voluptatem fuga ullam pariatur cum culpa vel harum saepe quaerat asperiores laborum praesentium delectus unde recusandae, doloribus et??",
        price: "",
        rating: "",
        link: "/activities/atv.html",
        image: "/media/default-image.jpg"
    },
    {
        name: "Catamaran Tour",
        id: "catamaran",
        tags: ["local-tours", "sea", "relax", "none", "easy"],
        description: "",
        price: "",
        rating: "",
        link: "/activities/catamaran.html",
        image: "/media/default-image.jpg"
    },
    {
        name: "Horseback Riding",
        id: "horse-riding",
        tags: ["local-tours", "cultural-animals", "easy", "moderate"],
        description: "",
        price: "",
        rating: "",
        link: "/activities/horse.html",
        image: "/media/default-image.jpg"
    },
    {
        name: "Scuba Diving",
        id: "scuba-diving",
        tags: ["local-tours", "sea"],
        description: "",
        price: "",
        rating: "",
        link: "/activities/scuba.html",
        image: "/media/default-image.jpg"
    },
    {
        name: "Snorkeling",
        id: "snorkeling",
        tags: ["local-tours", "sea", "easy"],
        description: "",
        price: "",
        rating: "",
        link: "/activities/snorkeling.html",
        image: "/media/default-image.jpg"
    },
    {
        name: "Buenavista Family Adventure",
        id: "buenavista",
        tags: ["day-trips", "rainforest-waterfalls", "adrenaline", "relax", "none", "easy", "moderate", "hard"],
        description: "",
        price: "",
        rating: "",
        link: "/activities/buenavista.html",
        image: "/media/default-image.jpg"
    }, 
    {
        name: "Wild Canyon Adrenaline Combo",
        id: "canyon",
        tags: ["day-trips", "rainforest-waterfalls", "adrenaline", "moderate", "hard"],
        description: "",
        price: "",
        rating: "",
        link: "/activities/canyon.html",
        image: "/media/default-image.jpg"
    }
]


// Mobile Sidebar animation

const sidebarBtn = document.querySelector('.expand-sidebar')
const sidebarEl = document.querySelector('.sidebar');
let sidebarStatus = 'hidden'

sidebarBtn.addEventListener('click', () => {
    if(sidebarStatus === "hidden"){
        sidebarEl.classList.add('expanded');
        document.querySelector("body").style.overflow = "hidden";
        sidebarStatus = 'expanded';

        document.addEventListener('mouseup', onClickOutside)
    }
})

function onClickOutside(event){
    const withinBoundaries = event.composedPath().includes(sidebarEl)
    if (!withinBoundaries) {
    sidebarEl.classList.remove('expanded');
    document.querySelector("body").style.overflow = "scroll";
    sidebarStatus = 'hidden';
    document.removeEventListener('mouseup', onClickOutside);
    }
}


// FILTER SEARCH FUNCTIONALITY

const allFiltersBtn = document.querySelector('.all-filters-btn')
const NoFiltersBtn = document.querySelector('.no-filters-btn')
const checkboxes = document.querySelectorAll(".checkbox")
let filtersSelected = [];
let toursDisplayed = ['atv', 'horse-riding', 'catamaran', 'scuba-diving', 'snorkeling', 'buenavista', 'canyon'];


// Sidebar boxes animation

const boxEl = document.querySelectorAll('.js-box')

boxEl.forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('hidden')
    })
})


// select-all-filters button:
allFiltersBtn.addEventListener('click', () => {
    filtersSelected = [];
    checkboxes.forEach(box => {
        box.checked = true;
        filtersSelected.push(box.id);
    })
    
    filterTours();
})

// Deselect-all-filters button:
NoFiltersBtn.addEventListener('click', () => {
    filtersSelected = [];
    checkboxes.forEach(box => {
        box.checked = false;
    })
    
    filterTours();
})


// checkbox inputs 
checkboxes.forEach(boxClicked => {
    boxClicked.addEventListener('click', () => {
        // create array of filters
        filtersSelected = [];
        checkboxes.forEach(box => {
            box.checked ? filtersSelected.push(box.id)
            : null
        })
        filterTours();
    })
    
})

function filterTours(){
    // reset tours displayed
    toursDisplayed = [];

    // create array of tours based on filters
    filtersSelected.forEach(filter => {
        for (let i = 0; i < tours.length; i++){
            let tour = tours[i];
            if (tour.tags.includes(filter)){
                toursDisplayed.includes(tour.id)
                    ? console.log("duplicate")
                    : toursDisplayed.push(tour.id)
            }
        }
    })
    renderTourPage();
}


function renderTourPage(){
    let toursHTML = "";

    tours.forEach(tour => {
        if (toursDisplayed.includes(tour.id)){
            let tourhtml = `
            <a href="${tour.link}" class="tour">
                <div class="text-wrapper">

                    <div class="heading-row">
                        <p class="name">${tour.name}</p>
                            
                        <div class="rating">
                            
                        </div>
                    </div>

                    <!-- <div class="info"></div> -->

                    <div class="description">
                        <p>${tour.description}</p>
                    </div>

                    <div class="bottom-row">
                        <div class="from">From</div>
                        <div class="price-tag">
                            <i class="fa-solid fa-tag"></i>
                            <p>$${tour.price}</p>
                        </div>
                        
                    </div>

                </div>

                <div class="image">
                    <img src="${tour.image}" alt="">
                    <div class="bg-filter"></div>
                </div>
            </a>
            `;

            toursHTML += tourhtml;
        }
    })
        
    cardsContainer = document.querySelector(".main")
    
    if (toursDisplayed.length === 0){
        cardsContainer.innerHTML = 
        `<h3 class="warning">Adjust your search filters to find tours!</h3>`
    } else {
        cardsContainer.innerHTML = toursHTML
    }

}

renderTourPage();