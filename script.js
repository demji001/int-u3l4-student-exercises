let header = document.querySelector("h1");
let button = document.querySelector("button");
let img = document.querySelector("img");

// 1. Press the button on the webpage to change it up! Take notice of what happens.
// - What do you think innerHTML does?
// - What do you think .src does?


// 2. Try the following:
// - Make it so that the header says your name when the button is clicked.
// - Change the src of the image to something random.
button.addEventListener("click", function() {
    header.innerHTML = "🤯 Demetri 🤯";
    img.src = "https://randomwordgenerator.com/img/picture-generator/52e0d4404e57ac14f1dc8460962e33791c3ad6e04e507440722d72d0914bc5_640.jpg";
});


