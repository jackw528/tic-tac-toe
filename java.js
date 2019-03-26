let x = 1;
let a;
let b;
let c;
let d;
let e;
let f;
let g;
let h;
let i;
let winner;
let aClicked = false;
let bClicked = false;
let cClicked = false;
let dClicked = false;
let eClicked = false;
let fClicked = false;
let gClicked = false;
let hClicked = false;
let iClicked = false;
function buttonA(){
  if(x == 1){
    document.getElementById("a").innerHTML = "X";
    x = 0;
    a = 1;
    aClicked = true;
  } else if(x == 0){
    document.getElementById("a").innerHTML = "O";
    x = 1;
    a = 2;
    aClicked = true;
  }
  if(aClicked = true){
    disableA();
  }
  check();
}
function buttonB(){
  if(x == 1){
    document.getElementById("b").innerHTML = "X";
    x = 0;
    b = 1;
    bClicked = true;
  } else if(x == 0){
    document.getElementById("b").innerHTML = "O";
    x = 1;
    b = 2;
    bClicked = true;
  }
  if(bClicked = true){
    disableB();
  }
  check();
}
function buttonC(){
  if(x == 1){
    document.getElementById("c").innerHTML = "X";
    x = 0;
    c = 1;
    cClicked = true;
  } else if(x == 0){
    document.getElementById("c").innerHTML = "O";
    x = 1;
    c = 2;
    cClicked = true;
  }
  if(cClicked = true){
    disableC();
  }
  check();
}
function buttonD(){
  if(x == 1){
    document.getElementById("d").innerHTML = "X";
    x = 0;
    d = 1;
    dClicked = true;
  } else if(x == 0){
    document.getElementById("d").innerHTML = "O";
    x = 1;
    d = 2;
    dClicked = true;
  }
  if(dClicked = true){
    disableD();
  }
  check();
}
function buttonE(){
  if(x == 1){
    document.getElementById("e").innerHTML = "X";
    x = 0;
    e = 1;
    eClicked = true;
  } else if(x == 0){
    document.getElementById("e").innerHTML = "O";
    x = 1;
    e = 2;
    eClicked = true;
  }
  if(eClicked = true){
    disableE();
  }
  check();
}
function buttonF(){
  if(x == 1){
    document.getElementById("f").innerHTML = "X";
    x = 0;
    f = 1;
    fClicked = true;
  } else if(x == 0){
    document.getElementById("f").innerHTML = "O";
    x = 1;
    f = 2;
    fClicked = true;
  }
  if(fClicked = true){
    disableF();
  }
  check();
}
function buttonG(){
  if(x == 1){
    document.getElementById("g").innerHTML = "X";
    x = 0;
    g = 1;
    gClicked = true;
  } else if(x == 0){
    document.getElementById("g").innerHTML = "O";
    x = 1;
    g = 2;
    gClicked = true;
  }
  if(gClicked = true){
    disableG();
  }
  check();
}
function buttonH(){
  if(x == 1){
    document.getElementById("h").innerHTML = "X";
    x = 0;
    h = 1;
    hClicked = true;
  } else if(x == 0){
    document.getElementById("h").innerHTML = "O";
    x = 1;
    h = 2;
    hClicked = true;
  }
  if(hClicked = true){
    disableH();
  }
  check();
}
function buttonI(){
  if(x == 1){
    document.getElementById("i").innerHTML = "X";
    x = 0;
    i = 1;
    iClicked = true;
  } else if(x == 0){
    document.getElementById("i").innerHTML = "O";
    x = 1;
    i = 2;
    iClicked = true;
  }
  if(iClicked = true){
    disableI();
  }
  check();
}
function check(){
  if(a == 1 && b == 1 && c == 1){
    xWin();
  }else if(a == 2 && b == 2 && c == 2){
    yWin();
  }else if(d == 1 && e == 1 && f == 1){
    xWin();
  }else if(d == 2 && e == 2 && f == 2){
    yWin();
  }else if(g == 1 && h == 1 && i == 1){
    xWin();
  }else if(g == 2 && h == 2 && i == 2){
    yWin();
  }else if(a == 1 && d == 1 && g == 1){
    xWin();
  }else if(a == 2 && d == 2 && g == 2){
    yWin();
  }else if(b == 1 && e == 1 && h == 1){
    xWin();
  }else if(b == 2 && e == 2 && h == 2){
    yWin();
  }else if(c == 1 && f == 1 && i == 1){
    xWin();
  }else if(c == 2 && f == 2 && i == 2){
    yWin();
  }else if(a == 1 && e == 1 && i == 1){
    xWin();
  }else if(a == 2 && e == 2 && i == 2){
    yWin();
  }else if(c == 1 && e == 1 && g == 1){
    xWin();
  }else if(c == 2 && e == 2 && g == 2){
    yWin();
  }else if(aClicked == true && bClicked == true && cClicked == true && dClicked == true && eClicked == true && fClicked == true && gClicked == true && hClicked == true && iClicked == true){
    tie();
  }
}
function xWin(){
  document.getElementById("win").innerHTML = "Player X has won!"
  document.getElementById("win2").innerHTML = "Player X has won!"
  disableButtons();
}
function yWin(){
  document.getElementById("win").innerHTML = "Player O has won!"
  document.getElementById("win2").innerHTML = "Player O has won!"
  disableButtons();
}
function tie(){
  document.getElementById("win").innerHTML = "Players have tied!"
  document.getElementById("win2").innerHTML = "Players have tied!"
}
function disableButtons(){
  document.getElementById("a").disabled = true;
  document.getElementById("b").disabled = true;
  document.getElementById("c").disabled = true;
  document.getElementById("d").disabled = true;
  document.getElementById("e").disabled = true;
  document.getElementById("f").disabled = true;
  document.getElementById("g").disabled = true;
  document.getElementById("h").disabled = true;
  document.getElementById("i").disabled = true;
}
function disableA(){
  document.getElementById("a").disabled = true;
}
function disableB(){
  document.getElementById("b").disabled = true;
}
function disableC(){
  document.getElementById("c").disabled = true;
}
function disableD(){
  document.getElementById("d").disabled = true;
}
function disableE(){
  document.getElementById("e").disabled = true;
}
function disableF(){
  document.getElementById("f").disabled = true;
}
function disableG(){
  document.getElementById("g").disabled = true;
}
function disableH(){
  document.getElementById("h").disabled = true;
}
function disableI(){
  document.getElementById("i").disabled = true;
}

function enableButtons(){
  document.getElementById("a").disabled = false;
  document.getElementById("b").disabled = false;
  document.getElementById("c").disabled = false;
  document.getElementById("d").disabled = false;
  document.getElementById("e").disabled = false;
  document.getElementById("f").disabled = false;
  document.getElementById("g").disabled = false;
  document.getElementById("h").disabled = false;
  document.getElementById("i").disabled = false;
}
function playAgain(){
  document.getElementById("win").innerHTML = ""
  document.getElementById("win2").innerHTML = ""
  document.getElementById("a").innerHTML = " "
  document.getElementById("b").innerHTML = " "
  document.getElementById("c").innerHTML = " "
  document.getElementById("d").innerHTML = " "
  document.getElementById("e").innerHTML = " "
  document.getElementById("f").innerHTML = " "
  document.getElementById("g").innerHTML = " "
  document.getElementById("h").innerHTML = " "
  document.getElementById("i").innerHTML = " "
  x = 1;
  a = 0;
  b = 0;
  c = 0;
  d = 0;
  e = 0;
  f = 0;
  g = 0;
  h = 0;
  i = 0;
  enableButtons();
  aClicked = false;
  bClicked = false;
  cClicked = false;
  dClicked = false;
  eClicked = false;
  fClicked = false;
  gClicked = false;
  hClicked = false;
  iClicked = false;
}
