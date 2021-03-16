var myElement = document.getElementById('myElement');

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(myElement);
mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });

// listen to events...
mc.on("panleft panright", function(ev) {
    myElement.textContent = ev.type +" gesture detected.";
});

mc.on("panup pandown", function(ev) {
    myElement.textContent = ev.type +" gesture detected.";
});

mc.on("tap press", function(ev) {
    myElement.textContent = ev.type +" gesture detected.";
});
