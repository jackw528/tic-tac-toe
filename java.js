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
function buttonA(){
  if(x == 1){
    document.getElementById("a").innerHTML = "X";
    x = 0;
    a = 1;
  } else if(x == 0){
    document.getElementById("a").innerHTML = "O";
    x = 1;
    a = 2;
  }
  check();
}
function buttonB(){
  if(x == 1){
    document.getElementById("b").innerHTML = "X";
    x = 0;
    b = 1;
  } else if(x == 0){
    document.getElementById("b").innerHTML = "O";
    x = 1;
    b = 2;
  }
  check();
}
function buttonC(){
  if(x == 1){
    document.getElementById("c").innerHTML = "X";
    x = 0;
    c = 1;
  } else if(x == 0){
    document.getElementById("c").innerHTML = "O";
    x = 1;
    c = 2;
  }
  check();
}
function buttonD(){
  if(x == 1){
    document.getElementById("d").innerHTML = "X";
    x = 0;
    d = 1;
  } else if(x == 0){
    document.getElementById("d").innerHTML = "O";
    x = 1;
    d = 2;
  }
  check();
}
function buttonE(){
  if(x == 1){
    document.getElementById("e").innerHTML = "X";
    x = 0;
    e = 1;
  } else if(x == 0){
    document.getElementById("e").innerHTML = "O";
    x = 1;
    e = 2;
  }
  check();
}
function buttonF(){
  if(x == 1){
    document.getElementById("f").innerHTML = "X";
    x = 0;
    f = 1;
  } else if(x == 0){
    document.getElementById("f").innerHTML = "O";
    x = 1;
    f = 2;
  }
  check();
}
function buttonG(){
  if(x == 1){
    document.getElementById("g").innerHTML = "X";
    x = 0;
    g = 1;
  } else if(x == 0){
    document.getElementById("g").innerHTML = "O";
    x = 1;
    g = 2;
  }
  check();
}
function buttonH(){
  if(x == 1){
    document.getElementById("h").innerHTML = "X";
    x = 0;
    h = 1;
  } else if(x == 0){
    document.getElementById("h").innerHTML = "O";
    x = 1;
    h = 2;
  }
  check();
}
function buttonI(){
  if(x == 1){
    document.getElementById("i").innerHTML = "X";
    x = 0;
    i = 1;
  } else if(x == 0){
    document.getElementById("i").innerHTML = "O";
    x = 1;
    i = 2;
  }
  check();
}
function check(){
  if(a == 1 & b == 1 & c == 1){
    xWin();
  }else if(a == 2 & b == 2 & c == 2){
    yWin();
  }else if(d == 1 & e == 1 & f == 1){
    xWin();
  }
}
function xWin(){
  document.getElementById("win").innerHTML = "Player X has won!"
  document.getElementById("win2").innerHTML = "Player X has won!"
}
function yWin(){
  document.getElementById("win").innerHTML = "Player Y has won!"
  document.getElementById("win2").innerHTML = "Player Y has won!"
}
