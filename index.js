function DanButton(url) {
    window.open(url, '_blank').focus
}

function glitchStyle() {

    const dBody =  document.getElementById('dModeBody')
    const b2 = 'body2';
    const b1 = 'body';

    document.getElementById('descText1').classList.toggle('text');
    document.getElementById('descText1').classList.toggle('hero');
    document.getElementById('descText1').classList.toggle('glitch');
    document.getElementById('descText1').classList.toggle('layers');
  
    document.getElementById('descText2').classList.toggle('text');
    document.getElementById('descText2').classList.toggle('hero');
    document.getElementById('descText2').classList.toggle('layers');
    document.getElementById('descText2').classList.toggle('glitch');

    document.getElementById('descText3').classList.toggle('text');
    document.getElementById('descText3').classList.toggle('glitch');
    document.getElementById('descText3').classList.toggle('hero');
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
    
    if (lgtDrk.innerHTML=='Leave Night City'){
        lgtDrk.innerHTML='Enter Night City';

    }
    else {
        lgtDrk.innerHTML='Leave Night City';
    } 
}

/* 欢迎来到丹尼尔机器人 */
function glitchText2() {
    let descT1T = document.getElementById('descText1');
    let descT1D = descT1T.getAttribute('data-text');

    if (descT1T.innerHTML==='Welcome to the Daniel bot.'){
        descT1T.innerHTML='欢迎来到丹尼尔机器人';
        descT1D='欢迎来到丹尼尔机器人';
    } else {
        descT1T.innerHTML='Welcome to the Daniel bot.';
        descT1D='Welcome to the Daniel bot.';
    }
}

function cyberBg(){
    
    const cyber = document.getElementById('cBg')

    cyber.classList.toggle('cBgHide')
}



function playAudio(){
    let fadeAudio = document.getElementById('fade');

    if (fadeAudio.paused==true){
        fadeAudio.play();
        console.log('Playing');
    }
    else {
        fadeAudio.pause();
        console.log('Paused');
    }
}


function DarkMode(){
    glitchStyle();
    glitchText();
    cyberBg();
    glitchText2();
    playAudio();

}