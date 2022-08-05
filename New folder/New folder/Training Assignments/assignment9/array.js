let parent1=document.getElementById('sec');

let arr = [];
for(let i=0;i<3;i++){
    let items=window.prompt('enter list element');
    arr[i]=items;
}
let ollist=document.createElement('ol');

let item1=document.createElement('li');
item1.innerHTML=arr[0];

let item2=document.createElement('li');
item2.innerHTML=arr[1];

let item3=document.createElement('li');
item3.innerHTML=arr[2];

ollist.append(item1,item2,item3);

parent1.append(ollist);