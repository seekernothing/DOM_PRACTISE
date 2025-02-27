
let Nietzsche = document.getElementById("Nietzsche");
let Hegel = document.getElementById("Hegel");
let Camus = document.getElementById("Camus");

let NietzscheText = document.getElementById("Nietzsche-text")

let Hegeltext = document.getElementById("Hegel-text");


let Camustext = document.getElementById("Camus-text");

NietzscheText.style.display="block";
NietzscheText.style.width="50%"
NietzscheText.style.height = "50%";
NietzscheText.style.margin = "0 auto";
NietzscheText.style.border = "2px solid red";
NietzscheText.style.padding = "50px";



function hideAllText(){
    document.querySelectorAll("p").forEach(function(p){
        p.style.display="none"
    })
}

Nietzsche.addEventListener("click",function(){

    hideAllText()

    NietzscheText.style.display="block";
NietzscheText.style.width="50%"
NietzscheText.style.height = "50%";
NietzscheText.style.margin = "0 auto";
NietzscheText.style.border = "2px solid red";
NietzscheText.style.padding = "50px";

})


Hegel.addEventListener("click", function () {
    hideAllText();
  Hegeltext.style.display = "block";
  Hegeltext.style.width = "50%";
  Hegeltext.style.height = "50%";
  Hegeltext.style.margin = "0 auto";
  Hegeltext.style.border = "2px solid red";
  Hegeltext.style.padding = "50px";
});
    

Camus.addEventListener("click", function () {
    hideAllText();
  Camustext.style.display = "block";
  Camustext.style.width = "50%";
  Camustext.style.height = "50%";
  Camustext.style.margin = "0 auto";
  Camustext.style.border = "2px solid red";
  Camustext.style.padding = "50px";
});
    
