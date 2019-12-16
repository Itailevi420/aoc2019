const fs = require('fs');
const input = fs.readFileSync("./input.txt", 'utf8').split('\n');
const calculateFuel = (mass) => Math.floor(mass / 3) - 2;
//console.log(calculateFuel(1969))

module.exports = {
  input,
  calculateFuel
};