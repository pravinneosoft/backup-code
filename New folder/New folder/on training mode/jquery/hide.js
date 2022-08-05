// ready function : if document is ready then we can apply effect
$(document).ready(function(){
    let buttonnode=$('#btn');//document get
    let nodes=$('.krishnaimg');
     buttonnode.click(function(){ //click event jquery
        let label=buttonnode.html();


        if(label=='HIDE'){
            nodes.hide(5000,function(){
                buttonnode.html('SHOW'); //innerhtml=show
            }); //hide effect of jequery
        }
        else{
            nodes.show(3000,function(){
                buttonnode.html('HIDE');
            });
        }
       
    });
    $('#btn2').mouseover(function(){
        nodes.toggle(1000);
    });
});