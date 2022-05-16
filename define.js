const stations = //you can add more by adding another button 
{
rnvlinks: ["https://raw.github.com/Flawed-8230/RadioCDN/main/Big-Iron.mp3", "https://raw.github.com/Flawed-8230/RadioCDN/main/Heartaches-By-The-Number.mp3", "https://raw.github.com/Flawed-8230/RadioCDN/main/Jingle-Jangle.mp3", "https://raw.github.com/Flawed-8230/RadioCDN/main/Lone-Star.mp3", "https://raw.github.com/Flawed-8230/RadioCDN/main/Sunset-Together.mp3", "https://raw.github.com/Flawed-8230/RadioCDN/main/Sin-To-Tell-A-Lie.mp3", "https://raw.github.com/Flawed-8230/RadioCDN/main/aint-that-a-kick-in-the-head.mp3", "https://raw.github.com/Flawed-8230/RadioCDN/main/im-moving-out.mp3", "https://raw.github.com/Flawed-8230/RadioCDN/main/why-dont-you-do-right.mp3"],
rnvnames: ["Big Iron", "Heartaches by the Number", "Jingle Jangle Jingle", "Lone Star", "Lets Ride Into the Sunset Together", "Its a sin to tell a lie", "Ain't that a kick in the head", "(Blues move in) I'm Moving out", "Why don't you do Right"],

odrlinks: ["https://raw.github.com/Flawed-8230/RadioCDN/OldDaydunRadio/SåHärKanManOcksåGöra.mp3", "https://raw.github.com/Flawed-8230/RadioCDN/OldDaydunRadio/Machine.mp3", "https://raw.github.com/Flawed-8230/RadioCDN/OldDaydunRadio/Chiptune.mp3", "https://raw.github.com/Flawed-8230/RadioCDN/OldDaydunRadio/Wakeup.mp3", "https://raw.github.com/Flawed-8230/RadioCDN/OldDaydunRadio/aXXo.mp3", "https://raw.github.com/Flawed-8230/RadioCDN/OldDaydunRadio/affection.mp3", "https://raw.github.com/Flawed-8230/RadioCDN/OldDaydunRadio/goodbyetoaworld.mp3", "https://raw.github.com/Flawed-8230/RadioCDN/OldDaydunRadio/insertnocoins.mp3", "https://raw.github.com/Flawed-8230/RadioCDN/OldDaydunRadio/justanotherpaperintro.mp3", "https://raw.github.com/Flawed-8230/RadioCDN/OldDaydunRadio/keygen11.mp3", "https://raw.github.com/Flawed-8230/RadioCDN/OldDaydunRadio/keygen5.mp3", "https://raw.github.com/Flawed-8230/RadioCDN/OldDaydunRadio/keygen8.mp3", "https://raw.github.com/Flawed-8230/RadioCDN/OldDaydunRadio/kootieevartedu.mp3", "https://raw.github.com/Flawed-8230/RadioCDN/OldDaydunRadio/man.mp3", "https://raw.github.com/Flawed-8230/RadioCDN/OldDaydunRadio/ninjafloodstartsschool.mp3", "https://raw.github.com/Flawed-8230/RadioCDN/OldDaydunRadio/nowheretorun.mp3", "https://raw.github.com/Flawed-8230/RadioCDN/OldDaydunRadio/pampradion.mp3", "https://raw.github.com/Flawed-8230/RadioCDN/OldDaydunRadio/peopleofthesky.mp3", "https://raw.github.com/Flawed-8230/RadioCDN/OldDaydunRadio/pixelgalaxy.mp3", "https://raw.github.com/Flawed-8230/RadioCDN/OldDaydunRadio/remindme.mp3", "https://raw.github.com/Flawed-8230/RadioCDN/OldDaydunRadio/settlers7cracktro.mp3", "https://raw.github.com/Flawed-8230/RadioCDN/OldDaydunRadio/shelter.mp3", "https://raw.github.com/Flawed-8230/RadioCDN/OldDaydunRadio/surfing.mp3", "https://raw.github.com/Flawed-8230/RadioCDN/OldDaydunRadio/youcandoit.mp3"],
odrnames: ["Så Här Kan Man Också Göra - Dubmood", "Machine - Daydun", "Chiptune - Dubmood", "Wake Up Skip School - Dubmood", "aXXo - Binarpilot", "affection - Daydun", "Goodbye To A World - Porter Robinson", "Insert No Coins - Dubmood", "Just Another Paper Intro - Dubmood", "Keygen 11 - Dubmood", "keygen 5 - Dubmood", "Keygen 8 - Dubmood", "Kootiee Vart E Du - Dubmood", "Man - Daydun", "Ninjaflood Starts School - Dubmood", "Nowhere to run - Stegosaurus Rex", "Pampradion - Dubmood", "People of the sky - Sloan", "Pixel Galaxy - Snail's House", "Remind me (Someone else's radio remix) - Royksopp", "Settlers 7 Cracktro - Dubmood", "Shelter - Porter Robinson", "Surfing on a Sine wave - FearofDark", "You can Do it - Dubmood"],
  /*
customlinks: ["link1", "link2", "link3", ...],
customnames: ["name1", "name2", "name3", ...],
  */
}
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

function playaudio(url) {
    var audio = document.createElement('audio');
    curr = 1
    audio.style.display = "none";
    audio.src = url;
    audio.autoplay = true;
    setInterval(function() {
    if(clos == 1) {audio.remove();curr = 0}
    }, 1000)
    audio.onended = function(){
        audio.remove()
    curr = 0};
document.body.appendChild(audio)
}