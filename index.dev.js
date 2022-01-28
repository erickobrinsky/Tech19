"use strict";

var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var message = document.getElementById('message'); //checking if a string is an email 

function isEmail(email) {
  var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
}

function handleSubmit(ev) {
  ev.preventDefault();
  var firstName = ev.target.firstName.value;
  var lastName = ev.target.lastName.value;
  var email = ev.target.email.value;
  var phone = ev.target.phone.value;
  var message = ev.target.message.value;
  console.log(firstName);
  console.log(lastName);
  ev.target.reset();
}

function scrollto(element) {
  // get the element on the page related to the button
  var scrollToId = element.getAttribute("data-scroll");
  var scrollToElement = document.getElementById(scrollToId);
}