//Glitch Styling
    function glitchStyle() {

        const dBody =  document.getElementById('dModeBody');
        const b2 = 'body2';
        const b1 = 'body';

        // Adding do while loop to replace individual calls

            let result = 'descText';
            let textNum = ''
            let i = 0;

            do {
            i = i + 1;
            textNum = result + i;

            let dText = document.getElementById(textNum);

            dText.classList.toggle('text');
            dText.classList.toggle('hero');
            dText.classList.toggle('glitch');
            dText.classList.toggle('layers');
            } while (i < 3);
        
        if (dBody.classList.contains(b2)) {
            dBody.classList.remove(b2);
            dBody.classList.add(b1);
        }
        else {
            dBody.classList.remove(b1);
            dBody.classList.add(b2);
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
        const dan1 = document.getElementById('dan1');
        const dan2 = document.getElementById('dan2');
    
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
        const fadeAudio = document.getElementById('fade');

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