// Image sliding
const slideImg = document.querySelector(".special_01");

const images = new Array(
    "../images/banner_2.png",
    "../images/banner_3.png",
    "../images/banner_4.png",
    "../images/banner_I0.png"
);

const len = images.length;

let i = 0;

function slider(){
    if(i > len-1){
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()',3000);
}

/*
const navBar = document.querySelector(".navigation");

const navbarHeight = navBar.getBoundingClientRect().height;
window.addEventListener('scroll', ()=>{
    const scrollHeight = window.pageXOffset
    if(scrollHeight > navbarHeight){
        navBar.classList.add("fix-nav");
    }
    else{
        navBar.classList.remove("fix-nav");
    }

});
*/

