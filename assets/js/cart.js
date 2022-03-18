window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementsById("counter").style.top = "0";
  } else {
    document.getElementById("counter").style.top = "-100px";
  }
}