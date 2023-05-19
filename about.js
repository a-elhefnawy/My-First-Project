//----------------------------SCROLL-------------------//
window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scroll").style.display = "block";
    } else {
      document.getElementById("scroll").style.display = "none";
    }
  }
  //----------------------COUNTER--------------//
  var num=getCookie("cart");
  var num1=document.getElementById("counter");
  num1.textContent=num;
