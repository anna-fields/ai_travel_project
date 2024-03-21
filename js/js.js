
function generateAnswer (event){
    event.preventDefault();
    
    new Typewriter("#response", {
    strings: "Your suggestions will appear here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let formElement=document.querySelector("#question");
formElement.addEventListener("submit", generateAnswer);