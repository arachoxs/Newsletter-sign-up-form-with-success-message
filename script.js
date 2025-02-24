const form = document.getElementById("main-form");
const dismmisButton = document.getElementById("dismiss-button");

function changeState (div1 , div2){
  div1.style.display = "none";
  div2.style.display = "flex";
}

dismmisButton.addEventListener("click", () => {
  form.reset();
  const main = document.querySelector("main");
  const success = document.getElementById("success-container");
  changeState(success, main);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.querySelector("input");
  const parent = input.parentElement;

  if(!input){
    return;
  }

  if(input && !input.validity.valid){
    parent.querySelector("#error-message").style.display="flex";
    parent.classList.add("error-input");
  }else{
    console.log("hol")
    parent.querySelector("#error-message").style.display="none";
    parent.classList.remove("error-input");

    //success message
    const main = document.querySelector("main");
    const sucess = document.getElementById("success-container");

    const successMessage = document.getElementById("email-user");
    successMessage.innerText = input.value;
    
    changeState(main, sucess);

  }
});

const img = document.querySelector("#main-img");

window.addEventListener("resize", () => {
  if (window.innerWidth <= 400) {
    img.src="./assets/images/illustration-sign-up-mobile.svg"
  }else{
    img.src="./assets/images/illustration-sign-up-desktop.svg"
  }
});

