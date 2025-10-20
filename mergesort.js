const mergeSort = (arr) => {
    if (arr.length < 1) return [];
    if (arr.length === 1) return arr;
    if (arr.length === 2) {
        if (arr[0] > arr[1]) {
            arr.push(arr.shift());
            return arr;
        } else return arr;
    }
    const midIndex = Math.floor(arr.length / 2);
    const leftArr = mergeSort(arr.slice(0, midIndex));
    const rightArr = mergeSort(arr.slice(midIndex));
    const sortedArr = [];
    while (rightArr.length > 0) {
        if (leftArr[0] > rightArr[0] || leftArr.length === 0) sortedArr.push(rightArr.shift());
        if (rightArr[0] > leftArr[0] && leftArr[0] !== undefined || rightArr[0] === leftArr[0] && leftArr[0] !== undefined) sortedArr.push(leftArr.shift());
    }
    while (rightArr.length === 0 && leftArr.length > 0) sortedArr.push(leftArr.shift());
    return sortedArr;
}

console.log(mergeSort([]));
console.log(mergeSort([73]));
console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));