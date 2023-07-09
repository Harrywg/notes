const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

window.addEventListener("resize", (event) => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});

let canvasData = {}; //store all data needed to render elements

// replace cursor
let cursorImg = new Image();
cursorImg.source = "./pencil-cursor.png";
window.addEventListener("mousemove", (event) => {
  canvasData.cursorData = {
    x: event.clientX,
    y: event.clientY,
    renderLayer: 1000000,
    source: "./pencil-cursor.png",
    renderFunction: "fillRect",
  };

  //   temporary to test above
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  ctx[canvasData.cursorData.renderFunction](
    canvasData.cursorData.x,
    canvasData.cursorData.y,
    5,
    5
  );
});
