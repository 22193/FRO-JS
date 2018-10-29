"use strict";

// Declare variables
var student = "Idriss El Mellaoui";
var year = 2018;
var group = "MD2A";
var title = "JavaScript Bootcamp " + year;
var currentYear = (new Date()).getFullYear();
var period = getPeriod(2018, currentYear)


// Init
instruction4();
instruction5();


//Instructions

function instruction3() {
    var description = "Nadat op de link 'Click Event' is geklikt worden de header,"
        + " beschrijving en oplossing van de opdracht aangepast";
    var result = "De header en beschrijving zijn aangepast: zie hierboven";

    updateContent("Opdracht 3 - Click Event", description, result);
}

function instruction4() {
    // function instruction2 has been replaced by function instruction4
    document.title = title;
    document.getElementById("pageHeader").innerText = title;

    document.getElementById("group").innerText = group;

    setValueByClassName("year", year);
    setValueByClassName("student", student);
}

function instruction5() {
    setValueByClassName("period", period);
}

function instruction6() {
    var currentYear = (new Date()).getFullYear();
    var description = "Bepaal de periode op basis van de het startjaar en het huidige jaar en voer een klein testje uit voor verschillende startjaren: vorige jaar, huidige jaar en volgende jaar";

    var result = "Huidige jaar: " + currentYear + "<br/>";
    result += "Startjaren: " + "<br/>";
    for (var i = -1; i <= 1; i++) {
        var startYear = currentYear + i;
        var period = getPeriod(startYear, currentYear);
        result += " - " + startYear + ": " + period + "<br/>";
    }

    updateContent("Opdracht 6 - Periode testen", description, result);
}

function instruction7() {
    var description = "Bepaal de dag van vandaag op drie verschillende manieren: 1)if/else, 2)switch en 3)array";
    var result = instruction7a() + "<br/>";
    result += instruction7b() + "<br/>";
    result += instruction7c() + "<br/>";
    result += "<hr/>";
    //result += "De beste manier is gebruik maken van een array!!!";
    result += "De beste manier is gebruik maken van ..... omdat ......";
    updateContent("Opdracht 7 - Dag in de week", description, result);
}

function instruction7a() {
    var dayNumber = (new Date()).getDay();
    var day = "";
    if (dayNumber === 0) {
        day = "Zondag";
    }
    else if (dayNumber === 1) {
        day = "Maandag";
    }
    else if (dayNumber === 2) {
        day = "Dinsdag";
    }
    else if (dayNumber === 3) {
        day = "Woensdag";
    }
    else if (dayNumber === 4) {
        day = "Donderdag";
    }
    else if (dayNumber === 5) {
        day = "Vrijdag";
    }
    else if (dayNumber === 6) {
        day = "Zaterdag";
    }

    return "Door gebruik te maken van if/else weet ik dat het vandaag " + day + " is.";
}

function instruction7b() {
    var dayNumber = (new Date()).getDay();
    var day = "";
    switch (dayNumber) {
        case 0:
            day = "Zondag";
            break;
        case 1:
            day = "Maandag";
            break;
        case 2:
            day = "Dinsdag";
            break;
        case 3:
            day = "Woensdag";
            break;
        case 4:
            day = "Donderdag";
            break;
        case 5:
            day = "Vrijdag";
            break;
        case 6:
            day = "Zaterdag";
            break;
        default:
            day = "Geen dag";
    }

    return "Ook wanneer ik switch gebruik weet ik dat het vandaag " + day + " is.";
}

function instruction7c() {
    var dayNumber = (new Date()).getDay();
    var days = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"]
    var day = days[dayNumber];
    return "En tenslotte door gebruik te maken van een array weet ik ook dat het vandaag " + day + " is.";
}

function instruction8() {
    var description = "Toon een ongesorteerde array met namen van kleuren. Toon vervolgens de oplopend (A-Z) gesorteerde array en de aflopend (Z-A) gesorteerde array";
    var colors = ["Rood", "Geel", "Blauw", "Groen", "Zwart"];
    var result = "Kleuren: " + colors + "<br />";
    var sorted = colors.sort();
    result += "Gesorteerd (A-Z): " + sorted + "<br />";
    var sortedReverse = colors.reverse();
    result += "Gesorteerd (Z-A): " + sortedReverse + "<br />";
    updateContent("Opdracht 8 - Array sorteren", description, result);
}

function instruction9() {
  document.getElementById("instructionResult").innerHTML = "";
  document.getElementById("instructionDescription").innerHTML = "Voeg elementen toe: image en button";
  var img = document.createElement("IMG");
  img.setAttribute("src", "photo.png");
  img.setAttribute("width", "200");
  img.setAttribute("height", "250");
  img.setAttribute("alt", "Me");
  document.getElementById("instructionResult").appendChild(img);
  // var btnnaam = ["Links","Rechts"];
  // for (var i = 0; i < btnnaam.length; i++) {
    var button = document.createElement("BUTTON");
    button.innerText = "Links";
    button.setAttribute("id", "button1");
    document.getElementById("instructionResult").appendChild(button);
    var button2 = document.createElement("BUTTON");
    button2.innerText = "Rechts";
    button2.setAttribute("id","button2");
    document.getElementById("instructionResult").appendChild(button2);
    button.onclick = function() { alert('Links'); }
    button2.onclick = function() { alert('Rechts'); }
  // }
}

// Sub functions
function instruction10() {
  document.getElementById("instructionDescription").innerHTML = "String bewerkingen";
  var bewerknaam = "Mediacollege Amsterdam";
  var lengtenaam = bewerknaam.length;
  var spatienaam = bewerknaam.substr(1);
  var spatielengte = spatienaam.length;
  var trnaam = spatienaam.trim();
  var spatielengte2 = trnaam.length;
  var splitdenaam = bewerknaam.split(" ").length;
  var woord1 = trnaam.substr(0, 12).split(",");
  var woord2 = trnaam.substr(12, 22).split(",");
  document.getElementById("instructionResult").innerHTML = "De string waar de bewerkingen op gedaan worden is: " + bewerknaam +  "<br>" + "De lengte van de string is: " + lengtenaam +  "<br>" +
   "De eerste letter is vervangen door een spatie: " + spatienaam + "<br>" + "De lengte van de string is nog steeds: " + spatielengte + "<br>" + "Alle spaties aan begin en eind zijn nu verwijderd: " + trnaam + "<br>" + "De lengte van de string is nu: " + spatielengte2 + "<br>" + "Het aantal woorden is: " + splitdenaam
   + "<br>" + "Eerste Woord is: " + woord1 + "<br>" + "Tweede Woord is: " + woord2 ;
}

function instruction11() {
  var description = "Fout netjes afhandelen";
  var result;
  try {
    alert(sum(10, 20));
  }
  catch(err) {
    result = "ReferenceError: " + err.message;
  }
  finally {
    result += "<br>" + "finally block executed";
  }

  updateContent("Opdracht 11 ReferenceError", description, result);
}

// Example for documentation

var a = exampleFunction(5, 4);

/**
 * This is an example of a function.
 * @param {number} a - this is a 1st number value.
 * @param {number} b - this is a 2nd number value.
 * @returns {string} Hello
 */
function exampleFunction(a, b) {
    return 'Hello ' + (a * b);
}

/**
 * Sets the innerText property with a given value for all elements with a given class name.
 * @param {string} className - the innerText property of all elements with this class name will be changed.
 * @param {number} value - the value which will be used to update de elements.
 */
function setValueByClassName(className, value) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerText = value;
    }
}

// Instruction 4
function updateContent(header, description, result) {
    document.getElementById("instructionHeader").innerText = header;
    document.getElementById("instructionDescription").innerHTML = description;
    document.getElementById("instructionResult").innerHTML = result;
}

// Instruction 5
function getPeriod(startYear, currentYear) {
    var result = startYear;
    if (currentYear > startYear) {
        result += "-" + currentYear;
    }
    return result;
}
