let btns = document.querySelectorAll('.button');
let body = document.querySelectorAll('body');

for(btn of btns){

    btn.addEventListener('click', setBgColor);
}

function setBgColor(e){
    // console.dir(e.target); 
    if(e.target.id === "lightblue"){
        document.body.style.backgroundColor = e.target.id;
    }

    if(e.target.id === "gray"){
        document.body.style.backgroundColor = e.target.id;
    }

    if(e.target.id === "pink"){
        document.body.style.backgroundColor = e.target.id;
    }

    if(e.target.id === "yellow"){
        document.body.style.backgroundColor = e.target.id;
    }
}

// 