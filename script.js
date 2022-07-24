const btnSingIn = document.querySelector(".btn_register"),
    btnRegister = document.querySelector(".btn_sing-in"),
    sing_in = document.querySelector(".sing-in"), 
    register = document.querySelector(".create");

document.addEventListener('click', e => {
    if(e.target === btnSingIn || e.target === btnRegister){
        sing_in.classList.toggle("active");
        register.classList.toggle("active"); 
    }
})