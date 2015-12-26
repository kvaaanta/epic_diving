$(document).ready(function() {
  var toggler = document.getElementById('toggler');
  toggler.onclick = function(e){
  e.preventDefault();
  toggler.classList.toggle('toggler--close');
  document.getElementById('nav-wrapper').classList.toggle('nav-wrapper-visible');
}

  $('#footer_form').validationEngine({promptPosition : "centerRight"});



});






