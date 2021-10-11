"user strict"

let hh = 0;
let mm = 0;
let ss = 0;


let tempo = 90;
let crono;  

function start() {
    crono = setInterval(() => { timer(); }, tempo);  
}


function pause() {
    clearInterval(crono)
}

function stop() {
    clearInterval(crono)
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('contador').innerText = '00:00:00'
}

function timer() {

    ss++;

    if(ss == 60) {
        ss = 0;
        mm++;

        if(mm == 60) {
            mm = 0;
            hh++; 
        }
    }


    let format = (hh < 10 ? '0' + hh : hh)+ ':' + (mm < 10 ?  '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);


    document.getElementById('contador').innerText = format;


    return format;
}