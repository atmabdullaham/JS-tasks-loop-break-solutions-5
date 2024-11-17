// // 2. You are checking items in stock. If you find any item marked "out of stock", stop checking further. Use break to exit the loop when found.

// 5. Finding an Available Parking Spot
// Problem:
// You are managing a parking lot.You have a list of spots, some of which are marked as "occupied." Your task is to find the first available spot.If a spot is available, stop and assign it.

let parkingSpots = ["Occupied", "Occupied", "Available", "Occupied", "Available"];
for (let i = 0; i < parkingSpots.length; i++) {
 if (parkingSpots[i] === 'Available') {
  break;
 } console.log(parkingSpots[i]);
}