$(document).ready(function(){
    let buttonnode=$('#btn');//document get
    let nodes=$('.krishnaimg');
     buttonnode.click(function(){ //click event jquery
        let label=buttonnode.html();


        if(label=='FADE OUT'){
            nodes.hide(3000,function(){
                buttonnode.html('FADE IN'); //innerhtml=show
            }); //hide effect of jequery
        }
        else{
            nodes.show(4000,function(){
                buttonnode.html('FADE OUT');
            });
        }
       
    });
    $('#btn2').mouseover(function(){
        nodes.toggle(5000);
    });
});