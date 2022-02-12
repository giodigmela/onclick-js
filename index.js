var text_box = document.getElementById("text");
var button = document.getElementById("show-more");

button.onclick = function(){

    if(text.className == "open"){
        text.className = "";
        button.innerHTML = "show more";
    } else{
        text.className = "open";
        button.innerHTML = "show less";
    }

};
