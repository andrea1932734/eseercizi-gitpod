let i=0;
function funz1() {
    i++;
    document.getElementById("a").innerHTML = "Pvvvvvontone"
    document.getElementById("b").innerHTML = "Disegna"
    if (i==2) {
        document.getElementById("a").innerHTML = "Disegnone"
        document.getElementById("b").innerHTML = "Ricomincia"
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, 200,200);
       
    }

    if (i==3) {
        document.getElementById("a").innerHTML = "ciaone"
        document.getElementById("b").innerHTML = "premimi"
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "orange";
        ctx.fillRect(0, 0, 200,200);
        i=0;
    }
}
    function funz2() {
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "red";
        ctx.fillRect(0, 0, 200,200);
}

