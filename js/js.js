function displaySuggestions(response){
        new Typewriter("#response", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}



function generateAnswer (event){
    event.preventDefault();

    let instructionsInput=document.querySelector("#city");

    let apiKey="53980o1ef09d7553cet92b43aefbc155";
    let prompt=`Suggest tourist attractions about ${instructionsInput.value}`;
    let context="You are a tourist attractions expert and love to give new suggestions to tourists. Your mission is to give the tourist 4 attractions about the city they want to visit. Give only the name of the attractions in basic HTML, in bulletpoints separated by a <br/> and never use <strong>.";
    let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(displaySuggestions);


}

let formElement=document.querySelector("#question");
formElement.addEventListener("submit", generateAnswer);