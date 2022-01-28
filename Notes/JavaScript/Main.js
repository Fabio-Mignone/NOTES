$(document).ready(function() {
    
});

function AddingNote(){
    ChangeContent();
    CreateNoteOnLeft();
}



function Tempo(){
    var today = new Date();
    var date = +today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes();
    var dateTime = date+' '+time;
    console.log(dateTime);
    return dateTime;
}

function RemovePlaceHolder(){
    var nocontentselected = document.getElementById ("notextselected");
    nocontentselected.remove();
}

function changetext(){
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

function ChangeContent(){
    var placeholder = document.getElementById ("notextselected");
    if(typeof(placeholder) != 'undefined' && placeholder != null){
        RemovePlaceHolder();
        changetext();
    }
    else{
        changetext();
    }
}

function CreateNoteOnLeft() {
    var nota = document.createElement("P"); 
    document.getElementById("notes").appendChild(nota);  
    nota.classList.add("notaonleft");
    nota.setAttribute("id" , "notaleft");
    let btn = document.createElement("button");
    btn.classList.add("BtnAdd");
    btn.innerHTML = "Salva";
    nota.appendChild(btn);
}

function Salvataggio(){
    var tempo = Tempo();
    var titolo = document.getElementById("titleofnote").textContent;
    document.getElementById("notaleft").innerHTML += (titolo + " " + tempo);
    console.log("saved");
    alert("NOTA SALVATA CORRETTAMENTE");
}