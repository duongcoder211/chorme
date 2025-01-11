let wheelElm = document.querySelector('.wheel');
let centerElm = document.querySelector('.center');
let arrowElm = document.querySelector('.arrow');
let angle = 0;


let RotateWheel = function (agl) {
    wheelElm.style.transition = '5s ease-out';
    wheelElm.style.transform = `rotate(${agl}deg)`;
}


centerElm.onclick = () => {
    angle += (Math.round(Math.random() * 1000) + 2000);
    console.log(angle);
    RotateWheel(angle);
}

let InputName = function (array) {
    arrayLength = array.length;
    console.log(arrayLength);
}

InputName([12,2,3])