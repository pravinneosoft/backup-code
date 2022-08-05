let mtrnode=$('#fuelind');
let minval=mtrnode.attr('min');
let maxval=mtrnode.attr('max');
mtrnode.css({height:'50px',width:'800px'});
$('.btn').click(function(){
    let interval=setInterval(() => {
        mtrnode.val(mtrnode.val()-1);
        console.log(mtrnode.val());
        if (mtrnode.val()==maxval){
            clearInterval(interval);
        }
    }, 100);
});


$(document).ready(function(){
    $("#btn1").click(function(){
      $("div").fadeOut(3000);
    });
     $("#btn2").click(function(){
      $("div").fadeIn(3000);
    }); 

    let images_array=[
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
    ]
    let pic=$('.gallery_pic')

    let  i=0;

    setInterval(function(){
        i=(i+1)%images_array.length//return 0,1,2,3,0,1,2,3...
        $(document).ready(function(){
            pic.fadeOut(1000,()=>{
                pic.attr('src',images_array[i]);
                pic.fadeIn(1000);
            });
            });
    },100);
  



  });