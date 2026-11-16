let marks = [95, 43, 85, 56]

// Length of the array ....
console.log("Length of the array is : ", marks.length)

// Adding element to the array ....
marks[4] = 65
console.log(marks)

// Changing the existing value ....
marks[2] = 91
console.log(marks)

// Converting array to string ....
let str = marks.toString()
console.log(str)

// Joining the array ....
let jn = marks.join("_")
console.log(jn)

// Pop method in the array - removes last element ....
let po = marks.pop()
console.log(marks, po)

// Push method in the array - add an element at last ....
let pu = marks.push(76)
console.log(marks, pu)

// Shift method in the array - removes first element ....
let sh = marks.shift()
console.log(marks, sh)

// Un-shift method in the array - add an element at first ....
let unsh = marks.unshift(95)
console.log(marks, unsh)

// Delete operator in array ....
delete marks[1]
console.log(marks)

// Array concating - adding one array to another ....
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8, 9, 10]

let arr_new = arr1.concat(arr2)
console.log(arr1)
console.log(arr2)
console.log(arr_new)

// Sort method in array - (Sort alphabetically) ....
// Modify original array ....
let arr = [3324, 43, 4565, 435, 34, 5, 1, 2, 23655]

arr.sort()
console.log(arr)

// Sort method in array - (Sort numerically) ....
let compare = (a, b) => 
{
    return (a - b)
}

arr.sort(compare)
console.log(arr)

// Reverse method in array - reverse the array ....
arr.reverse()
console.log(arr)

// Splice method in array ....
// 1. Index to start  -  2. Delete elements  -  3. Add elements ....
// Returns deleted values ....
// Modify original array ....
let num = [324 , 543 , 645 , 765]

let del = num.splice(1 , 2 , 439)
console.log(num)
console.log(del)

// Slice methos in array ....
// Create new array - do not modify original array ....
let slc = [324 , 543 , 645 , 765 , 432]

let new_slc = slc.slice(2)
console.log(new_slc)

let new_slc_2 = slc.slice(2 , 4)
console.log(new_slc_2)