// 1. You have an array of grades. Write a for loop to find the first failing grade (less than 50). Use break to stop the loop once you find it.


const grades = [60, 70, 40, 35, 89, 90, 78];

for (let i = 0; i < grades.length; i++) {
 if (grades[i] < 50) {
  console.log(grades[i]);
  break;
 }



}