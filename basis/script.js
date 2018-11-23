"use strict";

// Declare variables
const studentName = "Idriss El Mellaoui";
const studentGroup = "MD2A";
const year = main.year;

// Init
init();

// Functions


function init() {
    // Set content based on variables
    document.getElementById("studentName").innerText = studentName;
    var studentNames = document.getElementsByClassName("studentName");
    var studentClass = document.getElementsByClassName("studentGroup");
    var thisYear = document.getElementsByClassName("pageYear");
    for (var i = 0; i < studentClass.length; i++) {
       studentClass[i].innerText = studentGroup;
    }
    for (var i = 0; i < thisYear.length; i++) {
      thisYear[i].innerText = year;
    }
    for (var i = 0; i < studentNames.length; i++) {
      studentNames[i].innerText = studentName;
    }
    // Add navigation link to the navigation panel on the left of the page
    main.addContenItem("Inleiding", intro);
    main.addContenItem("Variabelen", variabelen);
    // Activate the first navigation link
    intro();
}

function intro() {
    let description = "Je bent in dienst van energiemaatschappij Energy Solutions en"
        + " krijgt de opdracht om een webpagina te maken die de energiestanden toont van een aantal adressen."
        + " De data wordt via een webAPI beschikbaar gesteld. "
        + " Dit gebeurt in kleine stapjes en uiteindelijk is het de bedoeling om de data op een nette manier te presenteren."
        + "<p>Succes!!!</p>";
    main.updateContent("Inleiding", description);

    // Set link to the element in the DOM
    var element = document.getElementById("contentPlaceholder");

    // Create the image and set some properties
    var img = document.createElement("img");
    img.src = "photo.jpg";
    img.style.width = "100px";

    // Create the label
    var label = document.createElement("label");
    label.innerHTML = "Idriss El Mellaoui";

    // Create the paragraph and add the image and label to it
    var p = document.createElement("p");
    p.appendChild(img);
    p.appendChild(document.createElement("br"));
    p.appendChild(label);

    // Add the paragraph to the DOM
    element.appendChild(p);
}

    function variabelen() {
      var postcode = "1028GL";
      var huisnummer = "18";
      var datum = "20/12/2018";
      var gas = "21582,924m³";
      var water = "01952,823m³";
      var elektriciteit = ["102382kWh", "023682kWh"];
      var slimmeMeter = " Dit is gedaan door een slimme Meter"
      Boolean(slimmeMeter);
      let description = "<h3>Verslag van de meting</h3>";
      let description1 = "Voor postcode " + postcode + " en huisnummer " + huisnummer + " zijn op " + datum + " metingen gedaan en dit zijn de resultaten: "
      + " <br> " + " gas: " + gas + " <br> " + " water: " + water + " <br> " + " elektriciteitLaag: " + elektriciteit[1] + " <br> " + slimmeMeter;
      var tekens = description.length;
      var woorden = description.split(' ').length;
      var sub = description1.replace(/ .*/, '');
      var last = description1.replace(/ .*/, '');
      let description2 = "<h3>Nog wat eigenschappen</h3>"
      + "Het Verslag heeft " + tekens + " tekens, " + woorden + " woorden " + " het eerste woord is " + sub + " en het laatste woord is " + last;
      var result = description + description1 + description2;
      main.updateContent("Variabelen", result);
}
