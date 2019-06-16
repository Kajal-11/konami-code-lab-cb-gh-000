const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
let index = 0;
function init() {
  // your code here
  (e) => {
  if (e === codes[index]) {
    index++;

    if (index === codes.length) {
      index = 0;
      return alert("Hurray!");
      }
    }
    else {
      index = 0;
    }
  }
}
