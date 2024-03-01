var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function openTab(tabName){
    for (var i = 0; i < tablinks.length; i++){
        tablinks[i].classList.toggle("active-link", tablinks[i] === event.currentTarget);
        tabcontents[i].classList.toggle("active-tab", tabcontents[i].id === tabName);
    }
}