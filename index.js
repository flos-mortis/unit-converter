let lenEl = document.getElementById("length")
let volEl = document.getElementById("volume")
let massEl = document.getElementById("mass")

function getVal(){
    let val = document.querySelector('input').value

    let feetVal = val * 3.28
    lenEl.textContent = val + " meters = " + feetVal.toFixed(3) + " feet"

    let gallVal = val * 0.26
    volEl.textContent = val + " liters = " + gallVal.toFixed(3) + " gallons"

    let poundVal = val * 2.2
    massEl.textContent = val + " kilos = " + poundVal.toFixed(3) + " pounds"
}