function startGame() {
    myGameArea.start();
        myGameArea.draw(redSquare);
      }
      function updateGameArea(){
        myGameArea.wallpaper(wallpaper)
        myGameArea.draw(redSquare)
      }

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20); //ogni 20 ms chiamo il metodo updateGameArea

    },
    draw: function(component) {
        this.context.fillStyle = component.color;
        this.context.fillRect(component.x, component.y, component.width, component.height);
      },
      wallpaper: function(component) {
        this.context.fillStyle = component.color;
        this.context.fillRect(component.x, component.y, component.width, component.height);
      }

    }
    var redSquare = {
        width: 20,
        height: 20,
        x: 10,
        y: 120,
        color: "red"
      }
      var wallpaper = {
        width: 1000,
        height: 5000,
        x: 10,
        y: 10,
        color: "white"
      }
      function funz1(){
        redSquare.y -= 30;
      }
      function funz2(){
        redSquare.y += 30;
      }
      function funz3(){
        redSquare.x -= 30;
      }
      function funz4(){
        redSquare.x += 30;
      }
      
      
      