let scoreEl= document.getElementById("score-el")
let scoreE= document.getElementById("score2")

function plusoneh(){
    scoreEl.textContent= parseInt(scoreEl.textContent)+1;
}

function plustwoh(){
    scoreEl.textContent= parseInt(scoreEl.textContent)+2;
}

function plusthreeh(){
    scoreEl.textContent= parseInt(scoreEl.textContent)+3;}

function plusoneG(){
    scoreE.textContent= parseInt(scoreE.textContent)+1;
}

function plustwoG(){
    scoreE.textContent= parseInt(scoreE.textContent)+2;
}

function plusthreeG(){
    scoreE.textContent= parseInt(scoreE.textContent)+3;
}

function reset(){
    scoreE.textContent=0;
    scoreEl.textContent=0;
}

