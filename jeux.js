// un prompt pour indiquer au premier chargement le but du jeu
var nombre = prompt("Vous devez trouver un nombre en 6 coups maximum!");
// Génère un nombre entier de 1 à 100
var nombreAleatoire = Math.floor(Math.random() * 100) + 1;

// // variable nombre d'essai
 var nombreEssai = 0;

// fonction du formulaire
  function validerLeFormulaire(){
// décalaration de la variable nombre
    var nombre=document.forms["monFormulaire"]["nombre"].value;
// Alerte si l'utilisateur ne saisi pas un nombre
    if (isNaN(nombre)){
      alert('Vous devez indiquer un nombre !!!');
      return false;
      }

// on incremente nombreEssai a chaque tour
      nombreEssai ++ ;
// on limite le nombre d'essai
  if(nombreEssai < 6 ) {
// Alerte si l'utilisateur ne rentre pas de donnée
    if(nombre == null || nombre == ""){
        alert('Un nombre entre 1 et 100 doit être saisi');
        return false;
    }
// Alerte si l'utilisateur ne saisi pas un nombre
    // if (isNaN(nombre)){
    //       alert('Vous devez indiquer un nombre !!!');
    //       return false;
    // }
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
      alert('Vous avez perdu !!! il fallait trouver :' + nombreAleatoire);
      return false;
    }
  }
