// HAMBURGER //
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// webfrontload //
webFont.load({google:{familie: ["Spectral","serif"]}});

