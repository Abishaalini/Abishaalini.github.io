// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

let inputEl= document.getElementById("inputel")
let contentEl1= document.getElementById("output-el1")
let contentEl2= document.getElementById("output-el2")
let contentEl3= document.getElementById("output-el3")

let convertEl = document.getElementById("convert-el")
 convertEl.addEventListener("click", function(){

     let input =Number(inputEl.value)
   
     let outputFeet= input * 3.281
     let outputMeter=input / 3.281
     let outputliter= input *  0.264
     let outputgallon=input /  0.264
     let outputkilogram= input * 2.204
     let outputpound=input /  2.204

     contentEl1.textContent= `${input} meters = ${outputFeet.toFixed(2)} feet | ${input} feet = ${outputMeter.toFixed(2)} meters`
     contentEl2.textContent= `${input} liters = ${outputliter.toFixed(2)} gallons | ${input} gallons = ${outputgallon.toFixed(2)} liters`
     contentEl3.textContent= `${input} kilos = ${outputkilogram.toFixed(2)} pounds | ${input} pounds = ${outputpound.toFixed(2)} kilos`
    




 })