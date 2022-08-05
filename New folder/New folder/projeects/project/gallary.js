

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


             $(document).ready(function( ){
               $("#zoominbtn").click(function(){
                    $("#mm1").width($("#mm1").width()+100);
                    $("#mm1").height($("#mm1").height()+100);    }); 


                    $("#zoominbtn2").click(function(){
                    $("#mm2").width($("#mm2").width()+100);
                    $("#mm2").height($("#mm2").height()+100);
           });



           $("#zoominbtn3").click(function(){
               $("#mm3").width($("#mm3").width()+100);
               $("#mm3").height($("#mm3").height()+100);
      });



      $("#zoominbtn4").click(function(){
          $("#mm4").width($("#mm4").width()+100);
          $("#mm4").height($("#mm4").height()+100);
 });


 $("#zoominbtn5").click(function(){
     $("#mm5").width($("#mm5").width()+100);
     $("#mm5").height($("#mm5").height()+100);
});


$("#zoominbtn6").click(function(){
     $("#mm6").width($("#mm6").width()+100);
     $("#mm6").height($("#mm6").height()+100);
});



               $("#zoomoutbtn").click(function(){
                    $("#mm1").width($("#mm1").width()-100);
                    $("#mm1").height($("#mm1").height()-100);
               });   



               $("#zoomoutbtn2").click(function(){
                  $("#mm2").width($("#mm2").width()-100);
                  $("#mm2").height($("#mm2").height()-100);
             }); 



             $("#zoomoutbtn3").click(function(){
               $("#mm3").width($("#mm3").width()-100);
               $("#mm3").height($("#mm3").height()-100);
          });   



          $("#zoomoutbtn4").click(function(){
             $("#mm4").width($("#mm4").width()-100);
             $("#mm4").height($("#mm4").height()-100);
        }); 
        $("#zoomoutbtn5").click(function(){
          $("#mm5").width($("#mm5").width()-100);
          $("#mm5").height($("#mm5").height()-100);
     });   



     $("#zoomoutbtn6").click(function(){
        $("#mm6").width($("#mm6").width()-100);
        $("#mm6").height($("#mm6").height()-100);
   }); 



   $("#flip").click(function(){
     $("#panel").slideToggle("slow");
   });
 







            }
            );
     




              