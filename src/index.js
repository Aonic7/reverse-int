module.exports = function reverse(n) {
    let n1 = Math.abs(n);
    const arr = Array.from(n1.toString()).map(Number);
    let arrrev = [];

    for (let i = 0; i < arr.length; i++) {

        arrrev[arr.length - 1 - i] = arr[i];
    }

    const num = Number(arrrev.join(''));
    return num;
}