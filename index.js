// function sendMail() {
//   var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var subject = document.getElementById("subject").value;
//   var message = document.getElementById("message").value;

//   if (name === "" || email === "" || subject === "na" || message === "") {
//     alert("Please fill out all fields.");
//     return false;
//   }

//   var params = {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     message: document.getElementById("message").value,
//   };

//   const serviceID = "service_hwa1s4c";
//   const templateID = "template_a84fqbg";

//   emailjs
//     .send(serviceID, templateID, params)
//     .then((res) => {
//       document.getElementById("name").value = "";
//       document.getElementById("email").value = "";
//       document.getElementById("message").value = "";
//       console.log(res);
//       alert("Your message sent successfully!!");
//     })
//     .catch((err) => console.log(err));
// }
function sendMail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  if (name === "" || email === "" || subject === "na" || message === "") {
    alert("Please fill out all fields.");
    return false;
  }

  var params = {
    name: name,
    email: email,
    message: message,
    subject: subject,
  };

  const serviceID = "service_hwa1s4c";
  const templateID = "template_a84fqbg";

  // Delay sending email for 2 seconds (adjust as needed)
  setTimeout(function () {
    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        // Clear form fields after successful submission
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("subject").value = "";
        console.log(res);
        alert("Your message sent successfully!!");
      })
      .catch((err) => console.log(err));
  }, 2000); // 2 seconds delay

  // Prevent default form submission
  return false;
}
