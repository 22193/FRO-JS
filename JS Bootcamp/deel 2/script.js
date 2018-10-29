"use strict";

// Declare variables
var student = "Idriss El Mellaoui";
var year = 2018;
var group = "MD2A";
var title = "JavaScript Bootcamp " + year;

// Init
instruction2();



//Instructions

function instruction2() {
    document.title = title;
    document.getElementById("pageHeader").innerText = title;

    document.getElementById("group").innerText = group;

    // var elements = document.getElementsByClassName("year");
    // for (var i = 0; i < elements.length; i++) {
    //     elements[i].innerText = year;
    // }

    var elements = document.getElementsByClassName("student");
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerText = student;
    }
}

function instruction3() {
    var description = "Na op de link 'Click Event' te hebben geklikt werden de header,"
        + " de beschrijving en de oplossing van de opdracht aangepast";

    document.getElementById("instructionHeader").innerText = "Opdracht 3";
    document.getElementById("instructionDescription").innerText = description;
    document.getElementById("instructionResult").innerText = "";
}

function getDate(){
  var today = new Date();
  var year = today.getFullYear() -1 ;
  var year2 = today.getFullYear();
  document.getElementById("year").innerHTML = year + " &#45";
  // document.getElementById("year2").innerHTML = year2;
    // for (var i = 0; i < year2.length; i++)
    // elements[i].innerText = year2;

  }



getDate();

function instruction5() {
  var description = "Bepaal de periode op basis van het startjaar en het huidige" +
  "jaar en voer een klein testje uit voor verschillende startjaren: vorige jaar en volgende jaar";

    var hjaar = "";

  document.getElementById("instructionHeader").innerText = "Opdracht 6";
  document.getElementById("instructionDescription").innerText = description;
  document.getElementById("instructionResult").innerText = "";

}
