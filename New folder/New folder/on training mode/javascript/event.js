let paranode=document.getElementById("para");
console.log(paranode);

function selectFun(){
    let selection=window.getSelection().toString();
    console.log(selection);
}
function clickFun(){
    alert("click event occured");
}
let finish=function(msg){
    let action=confirm(msg+"do you really want to finish the exame");
    //true / false
}
function focusFun(){
    console.log("focused event occured...");

}
function extract(){
    let txtnode=document.getElementById("myname");
    let name=tstnode.value;
    console.log(name);
}
function changeFun(){
    let checknode=document.getElementById("checkbx")
    if(checknode.checked)
   console.log("check box is checked");
   else
   console.log("checbox is not checked") 
}