var a=+prompt("entre the first subject number")
var b=+prompt("entre the second subject number");
var c=+prompt("entre the third subject number");


document.write("total sure"+(a+b+c)+"<br>")
document.write("percentage"+((a+b+c)/300)*100+"<br>")

if(a+b+c>=250){
    document.write("PASS"+"<br>")
}

else if(a+b+c>=180){
    document.write("you have to improve your self"+"<br>"+"AVERAGE")
}
else if(a+b+c>=100){
    document.write("FAIL"+"<br>"+"NEED EXTRA EFFORTS")
}
else if(a+b+c<=100){
    document.write("Need extra focus"+"<br>"+"Out from this sem")

}
else{
    document.write("Not defined")
}