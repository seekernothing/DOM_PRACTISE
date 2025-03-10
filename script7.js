let pgb = document.querySelector("#progressbar");
let h4 = document.querySelector("h4")

let count =0
let int=setInterval(function(){
if(count===100){
    clearInterval(int);
    h4.style.opacity=1;

}
pgb.style.width = count + "%";
count++
},50)