var Password_List = document.getElementById("passwords")
var Username_List = document.getElementById("emailsusernames");
var add_button = document.getElementById("add");
var data = new Object();
add_button.onclick = function ead(){
    var input = document.getElementById("username").value;
    var arr = input.split("/");
    console.log(arr);
    data.Passwords = star_adder(arr[1]);
    data.Usernames = arr[0];
    var password12 = star_adder(arr[1]);
    Password_List.innerHTML += password12 + "<br />";
    Username_List.innerHTML += arr[0] + "<br />";
    }
function star_adder(password){
    var value = "" ;
    value += password.charAt(0);
    var i = 0;
    while(i < (password.length - 2)){
        value += "*";
        i += 1;
    }
    value += password.charAt(password.length - 1);
    return(value);
}

chrome.storage.sync.set({ data: "Pass/User" }, function(){
    //  A data saved callback omg so fancy
});
chrome.storage.sync.get(/* String or Array */[data], function(items){
   console.log(items)
});



function load(){
var i = 0;
var j = 0;
console.log(New.Passwords,data.Usernames);

while(i < New.Passwords.length){
    Password_List += Passwords[i];
    i+= 1;
}
while(j < New.Usernames.length){
    Username_List += Passwords[j];
    j+=1;
}
}
load();