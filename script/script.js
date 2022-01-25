//typewriter
var i = 0;
var txt = ' Sebastian.';
var speed = 150;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("navn").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter()

//smooth scroll
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 700);
    return false;
});

