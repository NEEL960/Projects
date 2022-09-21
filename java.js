var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname,el){
for(tablink of tablinks){
    tablink.classList.remove("active-link");
}
for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
}
el.classList.add("active-link");
var selectedTab=document.getElementById(tabname);
selectedTab.classList.add("active-tab");


// var openmenu = document.getElementById("openmenu");
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";  
}
function closemenu(){
    sidemenu.style.right="-200%";
}
}
