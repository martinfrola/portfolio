function addEventListeners(){responsiveMenu(),smoothScroll(),menuOff()}function responsiveMenu(){document.querySelector(".mobile-menu").addEventListener("click",()=>{document.querySelector(".nav-content").classList.toggle("active-mobile")})}function smoothScroll(){document.querySelectorAll(".nav-content a").forEach(e=>{e.addEventListener("click",e=>{e.preventDefault();document.querySelector(e.target.attributes.href.value).scrollIntoView({behavior:"smooth"})})})}function menuOff(){document.querySelectorAll(".link").forEach(e=>{e.addEventListener("click",()=>{console.log("diste click");document.querySelector(".nav-content").classList.remove("active-mobile")})})}document.addEventListener("DOMContentLoaded",(function(){addEventListeners()}));
//# sourceMappingURL=bundle.js.map
