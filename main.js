/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/

const openMenu = document.getElementById('openMenu');
const navMenu = document.getElementById('nav-menu');
const closeMenu = document.getElementById('closeMenu');
const navLink = document.querySelectorAll('.nav-link');
openMenu.addEventListener('click' ,()=>{
navMenu.classList.remove('hidden'); 
});
closeMenu.addEventListener('click' , ()=>{
    navMenu.classList.add('hidden');
});

navLink.forEach(link =>
    link.addEventListener('click' , ()=>
    navMenu.classList.add('hidden'))
    )

    /*~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~*/

const tabs =document.querySelectorAll('.tabs-wrap ul li');
const all =document.querySelectorAll('.item-wrap');
const food =document.querySelectorAll('.food');
const snack =document.querySelectorAll('.snack');
const bevarage =document.querySelectorAll('.bevarage');

tabs.forEach(tab =>{
    tab.addEventListener('click',()=>{
        tabs.forEach(tab=>{
            tab.classList.remove("active") 
        })
        tab.classList.add("active")

        const tabVal=tab.getAttribute('data-tab');

        all.forEach(item =>{
            item.style.display ='none'
        })
        if(tabVal=='food'){
            food.forEach(item =>{
                item.style.display ='block'
            })
        }
        else if (tabVal=='snack'){
            snack.forEach(item =>{
                item.style.display ='block'
            })
        }
        else if (tabVal=='bevarage'){
            bevarage.forEach(item =>{
                item.style.display ='block'
            })
        }
       else {
        all.forEach(item =>{
            item.style.display ='block'
        })
       }    
    })
})


// /*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
const scrollUp =()=>{
    const scrollUpBtn=document.getElementById('scroll-up');
    if(this.scrollY>=250){
        scrollUpBtn.classList.remove('-bottom-1/2');
        scrollUpBtn.classList.add('bottom-4');
    }
    else{
        scrollUpBtn.classList.add('-bottom-1/2');
        scrollUpBtn.classList.remove('bottom-4');
    }
}
/*~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~*/
window.addEventListener('scroll',scrollUp);
const html =document.querySelector("html");
const ThemeBtn =document.getElementById("theme-toggle");
if(localStorage.getItem("mode")=="dark"){
   DarkMode();
} else{
    LightMode();
}

ThemeBtn.addEventListener("click" ,(e)=>{
    if(localStorage.getItem("mode")=="light"){

        DarkMode();
    } else{
        LightMode();
    }
})

function DarkMode(){
    html.classList.add("dark");
    ThemeBtn.classList.replace("ri-moon-line","ri-sun-line");
    localStorage.setItem("mode","dark");
}
function LightMode(){
    html.classList.remove("dark");
    ThemeBtn.classList.replace("ri-sun-line","ri-moon-line");
    localStorage.setItem("mode","light");
}



/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/
const scrollHeader =()=>{
    const Header=document.getElementById('header');
    if(window.scrollY>=50){
        Header.classList.add("border-b","border-SecondaryColor");
    }
    else{
        Header.classList.remove("border-b","border-SecondaryColor");
    }
}
window.addEventListener('scroll',scrollHeader);

/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/
const ActiveLink =()=>{
    const sections =document.querySelectorAll("section");
    const Navlinks =document.querySelectorAll(".nav-link");

    let current ="home";
    sections.forEach(sec =>{
        const SecTop =sec.offsetTop;
        if(this.scrollY >=SecTop -60){
            current=sec.getAttribute("id");
        }
    })
    navLink.forEach(item =>{
        item.classList.remove("text-SecondaryColor");
        if(item.href.includes(current)){
            item.classList.add("text-SecondaryColor");

        }
    });
};
window.addEventListener("scroll", ActiveLink)
/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/
const sr = ScrollReveal ({
origin:"top",
distance:"60px",
duration:2500,
delay :400
})

sr.reveal(".home-image");
sr.reveal(".home-content", {origin:"bottom"});
sr.reveal(".category-card", {interval:300});

sr.reveal(".promo-card1", {origin:"left"});
sr.reveal(".promo-card2", {origin:"right"});

sr.reveal(".about-img", {origin:"bottom"});
sr.reveal(".about-content", {origin:"top"});

sr.reveal(".menu-items", {origin:"left"});

sr.reveal(".costumer-review", {origin:"right"});

sr.reveal(".footer");