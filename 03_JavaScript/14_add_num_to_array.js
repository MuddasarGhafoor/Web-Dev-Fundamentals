let arr = [1, 2, 3, 4, 5]
let num;

do {
    num = prompt("Enter a number : ")
    num = Number.parseInt(num)
    arr.push(num)
} while (num != 0);

console.log(arr)