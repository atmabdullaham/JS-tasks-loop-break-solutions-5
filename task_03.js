// 3. Given an array of file sizes (in MB), find the first file larger than 500 MB. Use break to stop the loop once you find it.

let fileSizes = [150, 320, 480, 512, 750, 300, 1500];
for (let i = 0; i < fileSizes.length; i++) {
 console.log(fileSizes[i])
 if (fileSizes[i] > 500) {
  console.log(fileSizes[i]);
  break;
 }
}