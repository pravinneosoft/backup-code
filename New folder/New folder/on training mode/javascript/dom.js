let imgnode=document.getElementById('krishna1');
console.log(imgnode);
console.log(imgnode.src);
console.log(imgnode.height);
console.log(imgnode.width);
let btnnode=document.getElementById("zoominbtn");
btnnode.addEventListener("click",()=>zoomIn());
function zoomIn(){
    // let h=imgnode.height;
    // let w.imgnode.width;
    // h=h+50; w=w+50;
imgnode.height=imgnode.height+50;
imgnode.width=imgnode.width+50;
}


console.log("-------");
let nodearray1=document.getElementsByClassName('block');
for(let element of nodearray1){
    console.log(element);

}
// nodearray1.array.forEach(element => {
//     console.log(element);
// });

console.log("----");
let nodearray2=document.getElementsByTagName("section");
for(let element of nodearray2){
    console.log(element);
}

// nodearray2.array.forEach(element => {
//     console.log(element);
// });

console.log("------");
let nodearray3=document.getElementsByName('courses');
nodearray3.forEach(node=>console.log(node));


function check(){
    console.log("selected element value");
    nodearray3.forEach(function(node){
        if(node.checked)
        console.log(node.value);
    });
}

let parentnode=document.getElementById("bdy");
parentnode.style.margin="50px";
// parentnode.style.backgroundImage='url("../../'")';
let childNodes=parentnode.children; //parentnode.childnode;
for(let child of childNodes)
document.write(child);

// create element appendchild/append inserbefore inserafter removechild replacechild, innerhtml , innertext, form validation

let paranode=document.createElement("p");
let textnode=document.createTextNode("India is my counttry");
paranode.append(textnode);
parentnode.append(paranode);
let divnode=document.getElementById('block1');
parentnode.insertBefore(paranode,divnode);//inserting before particular child
function paste(){
    let innercontents=document.getElementById("block1").innerText; //innerhtml
    document.getElementById("art").innerText=innercontents;//innerhtml

}