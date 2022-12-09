const zoom = (e) => {
  console.log(e);
  let zoomer = e.currentTarget;
  let offsetX = e.offsetX;
  let offsetY = e.offsetY;
  e.offsetX ? (offsetX = e.offsetX) : (offsetX = e.touches[0].pageX);
  e.offsetY ? (offsetY = e.offsetY) : (offsetX = e.touches[0].pageX);
  let x = (offsetX / zoomer.offsetWidth) * 100;
  let y = (offsetY / zoomer.offsetHeight) * 100;
  zoomer.style.backgroundPosition = x + "% " + y + "%";
};

export { zoom };
