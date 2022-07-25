document.getElementById('quiet-btn').addEventListener('click', makeQuiet) 
function makeQuiet(e){
    console.log(e)
    const p = document.getElementById('patrick')
    let text = p.innerText
    p.innerText = text.toLowerCase()
}

document.getElementById('loud-btn').addEventListener('click', louder)
function louder(e){
    const s = document.getElementById('patrick')
    let txt = s.innerText
    s.innerText = txt.toUpperCase()
}

document.getElementById('sarc-btn').addEventListener('click', sarcasm)
function sarcasm (e) {
    const t = document.getElementById('patrick')
    
}