// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let image = document.querySelector('.image');
image.src = "dog.png";


// CODE ALONG
// 1. An event listener is provided for the `contentButton`
// 2. When clicked, it should change the content of:
//   - The `name` header.

// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener('click', function() {

myName.innerHTML = "My name is Demetri";
myHobby.innerHTML = "I like to hang out with my friends";
myLocation.innerHTML = "I live in Zionsville";


});

contentButton.addEventListener("mouseout", function() {
    myName.innerHTML = "My name is...";
    myHobby.innerHTML = "My hobby is...";
    myLocation.innerHTML = "I live...";
})

// 3. Add an event listener to the `image1Button`
image1Button.addEventListener("mouseover", function() {
    image.src = "dog2.png";
});
// 4. When clicked, it should change the source of `image` to another image URL.
image1Button.addEventListener("mouseout", function() {
    image.src = "dog.png";
});




// 5. Add an event listener to the `image2Button`
image2Button.addEventListener("click", function() {
    image.src = "dog2.png";
});

image2Button.addEventListener("mouseout", function() {
    image.src = "dog.png";
});
// 6. When clicked, it should change the source of `image` to another image URL.


// BONUS
// 7. Try using different event types for your buttons.
