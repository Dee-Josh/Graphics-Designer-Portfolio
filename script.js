// DOM IMPLEMENTATION

const mobileNav = document.querySelector("nav.nav");
const bar = document.querySelector(".fa-bars");
const arrow = document.querySelector(".arrow");
const heroSection = document.querySelector(".hero-section-content")


bar.addEventListener("click", ()=>{
    bar.classList.toggle("fa-bars");
    bar.classList.toggle("fa-xmark");
    mobileNav.classList.toggle("open");
});


mobileNav.addEventListener("click", ()=>{
    mobileNav.classList.toggle("open");
    bar.classList.toggle("fa-xmark");
    bar.classList.toggle("fa-bars");
});

function isAtTheTop(element){
    const theContainer = element.getBoundingClientRect();
    return(
        theContainer.top >=0 && theContainer.left>=0 && theContainer.right<=(window.innerWidth || documentElement.clientWidth)
    );
}

setInterval(() => {
    if(!isAtTheTop(heroSection)){
        arrow.style.display = "flex";
    } else{
        arrow.style.display = "none";
    }
}, 100);

