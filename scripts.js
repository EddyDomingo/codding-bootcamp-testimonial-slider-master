console.log("hello Eddy")

const prev = document.getElementById('prev');
const next = document.getElementById('next');

prev.addEventListener("click", tanyaFunc);
next.addEventListener("click", johnFunc);

function johnFunc(){
    var john = document.querySelectorAll(".john");
    var tanya = document.querySelectorAll(".tanya");
    var i;
    var j;
    for (i = 0; i < john.length; i++){   
        john[i].style.visibility = "visible";
    }
    for (j = 0; j < tanya.length; j++){   
        tanya[j].style.visibility = "hidden";
    }
}
function tanyaFunc(){
    var john = document.querySelectorAll(".john");
    var tanya = document.querySelectorAll(".tanya");
    var i;
    var j;
    for (i = 0; i < john.length; i++){   
        john[i].style.visibility = "hidden";
    }
    for (j = 0; j < tanya.length; j++){   
        tanya[j].style.visibility = "visible";
    }
}


// if (john1.style.visibility === "hidden"){
//     john1.style.visibility = "visible"
// }else{
//     tanya1.style.visibility = "hidden";
// }