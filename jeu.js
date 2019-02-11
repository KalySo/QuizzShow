
//Déclaration des variables 

//Variable qui contient le quizz
const quizContainer = document.getElementById('blocQuestion');

//Varible qui contient le score 
const scoreContainer = document.getElementById('score');

//Variable qui contient le bouton Valider
const suivant = document.getElementById('submit');

// Variable qui contient chaque question
const slides = document.getElementsByClassName("slide"); 


//On recupère le content pour la barre de progrssion 
var bar = document.getElementById("progressBar"); 

// Variable pour afficher les erreurs
var mistake = document.getElementById("erreur");

// var qui contient la musique 
//var music = document.querySelector('#audio');
var music = document.getElementById('audio'); 
const playPromise = music.play();

/**Un peu de style à notre varible mistake :) */

mistake.style.fontWeight = 'bold'; 
mistake.style.marginTop = '20px'; 
mistake.style.marginLeft = '300px'; 
mistake.style.marginRight = '200px'; 

// Un variable qui va garder tous les input radio
var  radios ;

// On met son score à 0 d'abord: 
var score = 0;

// Le jeu s'arrête à 10 questions. Une variable donc pour compter le nombre de question
var NombreQuest = 0;  


var id ; 


// un tableaubleau d'objets pour mesQuestions: 
//Le tableau est constitué d'un objet à 3 attributs: le premier contient la question, 
// le second est lui aussi un objet qui regroupe les 4 propositions de reponses
//Le troisième contient la reponse exacte
const mesQuestions = [
  

  {
    question: "Dans \"Shake It Up\" qui est la plus paresseuse des quatre ? :",
    answer1: "Cece",
    answer2: "Rocky",
    answer3: "Tina",
    answer4: "Tinka" ,
    correctAnswer: "Cece",
    passe: "false",
    categorie: "Série Disney"
  },

  {
    question: "Qui est le vampire originel hybride dans \" vampire Diaries\" ? :",
    answer1: "Damon",
    answer2: "Stephen",
    answer3: "Alaric",
    answer4: "Klaus" ,
    correctAnswer: "Klaus",
    passe: "false", 
    categorie: "Série Science fiction"
  },

  {
    question: "Complétez ces paroles de la chanson du Roi Lion : « C’est l’histoire de la vie… :",
    answer1: "...le cycle éternel qu’un enfant béni rend immortel »",
    answer2: "… le cercle infini qu’un bambin rend immuable »",
    answer3: "… la boucle continue qu’un marmot rend sempiternel »",
    answer4: "… le cercle infini qu’un bambin rend immuable »" ,
    correctAnswer: "...le cycle éternel qu’un enfant béni rend immortel »",
    passe: "false", 
    categorie: "Musique"
  },

  {
    question: "Comment s’appellent les belles-sœurs de Cendrillon ?? :",
    answer1: "Blair et Serena",
    answer2: "Anastasie et Javotte",
    answer3: "Michelle et Belle",
    answer4: "Francoise et Catherine" ,
    correctAnswer: "Anastasie et Javotte",
    passe: "false",
    categorie: "Série Disney"
  },

  {
    question: "Quelle fleur ne doit pas faner dans la Belle et la Bête ?:",
    answer1: "Une Violette",
    answer2: "Une Marguerite",
    answer3: "Une rose",
    answer4: "Une tulipe" ,
    correctAnswer: "Une rose",
    passe: "false",
    categorie: "Série Disney"
  },

  {
    question: "Comment s'appelle les chatons de Duchesse ? :",
    answer1: "Marie, Berlioz et Thomas",
    answer2: "Marie, Edgra, Thomas",
    answer3: "Marie, Toulouse, Thomas",
    answer4: "Marie, Toulouse, Berlioz",
    correctAnswer: "Marie, Toulouse, Berlioz",
    passe: "false",
    categorie: "Série Disney"

  }, 

  {
    question: "Qui doit absolumment rentrer avant minuit? :",
    answer1: "Belle",
    answer2: "Cendrillon",
    answer3: "Arielle",
    answer4: "Blanche-neige",
    correctAnswer: "Cendrillon",
    passe: "false",
    categorie: "Série Disney"
  },

  {
    question: "Comment s'appelle le petit singe d'Aladdin ? :",
    answer1: "Abi",
    answer2: "Abo",
    answer3: "Aba",
    answer4: "Biba",
    correctAnswer: "Abo",
    passe: "false",
    categorie: "Série Disney"
  },

  {
    question: "Qui chante \"Hakuna Matata\" ? :",
    answer1: "Timon et Pumba",
    answer2: "Simon et Pumba",
    answer3: "Samba et Pimba",
    answer4: "Samba et Pumba",
    correctAnswer: "Timon et Pumba",
    passe: "false",
    categorie: "Série Disney"
  },

  {
    question: "Comment dit-on un \"chant noir\" en anglais ? :",
    answer1: "One black cat",
    answer2: "One cat black ",
    answer3: "A black cat",
    answer4: "One black cat",
    correctAnswer: "A black cat",
    passe: "false",
    categorie: "Culture en anglais"
  },

  {
    question: "Retrouvez l'orthographe correcte...:",
    answer1: "Anticonstitutionellement",
    answer2: "Anticonstitutionnellement",
    answer3: "Enticonstitutionnellement",
    answer4: "Enticonstitutionellement",
    correctAnswer: "Anticonstitutionnellement",
    passe: "false", 
    categorie: "Orthographe"
  },

  {
    question: "Completez la chanson : \"Est-ce que tu m'aimes\" de Maitre Guims",
    answer1: "Est-ce que tu maimes? j'sais pas si je t'aime",
    answer2: "Est-ce que tu maimes? Non je t'aime pas",
    answer3: "Est-ce que tu maimes? Oui je t'aime",
    answer4: "Est-ce que tu maimes? j'te déteste",
    correctAnswer: "Est-ce que tu maimes? j'sais pas si je t'aime",
    passe: "false",
    categorie: "Musique"
  }, 

  {
    question: "Sur quel continent se trouve Tokyo ?",
    answer1: "L'Afrique",
    answer2: "l'Océanie",
    answer3: "le Japon",
    answer4: "L'Asie",
    correctAnswer: "L'Asie",
    passe: "false", 
    categorie: "Culture Generale"
  },


  {
    question: "Quel est le plus gros poisson du monde ?",
    answer1: "La baleine bleue",
    answer2: "Le requin baleine",
    answer3: "L'orque",
    answer4: "Le cachalot",
    correctAnswer: "Le requin baleine",
    passe: "false", 
    categorie: "Culture Générale"
  },

  {
    question: "Lequel n'est pas un legume ?",
    answer1: "Carotte",
    answer2: "Tomate",
    answer3: "Concombre",
    answer4: "Celeri",
    correctAnswer: "Tomate",
    passe: "false",
    categorie: "Culture Génerale"
  },

  {
    question: "Comment dit-on en anglais : \" Quel est ton nom\"?",
    answer1: "What your name",
    answer2: "What is your name",
    answer3: "Who is your name",
    answer4: "What your name is",
    correctAnswer: "What is your name",
    passe: "false", 
    categorie: "Culture de l'anglais"
  },

  {
    question: " \" Je suis malade\" est le single à succès de ?",
    answer1: "Lara Fabian",
    answer2: "Dalida",
    answer3: "Celine Dion",
    answer4: "Garou",
    correctAnswer: "Dalida",
    passe: "false", 
    categorie: "Musique"

  },

 {
    question: " L'arbre qui produit le piment ...",
    answer1: "Le pimentier",
    answer2: "Le pigtier",
    answer3: "La pimenterie",
    answer4: "Le piment",
    correctAnswer: "Le pigtier",
    passe: "false",
    categorie: "Culture Générale"
  },

  {
    question: " \" Mme Bovary \" est l'oeuvre de ... ?",
    answer1: "Jean Jacques-Rousseau",
    answer2: "Gustave Flaubert",
    answer3: "Aimé Cesaire",
    answer4: "Victor Hugo",
    correctAnswer: "Gustave Flaubert",
    passe: "false",
    categorie: "Livres et Romans"
  },

  {
    question: " \" La croix du Sud \" est l'oeuvre de ... ?",
    answer1: "Jean Jacques-Rousseau",
    answer2: "Gustave Flaubert",
    answer3: "Aimé Cesaire",
    answer4: "Victor Hugo",
    correctAnswer: "Victor Hugo",
    passe: "false",
    categorie: "Livres et Romans"
  },

  {
    question: " L'âge légal pour signiqfier qu'on a atteint la majorite est ... ",
    answer1: "22 ans",
    answer2: "23 ans",
    answer3: "21 ans",
    answer4: "18 ans",
    correctAnswer: "21 ans",
    passe: "false",
    categorie: "Culture Générale"
  },

  {
    question: "Completer cette chanson de   \" Elle a les yeux revolver, ... \" ",
    answer1: "Elle a les yeux revolver, elle a le regard qui tue",
    answer2: "Elle a les yeux revolver, elle m'a touché c'est foutu",
    answer3: "Elle a les yeux revolver, elle m'a mis à terre",
    answer4: "Elle a les yeux revolver, je suis resté bouche b",
    correctAnswer: "Elle a les yeux revolver, elle a le regard qui tue",
    passe: "false",
    categorie: "Art et Musique"
  },

  
];

//Pour la largeur 
var width = 0;  


// Une varible pour gérer le temps de début dd'une question 
var Tempsdebut;
 var progressAffiche 

 var scope2; 


//Variable contenant le setInterval pour afficher une question 
var scope1; 
debut();

//Cette fonction permet d'afficher le quizz dans la page HTML 
// Elle est appelée directement à l'ouverture de la 2ème page (après avoir cliquer sur 'Commencer le jeu')

function afficherQuiz() {
  clearTimeout(progressAffiche);
  progressAffiche = setTimeout(putWidthTo0, 1000);
  clearInterval(id);
  id = setInterval(progressBar,1300);



  music.style.display = "none";
  music.play();


 var nextQuestion = Math.floor(Math.random() * mesQuestions.length ) + 0;
 if(mesQuestions[nextQuestion].passe == "false"){
    mesQuestions[nextQuestion].passe = "true"; 

    var tab =[]; 
    tab.push(
    `
      <div id=progressBar class="progressBar">
        <div class="pts5" id="pts5">5</div>
        <div class="pts4" id="pts4">4</div>
        <div class="pts3" id="pts3">3</div>
        <div class="pts2" id="pts2">2</div>
        <div class="pt1" id="pt1">1</div>
      </div>
      <div class ="slide ">
        <div class="categorie">Categorie: ${mesQuestions[nextQuestion].categorie}</div>
        <div class="question">${mesQuestions[nextQuestion].question}</div>
        <div class="reponses">
            <input type="radio" name="answer" value="${mesQuestions[nextQuestion].answer1}" id="answer1"  >
            <label for="answer1"> ${mesQuestions[nextQuestion].answer1}<br></label>
          
          
            <input type="radio" name="answer" value="${mesQuestions[nextQuestion].answer2}" id="answer2">
            <label for="answer2">  ${mesQuestions[nextQuestion].answer2}<br> </label>
         

          
            <input type="radio" name="answer" value="${mesQuestions[nextQuestion].answer3}" id="answer3">
            <label for="answer3">${mesQuestions[nextQuestion].answer3}<br> </label>
         

            <input type="radio" name="answer" value="${mesQuestions[nextQuestion].answer4}" id="answer4">
            <label for="answer4">${mesQuestions[nextQuestion].answer4}<br></label>       
          
          
        </div>

       </div>
    `); 

  quizContainer.innerHTML= tab.join('');
  mistake.style.display = "none";
  afficherScore(nextQuestion);
  

  // AJout de la musique 
 
 
  //On incrémente le nombre de questions: 
  NombreQuest++;

  //On appelle la fonction de fin
  finQuizz();

 
  Tempsdebut = new Date().getTime();
     //clearTimeout(scope2); 
  //clearTimeout(progressAffiche);
}

 else{
  nextQuestion = Math.floor(Math.random() * mesQuestions.length ) + 0;
  console.log(mesQuestions[nextQuestion].passe);
  }
  
}



function debut (){
  scope1 = setInterval(afficherQuiz, 31000);
  afficherQuiz();
  
  
}


// Appel de la fonction afficherScore() pour afficher le score 
function afficherScore(n){

  // On recupère tous les radios pour les mettre dans un tableau 
  radios = document.getElementsByTagName('input'),

  //Une variable pour avoir la longueur du tableau 
  radiosLength = radios.length ;
  

  // On parcourt chaque element du tableau
    for (var i = 0; i < radiosLength ; i++){
     
     // Au click...
      radios[i].addEventListener('click', function(){
       var inputs = document.getElementsByTagName('input'),
      
       // On recupère tous les radios pour les mettre dans un tableau 
        inputsLength = inputs.length;

        for (var i = 0 ; i < inputsLength ; i++) {

            // On vérifie si un radio est sélectionné 
          if (inputs[i].type == 'radio' && inputs[i].checked) {

              // On vérifie que la valeur sélection corresponde à la valeur exacte 
            if(inputs[i].value == mesQuestions[n].correctAnswer){

              // Déclaration de la variable pour savoir à quel moment il a trouvé il reponse 
              var tempsFin;
              tempsFin = new Date().getTime();

              var temps = tempsFin - Tempsdebut; 
              //console.log(fin);
              //console.log(temps);

              if(temps<=5000){
                // On incremente le score
              score = score + 5 ; 
              }
              else if(temps<=10000){
                // On incremente le score
              score = score + 4 ; 
              }
              else if(temps<=15000){
                // On incremente le score
              score = score + 3; 
              }
              else if(temps<=20000){
                // On incremente le score
              score = score + 2 ; 
              }
              else if(temps<=30000){
                // On incremente le score
              score = score + 1 ; 
              }
              // On l'affiche
  
              scoreContainer.innerHTML= score; 

              
              mistake.innerHTML = "Correct answer !! ";
              mistake.style.color="green";

              mistake.style.display = "block";
              clearTimeout(scope2);
              scope2 = setTimeout(afficherQuiz, 1000);
           

            }

            else{

              mistake.innerHTML = "Wrong answer !! ";
              mistake.style.color="red";

              mistake.style.display = "block";

              score = score - 2 ; 

              // On l'affiche
  
              scoreContainer.innerHTML= score; 

            }
          }
        }
                
      }, false);  
    }  
  
  }

// Fonction pour remettre la largeur de la barre de progression à 0 
function putWidthTo0(){
  clearInterval(id);
  width = 0; 
       
 
  id= setInterval(progressBar,1000);
  
} 


function progressBar(){


  //Pour le progressBar
var bar = document.getElementById('progressBar'); 

var pt5 = document.getElementById('pts5'); 

var pt4 = document.getElementById('pts4'); 

var pt3 = document.getElementById('pts3'); 

var pt2 = document.getElementById('pts2'); 

var pt1 = document.getElementById('pt1'); 


  if(width == 28){
    clearInterval(id);
  }

  else if(width <= 4){
    width++; 
    pt5.style.width = width + '%';   
    pt5.style.background = "rgb(221, 12, 180)";

   
  }
  else if(width > 4 && width <= 7 ){
    
    width++; 
    pt4.style.width = width + '%'; 
    pt4.style.background = "rgb(221, 12, 180)";


  }

  else if(width >7 && width <= 14 ){

    width++; 
    pt3.style.width = width + '%';  
    pt3.style.background = "rgb(221, 12, 180)";

  }

  else if(width >14 && width <= 22){

    width++; 
    pt2.style.width = width + '%'; 
    pt2.style.background = "rgb(221, 12, 180)";


  }

  else if(width > 22 && width <= 28){

    width++; 
    pt1.style.width = width + '%';  
    pt1.style.background = "rgb(221, 12, 180)";


  }


}


/* Fonction qui marque la fin du quizz.
En effet, le quizz s'arrête lorsq'un a déjà repondu à 10 questions.  
*/

function finQuizz(){
  if(NombreQuest == 10){

    clearInterval(id); 
    clearInterval(scope1);
    clearTimeout(progressAffiche);
       

    music.style.display = "none";


    var joueur = prompt("Entrez votre nom") ; 

   
 

//Une variable pour definir le statut de la personne 
var statut= "none"  ; 
  if(score >= 50){
    statut = "Incollable, Vous alors vous êtes  un calé"; 
  }
  if(score >= 40 && score<50){
    statut = "Champion, un winner !"; 
  }
  if(score >= 30 && score < 40){
    statut = "Battant, Vous savez où vous allez "; 
  }
  if(score >= 20 && score < 30){
    statut = "Pas mal, c'est déjà quelque chose"; 
  }
  if(score >= 10 && score < 20){
    statut = "Plutot Minable, il y'a encore du boulot à faire"; 
  }
  if(score >= 0 && score < 10){
    statut = "Très Minable, vous ferez mieux la prochaine fois"; 
  }
    
  var motFin = "Game Over!! Bravo "+joueur+", Vous avez eu "+score ; 

  var tab = []; 
  tab.push(` <div class="fin">
                <div class="motFin">${motFin}</div>
                <div class="statut"> Statut: ${statut}</div>
                <div class="img"><img src ="image/feu.gif" alt="un feu d'artifice"/></div>
               <input type="button" value="Recommencer?" onclick="reloadGame();" class="reload"/>
              </div>
          `);
 
  quizContainer.innerHTML = tab.join(''); 
  
  }
  
}


function reloadGame(){
  NombreQuest = 0; 
  score = 0;
  
   scoreContainer.innerHTML= score; 
  console.log(NombreQuest);
  debut();

}

