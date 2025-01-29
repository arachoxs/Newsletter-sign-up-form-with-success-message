const form = document.getElementById("main-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector("input");
  const parent = input.parentElement;
  if(input && !input.validity.valid){
    parent.querySelector("#error-message").style.display="flex";
    parent.classList.add("error-input");
  }else{
    parent.querySelector("#error-message").style.display="none";
    parent.classList.remove("error-input");

    //success message

  }
});