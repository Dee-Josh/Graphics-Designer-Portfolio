// DOM IMPLEMENTATION

const mobileNav = document.querySelector("nav.nav");
const bar = document.querySelector(".fa-bars");

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