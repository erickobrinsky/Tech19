


function sendEmail(){
  Email.send({
    SecureToken: "e5c0a6a0-8f7b-48e5-88d9-5e17e96c2d78",
    To: "kobrinskye@gmail.com",
    From: "kobrinskye@gmail.com",
    Subject: "New content from website",
    Body : "Firstname: " + document.getElementById('firstName').value
     + "<br> Lastname: " + document.getElementById('lastName').value
     + "<br> Email: " + document.getElementById('email').value
     + "<br> Phone: " + document.getElementById('phone').value
     + "<br> Message: " + document.getElementById('message').value
}).then(
  message => alert('Message sent successfully.')
);
}