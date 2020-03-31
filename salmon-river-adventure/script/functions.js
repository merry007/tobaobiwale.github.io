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

// Current Date //
var d = new Date();
var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];