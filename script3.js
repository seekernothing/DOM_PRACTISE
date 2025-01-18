

let form = document.querySelector("form");
// let input1 = document.querySelector("#inp1")
// let input2 = document.querySelector("#inp2");
//  To avoide the work of selecting every input we do the following
let inputs = document.querySelectorAll('input[type="text"]')
let h2 = document.querySelector("h2");

form.addEventListener("submit",function(kuchBhiLikho){
kuchBhiLikho.preventDefault();


for( let i=0;i<inputs.length;i++){   //Ham idhar for isliye laga sakte hain kuy ki , Jab inputs ko console.log karenge tab wo array jaise ek node list dega 
    if(inputs[i].value.trim()===""){
        h2.textContent="Please complete all the fields"
        h2.style.color="red"
        break;
    }
}

// if(input1.value===""||input2.value===""){
//     h2.textContent = "Please fill both of the fields";
//     h2.style.color = "red"
// }else{
//     h2.textContent = "";
//     h2.style.color = "white";
// }

})