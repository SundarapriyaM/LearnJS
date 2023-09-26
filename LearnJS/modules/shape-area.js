/* shape-area.js */
const PI = Math.PI;

// Define and export circleArea() and squareArea() below
const circleArea = (radius) => {
  return PI * radius * radius;
}

const squareArea = (length) => {
  return length * length;
}

module.exports = {
  circleArea,
  squareArea
};