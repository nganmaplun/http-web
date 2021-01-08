

function setTheme(theme) {
  if (theme == 'orange') {
    document.getElementById("switcher-id").href = 'style/themes/orange.css';
  } else if (theme == 'sky') {
    document.getElementById("switcher-id").href = 'style/themes/sky.css';
  } else if (theme == 'purple') {
    document.getElementById("switcher-id").href = 'style/themes/purple.css';
  } else if (theme == 'dark') {
    document.getElementById("switcher-id").href = 'style/themes/dark.css';
  }
  localStorage.setItem('style', theme);
}

function playaudio (){
    document.getElementById("chat").innerHTML = `
      <div class='fas fa-volume-up' style='font-size:48px;' onclick="pauseaudio()"></div>
      <audio autoplay loop>
        <source src="audio.mp3">
      </audio>
    `;
  }
function pauseaudio(){
  
    document.getElementById("chat").innerHTML = `<div class='fas fa-volume-mute' style='font-size:48px;' onclick="playaudio()"></div>
<audio muted>
  <source src="audio.mp3">
</audio>`;
}
