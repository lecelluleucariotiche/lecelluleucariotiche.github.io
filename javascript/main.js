window.onscroll = function() {
  stickNav()
};

var nav = document.getElementById("title");
var sticky = nav.offsetTop;

function stickNav() {
  if (window.pageYOffset > sticky) {
    nav.classList.toggle('sticky');
  } else {
    nav.classList.remove("sticky");
  }
}
function toggle(){
	var menu = document.getElementById('menu-content');
	var b1 = document.getElementById('menu');
	var coperto = document.getElementById('coperto');
	coperto.classList.toggle('active')
	b1.classList.toggle('active')
	menu.classList.toggle('active')
}

