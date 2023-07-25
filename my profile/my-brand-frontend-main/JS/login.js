

let form = document.querySelector("#form")
let email = document.querySelector("#email")
let password = document.querySelector("#pwd")

console.log(form);

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  
  const userInputs = {
    email: email.value,
    password: password.value,
  }
  // if (email === "" || password === "") {
  //   // popContact("please fill all fields");
  //   console.log("please fill out fields")
  // }


  try {
    const response = await axios.post("https://my-brand-production-1062.up.railway.app/api/users/login", userInputs)
    console.log(response)
    const { user } = response.data
    
    window.localStorage.setItem("tempLog", JSON.stringify(user))

    if (user.role == 'admin') {
      window.location.href = "./dashboard.html"

    }
    else {

      let link = "./index.html"
      window.location.href = link
    }



    // localStorage.setItem("user", JSON.stringify(response.data.user) )
    // alert('User Signed in  successfully')
    // window.location.href="index.html"
  }

  catch (error) {
    console.log(error);
    document.getElementById("error").innerHTML = error?.response?.data?.message;
  }


})







// function validate() {
//     let users = JSON.parse(localStorage.getItem("users") || "[]")
//     var user = document.getElementById('user').value;
//     var pass = document.getElementById('pass').value;
//     console.log(user, pass)
//     if (user == "admin" && pass =="pass") {
//         window.location.href= "dashboard.html"
//         const Admin={
//             id: 000000,
//             user: "Admin",
//             pass:   "Pass"
//         }
//         console.log(Admin);
//         window.localStorage.setItem("tempLog", JSON.stringify(Admin))
//     }   else{
//             if(user === "" || pass ===""){
//                 // popContact("please fill all fields");
//                 console.log("please fill out fields")
//             }
//             else{
//                 for (let i=0; i<users.length; i++){
//                 if(users[i].fname == user && users[i].pwd == pass){
//                     window.localStorage.setItem("tempLog", JSON.stringify(users[i]))
//                     let link = "./index.html"
//                     window.location.href = link
//                     console.log(users[i]);
//                     break;
//                 }
//                 }
//                 }
//             }
//         }







