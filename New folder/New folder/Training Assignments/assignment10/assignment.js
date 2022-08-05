$(document).ready(function(){
    $("#zoominbtn").click(function(){
         $("img").width($("img").width()+100);
         $("img").height($("img").height()+100);
    });
    $("#zoomoutbtn").click(function(){
         $("img").width($("img").width()-100);
         $("img").height($("img").height()-100);
    });   
 });
 $(document).ready(function(){
 $("#button1").click(function(){
    $("#img1").hide(4000, function(){
    //   alert("The paragraph is now hidden");

    $("#img2").hide(4000, function(){
     //   alert("The paragraph is now hidden");
     $("#img3").hide(4000, function(){
          //   alert("The paragraph is now hidden");
          }   );
     }   );
    }   );
  }); });
  $(document).ready(function(){
    $("#button2").click(function(){
       $("#img1").show(4000, function(){
       //   alert("The paragraph is now hidden");
       $("#img2").show(4000, function(){
          //   alert("The paragraph is now hidden");
          $("#img3").show(4000, function(){
               //   alert("The paragraph is now hidden");
               }   );
          }   );
         
       }   );
     }); });



     $(document).ready(function(){
          let buttonnode=$('#btn');//document get
          let nodes=$('.krishnaimg');
           buttonnode.click(function(){ //click event jquery
              let label=buttonnode.html();
      
      
              if(label=='FADE TO'){
                  nodes.fadeTo(5000,0.3,function(){
                      buttonnode.html('FADETO'); //innerhtml=show
                  }); //hide effect of jequery
              }
              else{
                  nodes.fadeIn(function(){
                      buttonnode.html('FADE IN');
                  });
              }
             
          });  });





          $(document).ready(function(){
  
            $('#showPass').on('click', function(){
               var passInput=$("#passInput");
               if(passInput.attr('type')==='password')
                 {
                   passInput.attr('type','text');
               }else{
                  passInput.attr('type','password');
               }
           })
         })