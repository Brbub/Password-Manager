var button = document.getElementById("submit");
var para = document.getElementById("return");
var slider = document.getElementById("myRange");


function randomPassword(length){
    var values = ["A","B","C","D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S","T","U","V", "W", "X", "Y", "Z","a","b","c","d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t","u","v", "w", "x", "y", "z","!","@","#","$","%","^","&","*","1","2","3","4","5","6","7","8","9","0"];
    var password="";
    var i = 0;
        while (i < length){
    randint = Math.floor(Math.random() * Math.floor(values.length));
    password += (values[randint]);
    i+=1;
    }
    console.log(password);
    return(password);
}

function final(){
    para.innerHTML= randomPassword(slider.value);
}
