var stato = 0;

function buttonFunction() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#8b0000";
  ctx.fillRect(0, 0, 200, 200);
  ctx.fillStyle = "#FDCA40";


  let len = 190;
  let larg = 5;

  for (i = 0; i < len/(2*larg); i += 2) {
    
    //linee orizzontali metà sopra
    ctx.fillRect(i*larg, i*larg, len-i*2*larg, larg);
    //linee orizzontali metà sotto
    ctx.fillRect(i*larg+larg, len - i*larg, len-i*2*larg-larg, larg);

    //Linee verticali metà dx
    ctx.fillRect(len - i*larg, i*larg, larg , len-i*2*larg+larg);
    //Linee verticali metà sx
    ctx.fillRect(i*larg+larg, i*larg + 2*larg, larg , len-i*2*larg-2*larg);
  }
}
