let border1="solid red 2px";
let border2="solid green 2px";

let namenode=$('#name');
let errornode1=$('#error1');
let emailnode=$('#mailid')
let errornode2=$('#error2');
let passnode=$('#pass');
let errornode3=$('#error3');
let divnode=$('#er3');
let c_passnode=$('#c_pass');
let errornode4=$('#error4');
let agenode=$('#age');
let errornode5=$('#error5');
let formnode=$('#registrationform');

$(document).ready(function(){
namenode.blur(()=>validate1());
emailnode.blur(()=>validate2());
passnode.blur(()=>validate3());
c_passnode.blur(()=>validate4());
agenode.blur(()=>validate5());
formnode.submit(()=>validateForm());
});


function validate1(){
    let name=namenode.val();//hari
    errornode1.html("");
    if (name=='') {
        errornode1.html("this field is required");
        namenode.css('border',border1);  
        return false;  
    }
    else{
        namenode.css('border',border2);
        return true;
    }
}

function validate2(){
    let emailid=emailnode.val();//hari
    errornode2.html("");
    let ss=emailid.substring(emailid.indexOf('@')+1);

    if (emailid=='') {
        errornode2.html("this field is required");
        emailnode.css('border',border1);
        return false;    
    }
    else if(!emailid.includes('@')|| ss==''){
errornode2.html("invalid email id");
emailnode.css('border',border1);
return false;
    }
    else{
        emailnode.css('border',border2);
        return true;
    }
}


//access email node ,span node using id

function validate3(){
    let password=passnode.val(); //Hari
    errornode3.html(""); //empty
    divnode.innerHTML="";
    let regexp=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
    console.log(password);
    if(password=='') {
        errornode3.html("This field is required");
        passnode.css('border',border1);
        return false;
        }  
    else if(password.length<4 || password.length>9){
            errornode3.html("password length should be 4 to 9 chars");
            passnode.css('border',border1);
            return false;
        } 
    else if(regexp.test(password)==false) {
        let item1=document.createElement('li');let item2=document.createElement('li');
        let item3=document.createElement('li'); let item4=document.createElement('li');
        item1.innerHTML=" one small letter";item2.innerHTML=" one capital letter";
        item3.innerHTML=" one special symbol"; item4.innerHTML=" one digit";  
        let ulnode= document.createElement('ul');
        ulnode.append(item1,item2,item3,item4);
        divnode.append(ulnode);
        errornode3.innerHTML="password should contain atleast ";
        passnode.css('border',border1);
        return false;
    }
    else{
        passnode.css('border',border2);
        return true;
        }
}




function validate4(){
    let c_password=c_passnode.val(); //Hari
    let password=passnode.val();
    errornode4.html(""); //empty
   
   
    if(c_password=='') {
        errornode4.html("This field is required");
        c_passnode.css('border',border1);
        return false;
        }  
    else if(c_password!=password){
            errornode4.html("password should match with above");
            c_passnode.css('border',border1);
            return false;
        } 
    else{
        c_passnode.css('border',border2);
        return true;
        }
}



function validate5(){
    let age=agenode.val();
    console.log(typeof age);
    errornode5.html(""); //empty
   
    if(age=='') {
        errornode5.html("This field is required");
        agenode.css('border',border1);
        return false;
        }  
    else if(isNaN(age)){
            errornode5.html("only digits allowed");
            agenode.css('border',border1);
            return false;
        } 
        else if(parseInt(age)<1 || parseInt(age)>80){
            errornode5.html("put the age between 1-80");
            agenode.css('border',border1);
            return false;
        }
    else{
        agenode.css('border',border2);
        return true;
        }
}

function validateForm(){

    let s1=validate1();
    let s2=validate2();  
    let s3=validate3();
    let s4=validate4();
    let s5=validate5();

    return (s1 && s2 && s3 && s4 && s5)

    //T T T T T => T else F
    //if all fields ar valid then return true else return false

}



// $(document).ready(function(){
  
//     $('#showPass').on('click', function(){
//        var passInput=$("#pass");
//        if(passInput.attr('type')==='password')
//          {
//            passInput.attr('type','text');
//        }else{
//           passInput.attr('type','password');
//        }
//    })
//  })

function myFunction() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }