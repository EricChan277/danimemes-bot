function DanButton(url) {
    window.open(url, '_blank').focus
}
function DarkMode(){
    const dBody =  document.getElementById('dModeBody')
    const g = 'body2';
    const x = 'body';

    if (dBody.classList.contains(g)) {
        document.getElementById('dModeBody').classList.remove('body2');
        document.getElementById('dModeBody').classList.add('body');
    }
    else {
        document.getElementById('dModeBody').classList.remove('body');
        document.getElementById('dModeBody').classList.add('body2');
    }
  document.getElementById('descText1').classList.toggle('text');
  document.getElementById('descText2').classList.toggle('text');
  document.getElementById('descText3').classList.toggle('text');
}