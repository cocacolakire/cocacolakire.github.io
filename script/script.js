const IMG_URL = "./resources/images/";
let imgs = [];
let circuits = ['TSAL', 'Dummy TSAL', 'IMD-latch', 'LED card', 'Precharge', 'Starting logic'];

const switchImg = (event) => {
    let DIRECTION = event.target.getAttribute('name');
    let buff = '';
    switch(DIRECTION){
        case 'LEFT':
            buff = imgs.shift();
            imgs.push(buff);
            buffTwo = circuits.shift();
            circuits.push(buffTwo)
        break;
        case 'RIGHT':
            buff = imgs.pop();
            imgs.unshift(buff);
            buffTwo = circuits.pop();
            circuits.unshift(buffTwo);
        break;
    }
    changeImgs();
}

function setImg(elem, source){
    console.log(source);
    elem.src = IMG_URL + source;
}

function initImgs(){
    for(let i = 1, j = 0; i <= 6; ++i, ++j){
        if(imgs.length != 6){
            imgs.push('circuit' + i + '.png');
        }
    }
    changeImgs();
}

function changeImgs(){
    for(let i = 1, j = 0; i <= 6; ++i, ++j){
        switch(i){
            case 3: setImg(document.getElementById('img1'), imgs[j]); break;
            case 4: setImg(document.getElementById('img2'), imgs[j]); 
                    document.getElementById('current_project').innerHTML = circuits[j];
                    break;
            case 5: setImg(document.getElementById('img3'), imgs[j]); break;
        }
    }
}

const initBtns = () => {
    let btns = document.getElementsByClassName('triangle-buttons');
    
    for(let btn of btns){
        btn.addEventListener('click', switchImg);
    }
}

initBtns();
initImgs();