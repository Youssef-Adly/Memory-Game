var randomNum = shuffle([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]);

for (var i = 0; i < document.images.length; i++) {
  document.images[i].onclick = reveal;
  document.images[i].id = randomNum.pop().toString(); // Ensure id is a string
}

setTimeout(() => {
  for (let i = 0; i < document.images.length; i++) {
    document.images[i].src = `./images/memory Game/${document.images[i].id}.gif`;
  }
}, 0);

setTimeout(() => {
  for (let i = 0; i < document.images.length; i++) {
    document.images[i].src = `./images/memory Game/Moon.gif`;
  }
}, 1000);

var firstId;
var firstImg;
var secondId;
var secondImg;
var clickedImages = 0;

function reveal() {
  if (clickedImages === 0) {
    firstImg = this;
    firstId = this.id;
    this.src = `./images/memory Game/${firstId}.gif`;
    clickedImages = 1;
  } else if (clickedImages === 1) {
    // Disable clicking the same image twice
    if (this === firstImg) {
      return;
    }
    secondImg = this;
    secondId = this.id;
    this.src = `./images/memory Game/${secondId}.gif`;
    clickedImages = 2;

    // Compare 'firstId' and 'secondId' after a short delay
    setTimeout(compareImages, 500);
  }
}

function compareImages() {
  if (firstId !== secondId) {
    firstImg.src = "./images/memory Game/Moon.gif";
    secondImg.src = "./images/memory Game/Moon.gif";
  } else {
    // Match found - do something if needed
  }
  // Reset values for the next turn
  firstId = undefined;
  firstImg = undefined;
  secondId = undefined;
  secondImg = undefined;
  clickedImages = 0;
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
