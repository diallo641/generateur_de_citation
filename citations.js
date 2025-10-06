let mot=document.getElementById("mot");
mot.addEventListener("focus", function(){
    mot.style.background = "linear-gradient(90deg, #0d6efd, #ffffff)"  
})
mot.addEventListener("mouseover", function(){
    mot.style.background = "red"  
})

mot.addEventListener("mouseout", function(){
    mot.style.background = "goldenrod"  
})