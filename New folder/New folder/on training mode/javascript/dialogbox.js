function showAlert() {
document.write("hiiii....");
window.alert("sale end soon ....");
}
//show alert();

function showConfirm(){
    let action = window.confirm("do you really want delete thise file ...");
    console.log(action);
    if(action)
    window.alert("file deleted");
    else

    document.write("user canseled the action");
}
//showConfirm();
function showPrompt(){
    let cname=window.prompt("enter company name ");
    console.log(cname);
    console.log(typeof cname);
}
showPrompt();