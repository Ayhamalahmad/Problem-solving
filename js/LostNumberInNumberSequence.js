function findDeletedNumber(arr, mixArr) {
    let missingNumber = arr.filter((element) => !mixArr.includes(element))[0];
    if (missingNumber !== undefined) {
      return missingNumber;
    } else {
      return 0;
    }
  }
  findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5]); //, 2, 'Deletion')
  findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 9, 7, 4, 6, 2, 3, 8]); //, 5, 'Deletion')
  findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 7, 6, 9, 4, 8, 1, 2, 3]); //, 0, 'No deletion')
  