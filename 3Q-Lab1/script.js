const C = 2.9978e8;

function calculateRelativsticKineticEnergy() {
    let v = parseFloat(document.getElementById("volume").value);
    let m = parseFloat(document.getElementById("mass").value);
    let lowerpart = Math.sqrt(1 - (v ** 2) / (C ** 2));
    let k = (m * (C ** 2)) / lowerpart;

    let output = `The Relativistic Kinetic Energy is ${k}`;
    document.getElementById("result").innerText = output;
}
