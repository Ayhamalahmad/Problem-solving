function findOutlier(integers) {
  let oddNumbers = [];
  let evenNumbers = [];
  integers.forEach((a) => (a % 2 === 0 ? evenNumbers : oddNumbers).push(a));
  return oddNumbers.length <= 1 ? oddNumbers[0] : evenNumbers[0];
}
findOutlier([0, 1, 2]); //, 1);
findOutlier([1, 2, 3]); //, 2);
findOutlier([2, 6, 8, 10, 3]); //, 3);
findOutlier([0, 0, 3, 0, 0]); //, 3);
findOutlier([1, 1, 0, 1, 1]); //, 0);
findOutlier([1]); //, 1);
findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]); //, 11);

// integers.forEach((a) => {
//   if (a % 2 === 0) {
//     evenNumbers.push(a);
//   } else {
//     oddNumbers.push(a);
//   }
// });
// if (oddNumbers.length <= 1) {
//   console.log(oddNumbers);
//   return oddNumbers;
// } else {
//   console.log(evenNumbers);
//   return evenNumbers;
// }
