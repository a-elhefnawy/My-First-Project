"use strict"
//-----------typing openning text letter by letter--------//
var openTxt=document.getElementById("openTxt");
var txt="`Welcome to our Shop`";
var i=0;
function type(){
    var interval= setInterval(function(){
        openTxt.textContent+=txt[i];
        i++;
        if(i==txt.length) clearInterval(interval);
    },150)
}
type();
//------------------SILDER-------------------------------//

var imgName=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"];
var nxtBtn=document.getElementById("next-button");
var prvBtn=document.getElementById("previous-button");
var img=document.querySelector(".slider img");
var imgIndex=imgName.indexOf(img.attributes.src.value);

nxtBtn.addEventListener("click",function(){
    if(imgIndex<imgName.length-1){
        img.attributes.src.value=imgName[[++imgIndex]];
    }
})
prvBtn.addEventListener("click",function(){
    if(imgIndex>1){
        img.attributes.src.value=imgName[--imgIndex];
    }
})

function slide(){
    img.attributes.src.value=imgName[++imgIndex%7];
}
setInterval(slide,2000);
//----------------------CATEGORY FILTER----------------//
var laptops=document.getElementById("laptops");
var phones=document.getElementById("phones");
var tablets=document.getElementById("tablets")

function showAll(){
    laptops.style.display="grid";
    phones.style.display="grid";
    tablets.style.display="grid"; 
}
function showLaptop(){
    laptops.style.display="grid";
    phones.style.display="none";
    tablets.style.display="none";
}
function showPhone(){
    laptops.style.display="none";
    phones.style.display="grid";
    tablets.style.display="none";
}
function showTablet(){
    laptops.style.display="none";
    phones.style.display="none";
    tablets.style.display="grid";
}
//----------------COUNTER-------------------------//
var cart=document.getElementById("counter");
var count=0;
if(getCookie("cart")){
    count=Number(getCookie("cart"));
 }
 cart.textContent=count;
 
function counter(){
 count++
 cart.textContent=count;
 setCookie("cart",count);
}
//-------------------------SCROLL-------------------------------//
// Show the button when the user scrolls down 20px
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
//----------------------------CART-----------------------------//



