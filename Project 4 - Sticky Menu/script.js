

window.addEventListener('scroll',function(){
    let menu = document.getElementById("menu_container");

    if(window.pageYOffset >= 200)
    {
        menu.classList.add('sticky');
        // console.log("crossed");
    } else{
        menu.classList.remove('sticky');
    }
});