var jaar = document.getElementById("Jaar").innerHTML = "2018";
var naamstudent = document.getElementById("naamStudent").innerHTML = "Idriss El Mellaoui";
var klas = document.getElementById("Klas").innerHTML = "MD2A";
var Link =  document.getElementById("link");



function instruction3() {
  Link.addEventListener('click', ()=>{
    document.getElementById("titelh2").innerHTML = "Click Event";
    document.getElementById("opdrachtP").innerHTML = "Door op link ‘Click event’ te klikken wordt de content aangepast";
    document.getElementById("Uitwerking").innerHTML = "";
    })
}

instruction3();
