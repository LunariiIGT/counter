let count = 0;

document.getElementById("add").onclick = function(){
    count += 1;
    document.getElementById("num").innerHTML = count;
}

document.getElementById("dec").onclick = function(){
    count -= 1;
    document.getElementById("num").innerHTML = count;
}

    document.getElementById("res").onclick = function(){
        count = 0;
        document.getElementById("num").innerHTML = count; 
}