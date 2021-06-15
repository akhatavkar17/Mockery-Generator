var inbox = document.getElementById("enter-box");
var outbox = document.getElementById("out-box");
function crazyCase(input) {
    var out = "";
    for (var i = 0; i < input.length; i++) {
        var factor = 50000000; // randomness factor
        var rando = parseInt((Math.random() * factor).toFixed(0)); // get random number
        var divider = 2; // parseInt((Math.random() * 10).toFixed(0));
        if (rando % divider === 0) {
            // if even uppercase
            out += input[i].toUpperCase();
        }
        else {
            // else lowercase even the Caps
            out += input[i].toLowerCase();
        }
    }
    return out; // return randomly cased string
}
function onChange(e) {
    outbox.innerHTML = crazyCase(this.value); // add to outbox
}
inbox.addEventListener("input", onChange); //
