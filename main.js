/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

var i = 1;
document.getElementById("arrowleft").onclick = function(){arrowleft()};
document.getElementById("arrowright").onclick = function(){arrowright()};
function arrowright () {
    if (i===1) {
        document.getElementById("firstslide").style.display = "none";
        document.getElementById("secondslide").style.display = "flex";
        i++;
    }
    else if (i===2) {
        document.getElementById("secondslide").style.display = "none";
        document.getElementById("thirdslide").style.display = "flex";
        i++;
    }
    else if (i===3) {
        document.getElementById("thirdslide").style.display = "none";
        document.getElementById("fourthslide").style.display = "flex";
        i++;
    }
    else if (i===4) {
        document.getElementById("fourthslide").style.display = "none";
        document.getElementById("firstslide").style.display = "flex";
        i = 1;
    }
}
function arrowleft () {
    if (i===1) {
        document.getElementById("firstslide").style.display = "none";
        document.getElementById("fourthslide").style.display = "flex";
        i = 4;
    }
    else if (i===2) {
        document.getElementById("secondslide").style.display = "none";
        document.getElementById("firstslide").style.display = "flex";
        i--;
    }
    else if (i===3) {
        document.getElementById("thirdslide").style.display = "none";
        document.getElementById("secondslide").style.display = "flex";
        i--;
    }
    else if (i===4) {
        document.getElementById("fourthslide").style.display = "none";
        document.getElementById("thirdslide").style.display = "flex";
        i--;
    }
}
