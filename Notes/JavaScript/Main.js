$(document).ready(function() {
    
});

function AddingNote(){
    var tempo = Tempo();
    ChangeContent();
}



function Tempo(){
    var today = new Date();
    var date = +today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes();
    var dateTime = date+' '+time;
    console.log(dateTime);
    return dateTime;
}

function ChangeContent(){
    var nocontentselected = document.getElementById ("notextselected");
    nocontentselected.remove();
    var elementtitle = document.createElement("P");
    document.getElementById("content").appendChild(elementtitle);
    elementtitle.classList.add("titolonota");
    elementtitle.setAttribute("id", "titleofnote");
    elementtitle.textContent += "Inserisci il titolo della tua nota";
    elementtitle.contentEditable = true;

    var elementtext = document.createElement("P");
    document.getElementById("content").appendChild(elementtext);
    elementtext.classList.add("testonota");
    elementtext.setAttribute("id", "textofnote");
    elementtext.textContent += "Inserisci il testo della tua nota";
    elementtext.contentEditable = true;
}