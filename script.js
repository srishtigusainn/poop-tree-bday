const animal = document.getElementById("animal");
const poop = document.getElementById("poop");
const cake = document.getElementById("cake");
const message = document.getElementById("message");

// Scene 1: animal appears
setTimeout(() => {
  animal.style.opacity = 1;
}, 1000);

// Scene 2: poop appears
setTimeout(() => {
  poop.style.opacity = 1;
}, 3000);

// Scene 3: animal disappears
setTimeout(() => {
  animal.style.opacity = 0;
}, 5000);

// Scene 4: poop becomes cake
setTimeout(() => {
  poop.style.opacity = 0;
  cake.style.opacity = 1;
}, 7000);

// Scene 5: message appears
setTimeout(() => {
  message.style.opacity = 1;
}, 8500);

