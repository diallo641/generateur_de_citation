let mot=document.getElementById("mot");
let citation=document.getElementById("citation");
let auteur=document.getElementById("auteur");
mot.addEventListener("focus", function(){
    mot.style.background = "linear-gradient(90deg, #0d6efd, #ffffff)"  
})
mot.addEventListener("mouseover", function(){
    mot.style.background = "linear-gradient(90deg, #87CEEB, #ffffff)"; 
})

mot.addEventListener("mouseout", function(){
    mot.style.background = "goldenrod"  
})