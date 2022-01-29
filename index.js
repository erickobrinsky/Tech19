


function sendEmail(){
  Email.send({
    SecureToken: "ed045644-05bc-4c50-b432-ff1f6223c0f7",
    To : 'kobrinskye@gmail.com',
    From : document.getElementById('email').value,
    Subject : "New content from website",
    Body : "Firstname: " + document.getElementById('firstName').value
     + "<br> Email: " + document.getElementById('email').value
     + "<br> Lastname: " + document.getElementById('lastName').value
     + "<br> Phone: " + document.getElementById('phone').value
     + "<br> Message: " + document.getElementById('message').value
}).then(
  message => alert('Message sent successfully.')
);
}