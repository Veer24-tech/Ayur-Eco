const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

navbar.style.top="10px";

}

else{

navbar.style.top="18px";

}

});