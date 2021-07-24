var translateButton = document.querySelector("#translate-button");
var textInput = document.querySelector("#text-input");
var outputBox = document.querySelector("#outputBox");

var serverURL = "https://api.funtranslations.com/translate/vulcan.json"



function constructedTranslationURL(text){
    return serverURL+"?"+"text="+text
}


translateButton.addEventListener("click", clickHandler)

function clickHandler(){
    var textToBeTranslated=textInput.value;             //input

    //server processing

    fetch(constructedTranslationURL(textToBeTranslated))
        .then(response=>response.json())
        .then(json=>{
            var translatedText = json.contents.translated;
            outputBox.innerText= translatedText;            //output
        })
        .catch(errorHandler)
}

//error handling
function errorHandler(error){
    console.log("Error Occured",error);
    alert("Error: Server Issue Try Again After Sometime")
}