$(function(){
    let imgnode=$('#image');
    imgnode.mouseover(function(){
        let hh=imgnode.height();
        console.log(hh+" "+typeof hh);
        imgnode.height(hh+100);
        //do it for width also
    });
// TextEncoder.keyup(function(){
//     let name=textnode.val();
//     console.log(name);
//     $("#output").html(name);
//     $("#output1").val(name);

// });
let mtrnode=$('#fuelind');
let maxval=mtrnode.attr('max');
mtrnode.css({height:'50px',width:'800px'});
$('.btn').click(function(){
    let interval=setInterval(() => {
        mtrnode.val(mtrnode.val()+1);
        console.log(mtrnode.val());
        if (mtrnode.val()==maxval){
            clearInterval(interval);
        }
    }, 100);
});
});