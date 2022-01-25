//typewriter
var i = 0;
var text = ' frontend';
var speed = 150;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("navn").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function typeWriterAwait() {
  setTimeout(typeWriter, 500);
 }

 typeWriterAwait(); 

//smooth scroll
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 700);
    return false;
});

