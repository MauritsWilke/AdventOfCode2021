const fs = require(`fs`)
const input = (fs.readFileSync("./day_7/input.txt", "utf-8")).split(`,`).map(Number)
let fuelCosts = [...Array(Math.max(...input) + 1)].map(() => 0)
for (i = 0; i < Math.max(...input) + 1; i++) for (point of input) fuelCosts[i] += (Math.abs(i - point) * (Math.abs(i - point) + 1)) / 2
console.log(Math.min(...fuelCosts))