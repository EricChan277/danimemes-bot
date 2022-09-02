//Glitch Styling
    function glitchStyle() {

        const dBody =  document.getElementById('dModeBody');
        const dText1 = document.getElementById('descText1');
        const dText2 = document.getElementById('descText2');
        const dText3 = document.getElementById('descText3');


        const b2 = 'body2';
        const b1 = 'body';

        dText1.classList.toggle('text');
        dText1.classList.toggle('hero');
        dText1.classList.toggle('glitch');
        dText1.classList.toggle('layers');
    
        dText2.classList.toggle('text');
        dText2.classList.toggle('hero');
        dText2.classList.toggle('layers');
        dText2.classList.toggle('glitch');

        dText3.classList.toggle('text');
        dText3.classList.toggle('glitch');
        dText3.classList.toggle('hero');
        dText3.classList.toggle('layers');
        
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
            lgtDrk.classList.add('btnGlitch');

            /* lgtDrk.classList.add('button_slide1');
            lgtDrk.classList.add('slide_right1'); */

        }
        else {
            lgtDrk.innerHTML='Back to Arrakis';

           /*  lgtDrk.classList.remove('button_slide1');
            lgtDrk.classList.remove('slide_right1'); */
            lgtDrk.classList.remove('btnGlitch');

            lgtDrk.classList.add('button_slide2');
            lgtDrk.classList.add('slide_right2');


        } 
    }

    function cyberBg(){
        const cyber = document.getElementById('cBg')
    
        cyber.classList.toggle('cBgHide')
    }

    function vacation () {
        let dan1 = document.getElementById('dan1');
        let dan2 = document.getElementById('dan2');
    
        dan1.classList.toggle('danPicTog');
        dan2.classList.toggle('danPicTog');
    }

//Glitch Text Content
    function glitchText2() {
        let descT1T = document.getElementById('descText1');
        let descT1D = descT1T.getAttribute('data-text');

        let descT2T = document.getElementById('descText2');
        let descT2D = descT2T.getAttribute('data-text');

        if (descT1T.innerHTML=='Welcome to the daniel bot.'){
            descT1T.innerHTML='欢迎来到丹尼尔机器人';
            descT1D='ようこそ　ダンニエルのボットへ';

            descT2T.innerHTML='Welcome to Night City';
            descT2D='Welcome to Night City';

            } 
            else {
            descT1T.innerHTML='Welcome to the daniel bot.';
            descT1D='Welcome to the daniel bot.';
            descT2T.innerHTML='You can interact with me using the chatbox in the bottom right.'
            descT2D='You can interact with me using the chatbox in the bottom right.'

            }
    }
    
//Triggered Functions
    function DanButton(url) {
        window.open(url, '_blank').focus
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

//Execute functions
    function DarkMode(){
        glitchStyle();
        glitchText();
        cyberBg();
        vacation();
        glitchText2();
        playAudio();
    }