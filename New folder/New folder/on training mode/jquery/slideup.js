$(document).ready(function(){
    let buttonnode=$('#btn');//document get
    let nodes=$('.krishnaimg');
     buttonnode.click(function(){ //click event jquery
        let label=buttonnode.val();


        if(label=='SLIDE UP'){
            nodes.hide(5000,function(){
                buttonnode.val('SLIDE DOWN'); //innerhtml=show
            }); //hide effect of jequery
        }
        else{
            nodes.show(3000,function(){
                buttonnode.val('SLIDE UP');
            });
        }
       
    });
    $('#btn2').mouseover(function(){
        slide.toggle(1000);
    });
});