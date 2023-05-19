//--------------------form validation------------------------------------//
"use strict";
var nameAlert = document.getElementById("guestName");
var emailAlert = document.getElementById("guestEmail");
var phoneNumAlert = document.getElementById("guestPhoneNum");
var messageAlert = document.getElementById("guestMessage");
var validateName = /[a-zA-Z]{4,}$/;
var validateEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/;
var validatePhoneNum = /(011|010|012)+[0-9]{8,}$/;

function validate(e){
  var valid=true;
  if (!validateName.test(e.target.name.value)) {
    valid = false;
    nameAlert.innerText = "Name is not valid at least 4 chars";
  } else {
    nameAlert.innerText = "";
  }
  if (!validateEmail.test(e.target.email.value)) {
    valid = false;
    emailAlert.innerText = "Email is not valid";
  } else {
    emailAlert.innerText = "";
  }
  if (!validatePhoneNum.test(e.target.phoneNum.value)) {
    valid = false;
    phoneNumAlert.innerText = "Phone number is not valid at least 11 numbers";
  } else {
    phoneNumAlert.innerText = "";
  }
  if (e.target.message.value.length == 0) {
    valid=false;
    messageAlert.innerText = "Message is not valid";
  } else {
    messageAlert.innerText = "";
  }

  if (!valid) {
    e.preventDefault();
  }
}

///////////////scroll////////////////////

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
  ////////////cart////////////////
  var num=getCookie("cart");
  var num1=document.getElementById("counter");
  num1.textContent=num;

