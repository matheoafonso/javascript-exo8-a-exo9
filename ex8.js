var div = document.getElementById("1")
var txt = "nouveau texte"
function modiftext(div, txt){
    alert("je vais modifier la div")
    div.innerHTML = (txt);
}
modiftext(div, txt)