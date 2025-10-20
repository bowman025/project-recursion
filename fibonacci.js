const fibs = (n) => {
    let a = 0;
    let b = 1;
    let arr = [a, b];
    if (n < 1) return [];
    if (n === 1) return [0];
    for (let i = 2; i < n; i++) {
        let c = a + b;
        a = b;
        b = c;
        arr.push(c);
    }
    return arr;
}

console.log(fibs(8));

const fibsRec = (n) => {
    console.log("This was printed recursively");
    if (n < 1) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    let arr = fibsRec(n - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
}

console.log(fibsRec(8));