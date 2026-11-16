let age = prompt("Whats your age : ")
age = Number.parseInt(age)


// if statement ....
if (age >= 18) 
{
    console.log("You can Drive!")
}


// if-else statement ....
if (age >= 18) 
{
    console.log("You can Drive!")
}
else
{
    console.log("You cannot Drive!")
}


// if-else-if statement ....
if (age <= 18) 
{
    console.log("You cannot Drive!")
}
else if (age > 50)
{
    console.log("You are aged!")
}
else
{
    console.log("You can Drive!")
}


// Ternary Operator ....
console.log("You can " , (age<18? "not drive" : "drive"))


// Switch Case ....
switch (age) 
{
    case 17:
        console.log("You cannot Drive!")
        break;
    case 18:
        console.log("You can Drive!")
        break;
    case 19:
        console.log("You are aged!")
        break;
    default:
        console.log("Invalid age!!")
        break;
}