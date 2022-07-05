const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];




let passwordOneEl= document.getElementById("passwordOne-el")
let passwordTwoEl= document.getElementById("passwordTwo-el")

function generate(){
    
    
    passwordOneEl.textContent=""
    passwordTwoEl.textContent=""
    
    for(let i=0;i<15;i++){
        let passwordOne= Math.floor(Math.random()*91)
        passwordOneEl.textContent +=characters[passwordOne]
    }
    for(let i=0;i<15;i++){
        let passwordTwo= Math.floor(Math.random()*91)
        passwordTwoEl.textContent +=characters[passwordTwo]
    }
 
}

let copyEl1= document.getElementById("copy-el1")
let copyEl2= document.getElementById("copy-el2")

copyEl1.onclick = function(){
    let content= passwordOneEl.innerText
    navigator.clipboard.writeText(content);
}

copyEl2.onclick = function(){
    let content= passwordTwoEl.innerText
    navigator.clipboard.writeText(content);
}
