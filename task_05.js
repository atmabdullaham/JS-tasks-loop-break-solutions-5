// 5. Write a for loop to find the first item in an array of prices that is less than $20. Use break to stop the loop when found.

const prices = [60, 44, 75, 62, 12, 54, 65];
for (let i = 0; i <= prices.length; i++) {

 if (prices[i] < 20) {
  break;
 } console.log(prices[i])
}