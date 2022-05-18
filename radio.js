var stations = {}
async function fetchData() {
    stations = await fetch('https://raw.githubusercontent.com/Flawed-8230/RadioCDN/main/station.json').then(body => body.json())
}
fetchData()


let tmpclos = 0
let clos = 1
let curr = 0
let j
let radstat = 'Radio OFF'
let playing = 0

var loop = 0
var prev = 0
var next = 0
var plink = null
var pname = null
var clink = null
var cname = null


function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playaudio(url, radstat) {
    prev = 0
    next = 0
    var audio = document.createElement('audio');
    curr = 1
    clink = url
    cname = radstat
    audio.style.display = "none";
    audio.src = url;
    audio.autoplay = true;
    document.getElementById("h1").innerHTML = `Now Playing: ${radstat}`
    setInterval(function() {
    if(clos == 1) {audio.remove();curr = 0;plink = url; pname = radstat;};
    if(next == 1) {next = 0; audio.remove();curr = 0;plink = url; pname = radstat;}
    if(prev == 1) {audio.remove();curr = 0}
    },1000)
    audio.onended = function(){
        audio.remove()
    plink = url; pname = radstat;
    curr = 0
    next = 0
    prev = 0
    };
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
    <button id="CSR">Sajvnczeid Radio</button>
    <div>
    <span>Controls:</span>
    <button id="PV">Previous</button>
    <button id="NX">Skip</button>
    <button id="LP">Loop</button>
    <button id="OFF">Off</button><span>'              '</span>
    <button id="C">Credits</button><br>
    <h2 id="h1">Now Playing: ${radstat}</h2></div>`; //add extra buttons and eventlisteners to make more stations!
    
  }).move(0, 0));

document.getElementById("RNV").addEventListener("click", () => {
playing = 1
clos = 0
});

document.getElementById("ODR").addEventListener("click", () => {
    playing = 2
    clos = 0
});

document.getElementById("CSR").addEventListener("click", () => {
    playing = 3
    clos = 0
});

document.getElementById("NX").addEventListener("click", () => {
    next = 1
});

document.getElementById("PV").addEventListener("click", () => {
    prev = 1
});

document.getElementById("LP").addEventListener("click", () => {
    var s = 0
    if(loop == 0) {loop = 1; s = 1}
    if(loop == 1 && s == 0) {loop = 0; clink = null; clink = null}
});

document.getElementById("OFF").addEventListener("click", () => {
    clos = 1
    playing = 0
});

document.getElementById("C").addEventListener("click", () => {
    Alert('Radio Developed by Drakevskiy/Flawed#8230 with help from Enix')
    OWOP.windowSys.addWindow(new OWOP.windowSys.class.window("Sajvnczeid Radio!", {
    closeable: true,
    moveable: true
  }, h => {
    WINDOW = h;
    h.container.style.color = "white";
    h.container.innerHTML = `
    <img src="https://files.catbox.moe/nyik8r.png" alt="If you see this message contact D. Sajvnczeid#8230" width="500" height="525"><br>
    <span>'Radio Developed by Drakevskiy/Flawed#8230 with help from Enix'</span>`
  }).move(0, 0));
});

setInterval(function() {
if(curr == 1) return
if(clos == 1) return document.getElementById("h1").innerHTML = `Radio OFF`
if(prev == 1 && plink !== null) return playaudio(plink, pname)
if(loop == 1 && clink !== null) return playaudio(clink, cname)
switch (playing) {
    case 1:
        j = random(0, stations.rnvnames.length - 1)
        playaudio(stations.rnvlinks[j], stations.rnvnames[j])
        break;
    case 2:
        j = random(0, stations.odrnames.length - 1)
        playaudio(stations.odrlinks[j], stations.odrnames[j])
        break;
    case 3:
        j = random(0, stations.csrnames.length - 1)
        playaudio(stations.csrlinks[j])
        break;
    default:
        break;
}
}, 1000)
