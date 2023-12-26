function findOutlier(integers: number[]): number {
    let oddNumbers: number[] = [];
    let evenNumbers: number[] = [];
    integers.forEach((a) => (a % 2 === 0 ? evenNumbers : oddNumbers).push(a));
    return oddNumbers.length <= 1 ? oddNumbers[0] : evenNumbers[0];

}

findOutlier([0, 1, 2]); //, 1);