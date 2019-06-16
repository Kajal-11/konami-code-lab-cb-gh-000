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

function init() {
  // your code here
  let index = 0;

  function triggerKeyDown(e) {
  const key = e;

  if (key === codes[index]) {
    index++;

    if (index === codes.length) {
      index = 0;
      alert("Hurray!");
      return true;
      }
    }
    else {
      index = 0;
    }
  }
}
