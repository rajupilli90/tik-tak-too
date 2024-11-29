let c;
let cp = "O";
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let count7 = 0;
let count8 = 0;
let count9 = 0;
let count;
let click = document.getElementById('clicktext');

let clickcell1 = false;
let clickcell2 = false;
let clickcell3 = false;
let clickcell4 = false;
let clickcell5 = false;
let clickcell6 = false;
let clickcell7 = false;
let clickcell8 = false;
let clickcell9 = false;


let c1 = document.getElementById('cell1');
let c2 = document.getElementById('cell2');
let c3 = document.getElementById('cell3');
let c4 = document.getElementById('cell4');
let c5 = document.getElementById('cell5');
let c6 = document.getElementById('cell6');
let c7 = document.getElementById('cell7');
let c8 = document.getElementById('cell8');
let c9 = document.getElementById('cell9');

let gameover = false;

function cell1(){
    c = document.getElementById('cell1');
    count = 0;
    count = ++count1;
    clickcell1 = true;
    clicked();
}

function cell2(){
    c = document.getElementById('cell2');
    count = 0;
    count = ++count2;
    clickcell2 = true;
    clicked();
}

function cell3(){
    c = document.getElementById('cell3');
    count = 0;
    count = ++count3;
    clickcell3 = true;
    clicked();
}

function cell4(){
    c = document.getElementById('cell4');
    count = 0;
    count = ++count4;
    clickcell4 = true;
    clicked();
}

function cell5(){
    c = document.getElementById('cell5');
    count = 0;
    count = ++count5;
    clickcell5 = true;
    clicked();
}

function cell6(){
    c = document.getElementById('cell6');
    count = 0;
    count = ++count6;
    clickcell6 = true;
    clicked();
}

function cell7(){
    c = document.getElementById('cell7');
    count = 0;
    count = ++count7;
    clickcell7 = true;
    clicked();
}

function cell8(){
    c = document.getElementById('cell8');
    count = 0;
    count = ++count8;
    clickcell8 = true;
    clicked();
}

function cell9(){
    c = document.getElementById('cell9');
    count = 0;
    count = ++count9;
    clickcell9 = true;
    clicked();
}

function reset(){
    window.location = "index.html";
}

function check(){
    if(gameover){
        window.location = "index.html";
    }
    if(cp=="O"){
        c.innerHTML = "X"; 
        cp = "X";
    }
    else{
        c.innerHTML = "O"; 
        cp = "O";
    }
}

function win(){
    if((c1.innerHTML==cp && c2.innerHTML==cp && c3.innerHTML==cp) | (c4.innerHTML==cp && c5.innerHTML==cp && c6.innerHTML==cp) | (c7.innerHTML==cp && c8.innerHTML==cp && c9.innerHTML==cp) | (c1.innerHTML==cp && c4.innerHTML==cp && c7.innerHTML==cp) | (c2.innerHTML==cp && c5.innerHTML==cp && c8.innerHTML==cp) | (c3.innerHTML==cp && c6.innerHTML==cp && c9.innerHTML==cp) | (c1.innerHTML==cp && c5.innerHTML==cp && c9.innerHTML==cp) | (c3.innerHTML==cp && c5.innerHTML==cp && c7.innerHTML==cp))
    {
        text.innerHTML = cp+" won the game"+"<br>";
        text.innerHTML += "Game Over!";
        gameover = true;
    }
}

function tie(){
    if(clickcell1 && clickcell2 && clickcell3 && clickcell4 && clickcell5 && clickcell6 && clickcell7 && clickcell8 && clickcell9 ){
        if(!gameover){
            text.innerHTML = "Game Tied <br>";
            text.innerHTML += "Game Over!";
        }
    }
}

function clicked(){
    if(count == 1){
        check();
        win();
    }
    else{
        window.alert("This box is already filled. Choose another box.");
    }
    tie();
}