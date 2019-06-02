function toggleName() {
  var x = document.getElementById("mynameis");

  if (x.innerHTML.includes("Blank")) {
    x.innerHTML = "Hi my name is Garf.";
  } else {
    x.innerHTML = "Hi my name is Blank.";
  }
}

//Global Dark Mode Var
var mode = "normal";
//end global dark

function darkMode() {
  var change = document.getElementsByClassName("whole_site");
  var change2 = document.getElementById("top_page");
  /*var change3 = document.getElementsByClassName("navbartext");*/
  var change4 = document.getElementById("siteTitle");
  var change5 = document.getElementById("topNavbar");
  var change6 = document.getElementById("mynameis");
  
/*  .getElementsByTagName()
var change7 = document.getElementsByClassName("toggle-menu");*/

  if (mode == "normal") {
    for (var i = 0; i < change.length; i++) {
      change[i].style.backgroundColor = "black";
    }

   /*  for (var k = 0; k < change3.length; k++) {
      change3[k].style.color = "white";
    }*/

    /* for (var L = 0; L < change7.length; L++) {
      change7[L].style.color = "black";
    }*/

    
    change2.style.backgroundColor = "black";
    change4.style.color = "white";
    change6.style.color = "white";

    mode = "dark";
  } else if (mode == "dark") {
    for (var j = 0; j < change.length; j++) {
      change[j].style.backgroundColor = "white";
    }

    /* for (var l = 0; l < change3.length; l++) {
      change3[l].style.color = "black";
    }*/

    /* for (var Z = 0; Z < change7.length; Z++) {
      change7[Z].style.color = "white";
    }*/
    
    change2.style.backgroundColor = "rgba(255,255,255,0.9)";
    change4.style.color = "black";
    change6.style.color = "black";

    mode = "normal";
  }
}


/* 
function navBarMobile() {
	
	if(document.getElementById('topNavbar')){
		document.getElementById('topNavbar').id = 'topNavMobile';
	}
	else {
		document.getElementById('topNavMobile').id = 'topNavbar';
	}
	
}
*/
