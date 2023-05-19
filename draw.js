const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
var snake;
var start = 0;

(function setup() {
  snake = new Snake();

  window.setInterval(() => {
    if (start) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      snake.update();
      snake.draw();
      snake.checkCollision();
    } else {
      console.log("Press anything to start");
    }
  }, 50);
})();

window.addEventListener("keydown", (evt) => {
  start = 1;
  const direction = evt.key.replace("Arrow", "");
  snake.changeDirection(direction);
});