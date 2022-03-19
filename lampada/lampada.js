const turnOn = document.getElementById('turnOnOff');
const lamp = document.getElementById('lamp');

function isLampBroken(){
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn(){
    if (!isLampBroken()){
        lamp.src = './img/ligada.jpg' 
    }
}

function lampOff(){
    if (!isLampBroken()){
        lamp.src = './img/desligada.jpg' 
    }
}

function lampOnOff(){
    if(turnOnOff.textContext == 'ligar'){
        lampOn();
        turnOnOff.textContext = 'Desligar'
    } else if(turnOnOff.textContext == 'Desligar'){
        lampOff();
        turnOnOff.textContext = 'ligar'
    }
}

function lampBroken(){
    lamp.src = './img/quebrada.jpg' 
}

turnOn.addEventListener('click', lampOnOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);