// un prompt pour indiquer au premier chargement du fichier html le but du jeu
var nombre = prompt("Vous devez trouver un nombre mystère en 6 coups maximum!");

// Génère un nombre entier de 1 à 100
var nombreAleatoire = Math.floor(Math.random() * 100) + 1;

// // variable nombre d'essai
 var nombreEssai = 0;

// fonction du formulaire
  function validerLeFormulaire(){
// décalaration de la variable nombre
      var nombre =document.forms["monFormulaire"]["nombre"].value;

// L'Alerte ci-dessous est placé avant l'incrémentation de ma variable nombreEssai
// pour ne pas comptabiliser les coups en cas de fausse manip ou autre.
// Cela permet aux joueurs d'avoir bien 6 coups possible durant la partie.

// Alerte si l'utilisateur ne rentre pas de donnée ou ne saisi pas un nombre
    if(nombre == null || nombre == "" || isNaN(nombre)){
        alert('Vous devez indiquer un nombre !!!');
        return false;
    }

// Ensuite la partie commence ::
// on incremente nombreEssai a chaque tour
      nombreEssai ++ ;
// on limite le nombre d'essai à 6
  if(nombreEssai < 6 ) {
// Alerte si l'utilisateur saisi un nombre trop petit
    if ( nombre < nombreAleatoire){
        alert('Le nombre indiqué est trop petit !!!');
        return false;
    }
// alerte si l'utilisateur saisi un nombre trop grand
    if( nombre > nombreAleatoire){
      alert('Le nombre indiqué est trop grand !!!');
      return false;
    }
// Alerte si l'utilisateur saisi le même nombre que celui généré par ma variable nombreAléatoire
    if( nombre == nombreAleatoire){
      alert('Vous avez GAGNE !!!');
      return true;
    }
  }else {
// Alerte nombre d'essai maximum atteint
      alert ('Vous avez perdu !!! il fallait trouver : ' + nombreAleatoire);
      return false;
    }
  }
