mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
$(document).on('click', '.toggle-password', function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    
    var input = $("#psw");
    input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
});

$(document).ready(function(){

    // Check local storage and set theme
    if(localStorage.theme) {

        $('body').addClass( localStorage.theme );

    } 
    else{

        $('body').addClass('light-mode'); // set default theme. No need to set via php now

    }



    //Switch theme and store in local storage ...

    $("#theme-toggler").click(function(){

         if ($('body').hasClass( 'light-mode')){

            $('body').removeClass('light-mode').addClass('dark-mode');
            localStorage.theme = 'dark-mode';



         }
         else  {

            $('body').removeClass('dark-mode').addClass('light-mode');
            localStorage.theme = 'light-mode';

         }
       });
     });
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark-mode') 
	{
        toggleSwitch.checked = true;
    }
}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}