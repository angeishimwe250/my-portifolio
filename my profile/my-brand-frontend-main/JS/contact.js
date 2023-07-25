

function validForm() {
  event.preventDefault();
  //alert("alert");
  var name = document.custom_form.name;
  var email = document.custom_form.email;
  var phone = document.custom_form.phone;
  var subject = document.custom_form.subject;
  var message = document.custom_form.message;
  var conditions = document.custom_form.conditions;
  if (name.value == "") {
    name.nextElementSibling.style.display = "block";
    name.style.border = "1px solid #f00";
    return false;
  } else {
    name.nextElementSibling.style.display = "none";
    name.style.border = "1px solid transparent";
  }
  if (
    //!email.value.match(/^([\w-\.]+ @([\w-]+\.)+[\w-]{2,4})?$/) ||
    email.value == ""
  ) {
    email.nextElementSibling.style.display = "block";
    email.style.border = "1px solid #f00";
    return false;
  } else {
    email.nextElementSibling.style.display = "none";
    email.style.border = "1px solid transparent";
  }
  if (!phone.value.match(/^\(?([0-9]{1})\)?([0-9]{9})$/) || phone.value == "") {
    phone.nextElementSibling.style.display = "block";
    phone.style.border = "1px solid #f00";
    return false;
  } else {
    phone.nextElementSibling.style.display = "none";
    phone.style.border = "1px solid transparent";
  }
  if (subject.value == "") {
    subject.nextElementSibling.style.display = "block";
    subject.style.border = "1px solid #f00";
    return false;
  } else {
    subject.nextElementSibling.style.display = "none";
    subject.style.border = "1px solid transparent";
  }
  if (message.value == "") {
    message.nextElementSibling.style.display = "block";
    name.style.border = "1px solid #f00";
    return false;
  } else {
    message.nextElementSibling.style.display = "none";
    message.style.border = "1px solid transparent";
  }
  if (conditions.checked == false) {
    conditions.nextElementSibling.style.display = "block";
    conditions.style.border = "1px solid #f00";
    return false;
  } else {
    conditions.nextElementSibling.style.display = "none";
    conditions.style.border = "1px solid transparent";
  }

  var raw = JSON.stringify({
    name: name.value,
    email: email.value,
    phone: phone.value,
    subject: subject.value,
    message: message.value,
    // conditions: conditions.value,
  });
  // messages.unshift(messageData)

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");


  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://my-brand-production-1062.up.railway.app/api/message/send/", requestOptions)
    .then(response => response.text())
    .then(result => {
      name.value = "",
        email.value = "",
        phone.value = "",
        subject.value = "",
        message.value = ""
      alert("message sent successfull");
      console.log(result)
    })
    .catch(error => console.log('error', error));


}