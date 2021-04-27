var requests = document.querySelector(".requests");
var requests2 = document.querySelector(".requests2")
var count = 2;


function remove(){
    var myElement = document.querySelector("span");
    requests.remove();
    count--;
    myElement.innerHTML = count;
}


function remove2(){
    var myElement = document.querySelector("span");
    requests2.remove();
    count--;
    myElement.innerHTML = count;
}


function showbox(){
    nameEdit.style.display = "inline-block";
    done.style.display = "inline-block"; 
}

function editName(){
    userName.innerHTML=nameEdit.value;
}
function hideBox(){
    nameEdit.style.display = "none";
    done.style.display = "none"; 
}