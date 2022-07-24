const header = document.querySelector("header")
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY>0)
})

$('#ripple').ripples({
    resolution:512,
    dropRadius:20,
    perturbance:0.04,
})