alert("Enter your gpa")

let gpa = prompt("Enter gpa here" , "4")
gpa = Number.parseFloat(gpa)

let write = confirm("Do you want to write it on the page?")
if (write) 
{
    document.write(gpa)
}
else
{
    document.write("non")
}