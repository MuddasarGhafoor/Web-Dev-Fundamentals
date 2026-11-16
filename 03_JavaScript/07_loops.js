// for loop ....
for (let i = 0; i < 10; i++)
{
    console.log(i);    
}


// for-in loop ....
const obj =
{
    student_1 : 43,
    student_2 : 34,
    student_3 : 76,
    student_4 : 86,
    student_5 : 70,
}
for (const stu in obj) 
{
    console.log("Marks of " + stu + " are " + obj[stu])
}


// for-of loop ....
for (const name of "Meer") 
{
    console.log(name)
}


// while loop ....
let n = prompt("Enter a number");
n = Number.parseInt(n);

let i = 0;
while (i < n) 
{
    console.log(i);
    i++
}

// do-while loop ....
let s = 0;
do
{
    console.log(s);
    s++
}while(s < 5)