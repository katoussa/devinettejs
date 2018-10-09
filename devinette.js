/* 
Activité : jeu de Devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

//console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

//Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var nbreEssais;
var nbreEssaiMax = 6;

do{
    var saisie = Number(prompt('entrez un nombre entre 1 et 100:'));
    nbreEssais++;

    if (saisie>solution){
        console.log(saisie + 'est trop grand');
    }

    if (saisie<solution){
        console.log(saisie + 'est trop petit');
    }
    
}while ((saisie !== solution) && (nbreEssais < nbreEssaiMax))

if (saisie === solution){
    console.log('Bravo! La solution était bien' + solution + 'Vous avez trouvé en' + nbreEssais + 'coups.');
}
if (nbreEssais === nbreEssaiMax){
    console.log("Désolé, vous n'avez pas trouvé. La solution était:" + solution);
}
