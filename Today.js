var menubn = document.getElementById('menubn')
var menunav = document.getElementById('menunav')
var menu = document.getElementById('menu')

menunav.style.right = "-250px";

menubn.onclick =function(){
    if(menunav.style.right == "-250px"){
        menunav.style.right = "0";
        menu.src = 'img/svg/close.svg';
    }
    else{
        menunav.style.right = "-250px";
        menu.src = 'img/svg/menu-line.svg';
    }
}

