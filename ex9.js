/*var txt = "nouveau texte"

function modifText(txt) {
    alert("je vais modifier la div")
    document.getElementsByName("nom").innerText = txt;
}

modifText(txt)
*/

var txt = "Nouveau texte";

function modifText(txt) {
    alert("Je vais modifier les div");
    
    var elements = document.getElementsByClassName("nom");

    for (var i = 0; i < elements.length; i++) {
        elements[i].innerText = txt;
    }
}

modifText(txt);