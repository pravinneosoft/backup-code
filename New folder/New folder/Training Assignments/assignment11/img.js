
let images_array=[
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
]
let pic=$('.gallery_pic')

let  i=0 ;

setInterval(function(){
    i=(i+1)%images_array.length//return 0,1,2,3,0,1,2,3...
    $(document).ready(function(){
        pic.fadeOut(1000,()=>{
            pic.attr('src',images_array[i]);
            pic.fadeIn(1000);
        });
        });
},100);