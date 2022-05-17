var stations = {}
async function fetchData() {
    stations = await fetch('https://raw.githubusercontent.com/Flawed-8230/RadioCDN/main/station.json').then(body => body.json())
}
fetchData()

var checker
let tmpclos = 0
let clos = 1
let curr = 0
let j
let radstat = 'Radio OFF'
let playing = 0

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playaudio(url, radstat) {
    var audio = document.createElement('audio');
    curr = 1
    audio.style.display = "none";
    audio.src = url;
    audio.autoplay = true;
    document.getElementById("h1").innerHTML = `Now Playing: ${radstat}`
    setInterval(function() {
    if(clos == 1) {audio.remove();curr = 0}
    if(tmpclos == 1)
      audio.pause()
	  checker = setInterval(function() {if(tmpclos == 0) {audio.play();clearInterval(checker)}}, 1000);
	},1000)
    audio.onended = function(){
        audio.remove()
    curr = 0};
document.body.appendChild(audio)
}

OWOP.windowSys.addWindow(new OWOP.windowSys.class.window("Sajvnczeid Radio!", {
    closeable: true,
    moveable: true
  }, h => {
    WINDOW = h;
    h.container.style.color = "white";
    h.container.innerHTML = `
    <p>This radio is clientside, Shut off the stations before you switch them for optimal results</p>
    <span>Stations:</span>
    <button id="RNV">Radio New Vegas</button>
    <button id="ODR">Old Daydun Radio</button>
    <div>
    <span>Controls:</span>
    <button id="PA">Pause</button>
    <button id="PL">Resume</button>
    <button id="OFF">Off</button><br>
    <h id="h1">Now Playing: ${radstat}</h></div>`; //add extra buttons and eventlisteners to make more stations!
    
  }).move(0, 0));

document.getElementById("RNV").addEventListener("click", () => {
playing = 1
clos = 0
});

document.getElementById("ODR").addEventListener("click", () => {
    playing = 2
    clos = 0
});;

document.getElementById("PA").addEventListener("click", () => {
    tmpclos = 1
});;

document.getElementById("OFF").addEventListener("click", () => {
    clos = 1
    playing = 0
});;


document.getElementById("PL").addEventListener("click", () => {
    tmpclos = 0
});;

setInterval(function() {
if(curr == 1) return
if(clos == 1) return document.getElementById("h1").innerHTML = `Radio OFF`
switch (playing) {
    case 1:
        j = random(0, stations.rnvnames.length - 1)
        playaudio(stations.rnvlinks[j], stations.rnvnames[j])
        break;
    case 2:
        j = random(0, stations.odrnames.length - 1)
        playaudio(stations.odrlinks[j], stations.odrnames[j])
        break;
    /*
    case etc-number:
        j = random(0, stations.customnames.length - 1)
        playaudio(stations.customlinks[j])
        break;
    */
    default:
        break;
}
}, 1000)
