function onZoom(e) {
  const x = e.clientX - e.target.offsetLeft;
  const y = e.clientY - e.target.offsetTop;
  img.style.transformOrigin = `${x}px ${y}px`;
  img.style.transform = "scale(2.5)";
}

const capitalizeFirstLetter = (s) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const changeCommaToAnd = (s) => {
  return s.replace(/, /g, "&");
};

const limitString = (string, length, end = "...") => {
  return string.length < length ? string : string.substring(0, length) + end;
};

const getMin = (array) => {
  return Math.min(...array.map((item) => item.price));
};

const getMax = (array) => {
  return Math.max(...array.map((item) => item.price));
};

export {
  onZoom,
  capitalizeFirstLetter,
  changeCommaToAnd,
  limitString,
  getMin,
  getMax,
};
