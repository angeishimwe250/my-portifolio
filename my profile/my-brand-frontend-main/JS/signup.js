
let form  =  document.querySelector("#form");
let name  =  document.querySelector("#name")
let email  =  document.querySelector("#email")
let password =  document.querySelector("#pwd")

console.log(form);

form.addEventListener("submit" ,async (e)=>{
    e.preventDefault();

    console.log(name.value,email.value,password.value);

    const user  = {
        username:name.value,
        email:email.value,
        password:password.value,
    }
 console.log(user);
    try {
      const response=   await  axios.post("https://my-brand-production-1062.up.railway.app/api/users/register",user)

        console.log(response);
        localStorage.setItem("user", JSON.stringify(response.data.user) )
        window.location.href="./login.html"
    } catch (error) {
        console.log(error?.response?.data?.message);
        document.getElementById("error").innerHTML=error?.response?.data?.message;
    }


})














    // function signupForm (data){
    //   event.preventDefault();
      
    //   var fname = document.getElementById('fname').value;
    //   var email = document.getElementById('email').value;
    //   var password = document.getElementById('pwd').value;
    // //   var users = JSON.parse(localStorage.getItem("users") || "[]");
  
    //   var formData = {
    //       fname: fname,
    //       email: email,
    //       pwd : password,
    //   };
    //   users.push(formData);
    //   localStorage.setItem("users", JSON.stringify(users));
    //   alert('well done');
    // }