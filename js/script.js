let navbar=document.querySelector('.navbar');
document.querySelector('#menu_btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


let searchForm=document.querySelector('.search-form');
document.querySelector('#search_btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}



let cartItem=document.querySelector('.cart-items-container');
document.querySelector('#cart_btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll=()=>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');

}