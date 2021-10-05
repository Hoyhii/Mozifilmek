let filmadatok = [];

class Film{
    constructor(nev,rendezo,kiadas){
        this.nev = nev;
        this.rendezo = rendezo;
        this.kiadas = kiadas;
    }

}

function tombbeTarolas(){
    
    let nev = document.getElementById('nev').value;
    let rendezo = document.getElementById('rendezo').value;
    let kiadas = document.getElementById('kiadas').value;

    if(nev != null && rendezo != null && kiadas != null){
        let film = new Film(nev,rendezo,kiadas);
        filmadatok.push(film);
    }

    document.getElementById('nev').value = "";
    document.getElementById('rendezo').value = "";
    document.getElementById('kiadas').value = "";  
}

function tablazatLetrehozasa(){
    let elem = "<table class='table text-center table-bordered'><tr><th>Név</th><th>Rendező</th><th>Kiadasi ev</th></tr>";
    for (let i = 0; i < filmadatok.length; i++) {
        elem+= "<tr><td>" + filmadatok[i].nev + "</td><td>" + filmadatok[i].rendezo + "</td><td>" + filmadatok[i].kiadas + "</td></tr>";
        
    }
    elem += "</table>";
    document.getElementsByTagName('table').innerHTML = "";
    document.getElementById('tabla').innerHTML = elem;
}


document.getElementById('hozzaad').addEventListener('click', tombbeTarolas);
document.getElementById('listazas').addEventListener('click', tablazatLetrehozasa);