const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');



//checking if a string is an email 

function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }


   function handleSubmit(ev) {
    ev.preventDefault()
   
    const firstName = ev.target.firstName.value;
    const lastName = ev.target.lastName.value;
    const email = ev.target.email.value;
    const phone = ev.target.phone.value;
    const message = ev.target.message.value
    console.log(firstName)
    console.log(lastName);
    ev.target.reset();
}


