const nn = document.querySelector('.header .nav-bar .nav-list .nn');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
nn.addEventListener('click',()=>{nn.classList.toggle('active');mobile_menu.classList.toggle('active');});
document.addEventListener('scroll',()=>{var scroll_position = window.scrollY;if(scroll_position > 250){header.style.backgroundColor = '#137ef6';}else{header.style.backgroundColor='transparent';}});
menu_item.forEach((item)=>{item.addEventListener('click',()=>{nn.classList.toggle('active');mobile_menu.classList.toggle('active');});});
function openSearch() {(document.getElementById("search-over").style.display = "block");}
function closeSearch() {(document.getElementById("search-over").style.display = "none");}
new Swiper('#swiper-slider',{grabCursor: true,centeredSlides: true,slidesPerView: 'auto',coverflowEffect: {rotate: 50,stretch: 0,depth: 500,modifier: 1,slideShadows: true},pagination: {el: '.swiper-pagination',},loop : true,autoplay : {delay : 2000,disableOnInteraction: false,}});
new Swiper('#swiper-partner', {grabCursor: true,centeredSlides: true,slidesPerView: 'auto',loop : true,autoplay : {delay : 2000,disableOnInteraction: false,}});
// effect: 'coverflow',