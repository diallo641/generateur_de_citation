let mot=document.getElementById("mot");
let citation=document.getElementById("citation");
let auteur=document.getElementById("auteur");
//fonction pour choisir une citation d'une maniere aleatoire
//1-Declare un eliste d'objet sous form ede dictionnaiare selon les themes
let amour={ "Antoine de Saint-Exupéry": "💌 Aimer, ce n’est pas se regarder l’un l’autre, c’est regarder ensemble dans la même direction.", 
    "William Shakespeare": "🌹 L’amour ne se voit pas avec les yeux, mais avec le cœur.", 
    "Stendhal": "❤️ Le plus grand bonheur que puisse donner l’amour, c’est le premier serrement de main d’une femme qu’on aime",
    "Victor Hugo": " 💞 Aimer, c’est savoir dire je t’aime sans parler.",
    "Platon":"💫 L’amour véritable commence là où cesse l’amour de soi.",
    "Proverbe oriental":"💕 Dans le regard de l’amour, chaque défaut devient une douceur.",
    "Voltaire":"🌻 L’amour est une étoffe tissée par la nature et brodée par l’imagination",
    "Blaise Pascal":"🕊️ Le cœur a ses raisons que la raison ne connaît point",
    "Anonyme":"💖 Le vrai amour, c’est d’aimer sans raison.",
    "Anonyme1":"🌙 Aimer quelqu’un, c’est lui donner la possibilité de te détruire, mais lui faire confiance pour ne pas le faire."
     }
let tristesse={ "Marcel Achard":"💔 « Il est triste de ne pas s’aimer quand on s’aime encore.",
                "Victor Hugo":"🌧️ Le souvenir, c’est la présence invisible.",
                 "William Shakespeare":"🍂 Le plus douloureux des sentiments, c’est de se sentir oublié par quelqu’un qu’on ne peut pas oublier",
                 "Arthur Wing Pinero":"🌙 Ceux qui aiment profondément ne vieillissent jamais ; ils peuvent mourir de vieillesse, mais ils meurent jeunes.",
                 "François de La Rochefoucauld":"😔 L’absence diminue les petits amours et augmente les grands, comme le vent éteint les bougies et attise le feu",
                 "Jean-Paul Sartre":"😔 « Il n’y a pas d’amour qui résiste à l’absence, sauf celui qui n’a jamais eu d’avenir.",
                 "Pierre Reverdy" :"🥀  On ne meurt pas d’amour, mais on meurt souvent de ses suites.",
                 "Jean Cocteau":"💫 Le cœur se brise quand on le retient trop longtemps de pleurer.",
                 "George Sand":"🕊️ L’amour est une torture réciproque.",
                 "Honoré de Balzac":"🖤 Les chagrins d’amour sont les frais d’apprentissage de la passion."

}
mot.addEventListener("focus", function(){
    mot.style.background = "linear-gradient(90deg, #0d6efd, #ffffff)"  
})
mot.addEventListener("mouseover", function(){
    mot.style.background = "linear-gradient(90deg, #87CEEB, #ffffff)"; 
})

mot.addEventListener("mouseout", function(){
    mot.style.background = "goldenrod"  
})