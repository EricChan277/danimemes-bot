function DanButton(url) {
    window.open(url, '_blank').focus
}

function glitchStyle() {

    const dBody =  document.getElementById('dModeBody')
    const b2 = 'body2';
    const b1 = 'body';

    document.getElementById('descText1').classList.toggle('hero');
    document.getElementById('descText2').classList.toggle('hero');
    document.getElementById('descText3').classList.toggle('hero');

    document.getElementById('descText1').classList.toggle('glitch');
    document.getElementById('descText2').classList.toggle('glitch');
    document.getElementById('descText3').classList.toggle('glitch');

    document.getElementById('descText1').classList.toggle('layers');
    document.getElementById('descText2').classList.toggle('layers');
    document.getElementById('descText3').classList.toggle('layers');
    
    if (dBody.classList.contains(b2)) {
        document.getElementById('dModeBody').classList.remove('body2');
        document.getElementById('dModeBody').classList.add('body');
    }
    else {
        document.getElementById('dModeBody').classList.remove('body');
        document.getElementById('dModeBody').classList.add('body2');
    }
}

function glitchText(){
    
    const lgtDrk = document.getElementById('lightSwitch')
    let a = 1
    
    if (a=2){
        lgtDrk.innerHTML='Turn on the lights!';

    }
    else {
        lgtDrk.innerHTML='Turn off the lights!';
        console.log(lgtDrk.innerHTML + 'Off');
    }
   
}

function DarkMode(){
    glitchStyle();
    glitchText();
}

