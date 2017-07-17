//tabbed panels
//declare variables to hold all the links and panel elements
var tabLinks;
var tabPanels;
window.onload = function(){
  //set initial panel state
  tabLinks = document.getElementById("tabs").getElementsByTagName("div");
  tabPanels = document.getElementById("containers").getElementsByTagName("div");
  displayPanel(tabLinks[0]);
  //listen for clicks on tabs
  for(var i=0; i< tabLinks.length;i++){
    tabLinks[i].onclick = function(){
      displayPanel(this);
      return false;
    }
    tabLinks[i].onfocus = function(){
      displayPanel(this);
      return false;
    }
  }
}
function displayPanel(tabToActivate){
  //respond to tab clicks
  for(var i=0;i<tabLinks.length;i++){
    if(tabLinks[i] == tabToActivate) {
      tabLinks[i].classList.add("active");
      tabPanels[i].style.display = "block";
    } else {
      tabLinks[i].classList.remove("active");
      tabPanels[i].style.display = "none";
    }
  }
  //change panel display and activate tabs
}
