class Form {
constructor () {

}

display() {
    var title = createElement('h1');
    title.html("carRacing"); 
title.position (130,0);

var input = createInput("name");
input.position (130,160);
 
var button = createButton("Play") 
button.position(250,200);

var greeting = createElement ('h2');

 button.mousePressed (function () {
     button.hide();
     input.hide();

     var name = input.value();

 playerCount = playerCount +1;

 player.update(name);

 player.updateCount(playerCount);

 greeting.html ("hello " + name);
greeting.position(130,160);
 }) 
 
}
}