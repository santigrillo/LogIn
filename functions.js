var togglePassword = document.getElementById("eye");
togglePassword.src = "assets/EyeFill.svg";

var passwordx = document.getElementById("password");

togglePassword.addEventListener("click", ()=>{
    if(passwordx.type === "password"){
        passwordx.type = "text";
        togglePassword.src =  "assets/EyeSlashFill.svg";
    } else {
        passwordx.type = "password";
        togglePassword.src = "assets/EyeFill.svg";
    }
});