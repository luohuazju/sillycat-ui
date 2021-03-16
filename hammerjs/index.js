var myElement = document.getElementById('myElement');

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(myElement);

// listen to events...
mc.on("swipeleft swiperight", function(ev) {
    myElement.textContent = ev.type +" gesture detected.";
});

mc.on("swipeup swipedown", function(ev) {
    myElement.textContent = ev.type +" gesture detected.";
});

mc.on("tap press", function(ev) {
    myElement.textContent = ev.type +" gesture detected.";
});
