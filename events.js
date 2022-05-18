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

document.getElementById("M").addEventListener("click", () => {
    vol = 0
});

document.getElementById("VH").addEventListener("click", () => {
    vol = .5
});

document.getElementById("VF").addEventListener("click", () => {
    vol = 1.0
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
    OWOP.windowSys.addWindow(new OWOP.windowSys.class.window("Credits!", {
    closeable: true,
    moveable: true
  }, r => {
    WINDOW = r;
    r.container.style.color = "white";
    r.container.innerHTML = `
    <img src="https://files.catbox.moe/nyik8r.png" alt="If you see this message contact D. Sajvnczeid#8230" width="58" height="61"><br>
    <h1>'Radio Developed by Drakevskiy/Flawed#8230 with help from Enix'</h1>`
  }).move(0, 0));
});
