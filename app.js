const textElement = document.getElementById('text');
const speedElement = document.getElementById('speed');
const text =
  'The world we need won’t be built by men loyal to the world we have.';

let idx = 1;

let speed = 2000 / speedElement.value;

displayText();

function displayText() {
  textElement.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(displayText, speed);
}
