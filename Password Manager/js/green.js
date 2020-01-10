var buttonz = document.getElementById("but");
var returns = document.getElementById('return');
var sites = chrome.topSites.MostVisitedURLs;
window.onload = function topSites(){
    
    for(i in sites){
        returns.innerHTML += sites[i] + "<br />";
    }
}
console.log(sites)