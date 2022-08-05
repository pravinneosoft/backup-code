// dynamically bounded with datatype
var company="neosoft technology";
document.write("company");
company=3434.344;
document.write("<br> "+company);
const city= "navi mumbai";
console.log("company" +company)


function show2{
    document.write("thise is a simple function2");
    document.write("<b>thise is a simple function2<b>");
    document.write("company");// document.write(EmpID);
}
show1(); show2();
function makeaddition( num1,num2){
    return (num1+num2);
}
let result=makeaddition(56,78);
console.log("result is ", +result);
function diff(){


}


var k=10;
while(k>=5){
    console.log(k); k--;

}
let count=10;
while(count>10){
    console.log(count); count--;

}
do{
    console.log(count); count--;
}while(count>10);
let age=18;
let gender="female";
if(age>=18)
{
    document.write("<b> you are allowed for voting</b>");
    if(gender=="female"){ }
    else{

    }
}
else
document.write(",<b> you are not allowed for voting")
document.write("youre age is the",+age)
}
diff()

demo();
let cubeFun=function(no)
{
    let cube=no*no*no;
    return cube;
}
let res=cubeFun(3);console.log(res);
console.log(cubeFun(2));

//if function taking only single parameter then () are optional
// if function have only single statement in body then{} are optional
// if a function have single return statement then return keyword not allowed function bydefault return the zero

let cubeArrowFun=no=>no*no*no

let cuberes=cubeArrowFun(4);
console.log(cuberes);