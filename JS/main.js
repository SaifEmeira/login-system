var signupName = document.querySelector("#signupName");
var signupEmail = document.querySelector("#signupEmail");
var signupPassword = document.querySelector("#signupPassword");
var signupBtn = document.querySelector("#signupBtn");
var pSignup = document.querySelector("#invalid-signup");
var alreadySign = document.querySelector("#alreadySignup");
var loginBtn = document.querySelector(".login");
var signInEmail= document.querySelector("#signinEmail");
var signInPassword = document.querySelector("#signinPassword");
var pSignIn =document.querySelector("#invalid");
var successSignup = document.querySelector("#successSignup")


var allUser;
if (localStorage.getItem("allUser") !=null) {
    allUser=JSON.parse(localStorage.getItem("allUser"));
    

}else{
    allUser=[];
}



// var userName = JSON.parse(localStorage.getItem("namesession"));
// function welcome() {
//     document.getElementById("username").innerHTML= " Welcome " + userName;
    
// }


 back();

function back(){
    location.assign='../index.html'
}
function signup() {
    validName();
    validEmail();
    validPassword();
    // alreadySignedup();
    sucessSignup();
    
    if (  signupName.value==""||signupEmail.value==""||signupPassword.value=="" ) {
        
        
        
    
      pSignup.classList.remove("d-none");
    }else{
        store()
        pSignup.classList.add("d-none");
        
    }
}




if(localStorage.getItem("namesession") != null){
    var userName = localStorage.getItem("namesession");
    document.querySelector(".username").innerHTML= " Welcome " + userName;
}


// function alreadySignedup() {
     
//     successSignup.classList.remove("d-block");
    
    
//   for (let i = 0; i <allUser.length; i++) {
//     if (allUser[i].name==signupName.value&&allUser[i].email==signupEmail.value&&allUser[i].password==signupPassword.value) {
//         console.log("saoogofofof")
//         alreadySign.classList.replace("d-none","d-block");
        
//     }else{
//         alreadySign.classList.replace("d-block","d-none");
        
//     }
    
//   }
    
// }






function sucessSignup() {
    if (validEmail()==true&&validName()==true&&validPassword()==true ) {
        successSignup.classList.remove("d-none")
    }else{
        successSignup.classList.add("d-none")
    }
     
    for (let i = 0; i <allUser.length; i++) {
        if (allUser[i].email==signupEmail.value&&allUser[i].password==signupPassword.value) {
            console.log("saoogofofof")
            alreadySign.classList.replace("d-none","d-block");
        successSignup.classList.add("d-none");

            
        }else{
            alreadySign.classList.replace("d-block","d-none");
        

            
        }
        
      }
    
   
      
  }


















function validPassword() {
    var regex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+[{\]};:'",/?]).{8,}$/
    if (regex.test(signupPassword.value)==true) {
        
        signupPassword.classList.add('is-valid');
    signupPassword.classList.remove('is-invalid');
        
    console.log(true);
        return true
    }else{
        console.log(false);

        signupPassword.classList.remove('is-valid');
        signupPassword.classList.add('is-invalid');
       
    return false
    }}


function store() {
    if (validName() == true && validEmail() == true && validPassword() == true) {
        var user ={
            name:signupName.value,
            email:signupEmail.value,
            password:signupPassword.value,
        }
        
    
        allUser.push(user);
    
    
    
      localStorage.setItem("allUser",JSON.stringify(allUser));
    }
}







function validName() {
    var regex =/^[a-z]{4,20}$/
    if (regex.test(signupName.value)==true) {
        
        signupName.classList.add('is-valid');
    signupName.classList.remove('is-invalid');
        
    console.log(true);
        return true
    }else{
        console.log(false);

        signupName.classList.remove('is-valid');
        signupName.classList.add('is-invalid');
       
    return false
    }}

    function validEmail() {
        var regex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
     
    if (regex.test(signupEmail.value)==true) {
            
        signupEmail.classList.add('is-valid');
        signupEmail.classList.remove('is-invalid');
        
    
    
            
            
    
        return true
    }else{
    
        signupEmail.classList.remove('is-valid');
        signupEmail.classList.add('is-invalid');
       
    return false
    }
    }



    function login() {
        if (signInEmail.value== "" || signInPassword.value== "") {
            pSignIn.classList.remove("d-none");
        }else{
            pSignIn.classList.add("d-none");
    
        }
            
        for (let i = 0; i < allUser.length; i++) {
            if (allUser[i].email == signInEmail.value && allUser[i].password == signInPassword.value) {
                console.log("000000000000000000000000000000")
                localStorage.setItem("namesession",allUser[i].name);
                loginBtn.setAttribute("href","welcome.html")
                clear();
                welcome();
                
                
                
            }
            
        }
    
       }














   


    function clear() {

        signInEmail.value="";
        signInPassword.value="";
        
    }
    