Email.send({
  Host : "smtp.elasticemail.com",
  Username : "username",
  Password : "password",
  To : 'them@website.com',
  From : "you@isp.com",
  Subject : "This is the subject",
  Body : "And this is the body"
}).then(
message => alert(message)
);



const form = document.querySelector('form');
const fullName = document.getElementById("name")
const Email = document.getElementById("Email")
const phone = document.getElementById("phone")
const subject = document.getElementById("subject")
const message = document.getElementById("message")