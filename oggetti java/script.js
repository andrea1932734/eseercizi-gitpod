const gallo = {
    nome:"gallo",
    zampe:"2",
    verso:"chicchiricchi",
  };
  const maiale = {
    nome: "maiale",
    zampe: "4",
    verso:"ronf ronf",
  };
  const mucca = {
    nome: "mucca",
    zampe: "4",
    verso:"muuuu",
  };
  function funz1(){
    document.getElementById("galloid").innerHTML=gallo.nome + " " + gallo.zampe + " " + gallo.verso
  }
  function funz2(){
    document.getElementById("muccaid").innerHTML=mucca.nome + " " + mucca.zampe + " " + mucca.verso
  }
  function funz3(){
    document.getElementById("maialeid").innerHTML=maiale.nome + " " + maiale.zampe + " " + maiale.verso
  }
  