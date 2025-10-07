let mot=document.getElementById("mot");
let citation=document.getElementById("citation");
let auteur=document.getElementById("auteur");
let genererunecitation=document.getElementById("genererunecitation");
let deuxieme_colonne=document.getElementById("deuxieme_colonne");
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
let motivation={"Mark Twain":"🌟 Ils ne savaient pas que c’était impossible, alors ils l’ont fait.",
                "Winston Churchill":"🚀 Le succès, c’est d’aller d’échec en échec sans perdre son enthousiasme.",
                 "Sénèque":"🔥 Ce n’est pas parce que les choses sont difficiles que nous n’osons pas, c’est parce que nous n’osons pas qu’elles sont difficiles",
                 "Martin Luther King Jr":"💭 Crois en tes rêves et ils se réaliseront peut-être ; crois en toi et ils se réaliseront sûrement",
                 "Arthur Ashe":"🌈 Commence là où tu es, utilise ce que tu as, fais ce que tu peux.",
                 "Confucius":"💪 La plus grande gloire n’est pas de ne jamais tomber, mais de se relever à chaque chute.",
                 "Antoine de Saint-Exupéry":"🕊️ Fais de ta vie un rêve, et d’un rêve, une réalité.",
                 "Vidal Sassoon":"⏳ Le seul endroit où le succès vient avant le travail, c’est dans le dictionnaire.",
                 "Eleanor Roosevelt":"🌻 L’avenir appartient à ceux qui croient à la beauté de leurs rêves.",
                 "Coluche":"⚡ La vie mettra des pierres sur ta route. À toi de décider d’en faire des murs ou des ponts."
    
}
//2-Fonction pour selectionner une citation
function citationaleatoire(tab) {
    let taille=Object.keys(tab).length;
    let keys = Object.keys(tab);
    let index = (Math.floor(Math.random() * taille)); 
    let cle = keys[index];
    let valeur = tab[cle];
    return { cle: cle, valeur: valeur };  
}
//Gerer l'evenment sur le boutton
genererunecitation.addEventListener("click", function(){
    let theme=document.getElementById("mot").value.trim();
    if(theme==''){
        citation.textContent="vous deveez ecrire quelque chose pour avoir une citation"
        auteur.textContent="";
        premiere_colonne.style.backgroundColor="lightblue";
        deuxieme_colonne.style.backgroundColor="lightcyan";
        troisieme_colonne.style.backgroundColor="lightblue";
        document.getElementById("mot").value="";
    }
    else if(theme==="Amour"){
        let resultat=citationaleatoire(amour)
        citation.textContent=resultat.valeur;
        auteur.innerHTML = 'Auteur: <i class="text-muted">' + resultat.cle + '</i>';
        premiere_colonne.style.backgroundColor="#72434B";
        deuxieme_colonne.style.backgroundColor="#DB3A34";
        troisieme_colonne.style.backgroundColor="#ED8146";
        document.getElementById("mot").value="";

    }
     else if(theme==="Tristesse"){
        let resultat=citationaleatoire(tristesse)
        citation.textContent=resultat.valeur;
        auteur.innerHTML = 'Auteur: <i class="text-muted">' + resultat.cle + '</i>';
        premiere_colonne.style.backgroundColor="#177E89";
        deuxieme_colonne.style.backgroundColor="#084C61";
        troisieme_colonne.style.backgroundColor="#FFC857";
        document.getElementById("mot").value="";

    }
     else if(theme==="Motivation"){
        let resultat=citationaleatoire(motivation)
        citation.textContent=resultat.valeur;
        auteur.innerHTML = 'Auteur: <i class="text-muted">' + resultat.cle + '</i>';
        premiere_colonne.style.backgroundColor="#F6CFF3";
        deuxieme_colonne.style.backgroundColor="#F5BFB1";
        troisieme_colonne.style.backgroundColor="#ECB784";
        document.getElementById("mot").value="";
    }
    
})
mot.addEventListener("focus", function(){
    mot.style.background = "linear-gradient(90deg, #0d6efd, #ffffff)"  
})
mot.addEventListener("mouseover", function(){
    mot.style.background = "linear-gradient(90deg, #87CEEB, #ffffff)"; 
})

mot.addEventListener("mouseout", function(){
    mot.style.background = "goldenrod"  
})