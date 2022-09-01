function DanButton(url) {
    window.open(url, '_blank').focus
}
// Glitch Styling
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
        document.getElementById('descText3').classList.toggle('cBgHide');

        
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
        
        if (lgtDrk.innerHTML=='Back to Arrakis'){

            lgtDrk.innerHTML='Enter Night City';

            lgtDrk.classList.remove('button_slide2');
            lgtDrk.classList.remove('slide_right2');

            lgtDrk.classList.add('button_slide1');
            lgtDrk.classList.add('slide_right1');

        }
        else {
            lgtDrk.innerHTML='Back to Arrakis';

            lgtDrk.classList.remove('button_slide1');
            lgtDrk.classList.remove('slide_right1');

            lgtDrk.classList.add('button_slide2');
            lgtDrk.classList.add('slide_right2');


        } 
    }
    function cyberBg(){
        const cyber = document.getElementById('cBg')
        const dune = document.getElementById('dune')
    
        cyber.classList.toggle('cBgHide')
        dune.classList.toggle('cBgHide')
    }

//Glitch Text Content
function glitchText2() {
    let descT1T = document.getElementById('descText1');
    let descT1D = descT1T.getAttribute('data-text');

    let descT2T = document.getElementById('descText2');
    let descT2D = descT2T.getAttribute('data-text');

    if (descT1T.innerHTML==='Welcome to the daniel bot.'){
         descT1T.innerHTML='欢迎来到丹尼尔机器人';
         descT1D='欢迎来到丹尼尔机器人';

         descT2T.innerHTML='Welcome to Night City';
          escT2D='Welcome to Night City';
        } 
        else {
        descT1T.innerHTML='Welcome to the daniel bot.';
        descT1D='Welcome to the daniel bot.';
        descT2T.innerHTML='You can interact with me using the chatbox in the bottom right.'
        descT2D='You can interact with me using the chatbox in the bottom right.'
        }
    }


function playAudio(){
    let fadeAudio = document.getElementById('fade');

    if (fadeAudio.paused==true){
        fadeAudio.play();
    }
    else {
        fadeAudio.pause();
    }
}

function vacation () {
    let dan1 = document.getElementById('dan1');
    let dan2 = document.getElementById('dan2');

    dan1.classList.toggle('danPicTog');
    dan2.classList.toggle('danPicTog');
}

function DarkMode(){
    glitchStyle();
    glitchText();
/*     cyberBg(); */
    glitchText2();
    playAudio();
    vacation();

}