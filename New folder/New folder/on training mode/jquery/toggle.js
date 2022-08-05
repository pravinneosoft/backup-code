$(document).ready(function(){
btnnode.click(function(){
    let lable=btnnode.html();
    if(label=='HIDE'){
        NodeList.hide(4000,function(){
            btnnode.html("SHOW");

        });
    }else{
        NodeList.show(2000,function(){
            btnnode.html("HIDE")
        });
    }
});
$('#btn2').mouseover(function(){
    NodeList.toggle(1000);
});
});