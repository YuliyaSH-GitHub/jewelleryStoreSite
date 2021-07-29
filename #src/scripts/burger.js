$(document).ready(function() {
  $('._burger').click(function(event) {
    $('._burger,._menu').toggleClass('active');
    $('body').toggleClass('lock');
  })
});