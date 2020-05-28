export const distance = (x1, y1, x2, y2) => Math.sqrt(Math.pow(y2 - y1, 2) + Math.pow(x2 - x1), 2);

module.exports = { distance }