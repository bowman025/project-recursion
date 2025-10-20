const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    if (arr.length === 2) {
        if (arr[0] > arr[1]) {
            arr.push(arr.shift());
            return arr;
        } else return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftArr = mergeSort(arr.slice(0, mid));
    const rightArr = mergeSort(arr.slice(mid));
    const sortedArr = [];
    while (rightArr.length && leftArr.length) {
        if (leftArr[0] < rightArr[0]) sortedArr.push(leftArr.shift());
        else sortedArr.push(rightArr.shift());
    }
    return sortedArr.concat(leftArr).concat(rightArr);
}

console.log(mergeSort([]));
console.log(mergeSort([73]));
console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));