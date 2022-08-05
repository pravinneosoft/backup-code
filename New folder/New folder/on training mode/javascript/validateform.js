let border1="solid 2px red";
let border2="solid 2px green";
let namenode=document.getElementById('name');
let errornode1=document.getElementById('error1');
function validate1(){
    let name=namenode.value;//hari
    errornode1.innerHTML="";//empty
    if(name==''){
        errornode1.innerHTML="thise field is required";
        namenode.style.border=border1;
        return false
    }
    else{
        namenode.style.border=border2;
        return true
    }
}


let passnode=document.getElementById('pass');
let errornode3=document.getElementById('error3');
let divnode=document.getElementById('er3');
function validate3(){
    let password=passnode.value; //Hari
    errornode3.innerHTML=""; //empty
    divnode.innerHTML="";
    let regexp=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
    console.log(password);
    if(password=='') {
        errornode3.innerHTML="This field is required";
        passnode.style.border=border1;
        return false
        }  
    if(password.length<4 || password.length>9){
            errornode3.innerHTML="password length should be 4 to 9 chars";
            passnode.style.border=border1;
            return false
        } 
        if(regexp.test(password)==false) {
        let item1=document.createElement('li');
        item1.innerHTML=" one small letter";
  


        let item2=document.createElement('li');



        let item3=document.createElement('li');


        
         let item4=document.createElement('li');
        
        item2.innerHTML=" one capital letter";
        item3.innerHTML=" one special symbol"; 
        item4.innerHTML=" one digit";  
        let ulnode= document.createElement('ul');
        ulnode.append(item1,item2,item3,item4);
        divnode.append(ulnode);
        errornode3.innerHTML="password should contain atleast ";
        passnode.style.border=border1;
        return false
    }
    else{
        passnode.style.border=border2;
        return true
        }

    }






let c_passnode=document.getElementById('c-pass');
let errornode4=document.getElementById('error4');
let divnode=document.getElementById('er3');
function validate4(){
    let c_password=c_passnode.value; //Hari
    let password=passnode.value;
    errornode4.innerHTML=""; //empty
    
    if(c_password=='') {
        errornode4.innerHTML="This field is required";
        c_passnode.style.border=border1;
        return false
        }  
    else if(c_password!=password){
            errornode4.innerHTML="password length should be 4 to 9 chars";
            c_passnode.style.border=border1;
            return false
        } 
 passnode.style.border=border1;
    
    else{
        c_passnode.style.border=border2;
        return true
        }
}

    let agenode=document.getElementById('age');
    let errornode3=document.getElementById('error5');
  
    function validate5(){
        let age=agenode.value; //Hari
        console.log(typeof age);
        
        errornode5.innerHTML=""; //empty
        
        if(age=='') {
            errornode5.innerHTML="This field is required";
            agenode.style.border=border1;
            return false
            }  
        else if(isNaN(age)){
                errornode5.innerHTML="only digit required";
                agenode.style.border=border1;
                return false
            } 
     passnode.style.border=border1;
        }
        else if(parseInt(age)<1 || parseInt(age>80)){
            errornode5.innerHTML="put age beetween 1 to 80";
            agenode.style.border=border1;
            return false
            }
            else{
                agenode.style.border=border2;
                return true;
            }
        }
      


        function validateform(){
            let s1=validate1();
            let s2=validate2();
            let s3=validate3();
            let s4=validate4();
            let s5=validate5();
            return(s1 &&s2 && s3 && s4 &&s5)
        }