let i = 0
function funz1(){
    i ++
    document.getElementById("a").innerHTML = "Pvvvvvontone"
    document.getElementById("b").innerHTML = "Disegna"
    if (i == 2){
        document.getElementById("a").innerHTML = "disegnone"
        document.getElementById("b").innerHTML = "ricomincia"
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "orange";
        ctx.fillRect(0, 0, 150,150);
    }
    if (i==3) {
        document.getElementById("a").innerHTML = "ciaone"
        document.getElementById("b").innerHTML = "premimi"
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, 150,150);
        i=0;
}
}