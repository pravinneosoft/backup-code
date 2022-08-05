let comp="Neosoft Technologies";
console.log(comp.substring(3,9));
console.log(comp.substr(3,9));
console.log(comp.substr(-16,6));

let arr2=[32,43,54,,65,54,34];
let arr3=['om','sanju','yash','oloi','piyali'];
let arr4=new Array(32,43,54,6,76,4,5,544);
console.log(arr4.length);
let arr5=new Array(4);
console.log(arr5);
arr5.push('mumbai');
console.log(arr5.length);
console.log(arr5);
arr5.unshift('raygad');
console.log(arr5.length);
console.log(arr5);

// 1. push(add from end) 2. pop (remove from end) 3. unshift(adding from front) 4. shift(removinfg from front)

let cities=['mumbai','navimumbai','thane','kolhapur']
for(let j=0; j<cities.length; j++){
console.log(cities[j]);
}
console.log("backword");
for(let j=cities.length-1;j>=0;j--){
    console.log(cities[j]);
}
console.log("Enhanced");
for(let item of cities){
    console.log(item);
}
console.log("using forEach method");
cities.forEach(function(ele,ind,array) {
    console.log(ele+" "+ind+" -- "+array);
});
cities.forEach(function(e){
    console.log(e);
});
cities.forEach(e=>console.log(e));

let salaries=[4344, 4344,4334 ,4343]
//store all salaries in new array by increamenting
let incsalaries=salaries.map(salary=>salary+4000);
console.log(salaries);
console.log(incsalaries);

// implement sum of array of element
// n element : 1 value  : reduction

let sum=salaries.reduce(function(acc,current){
    return acc+current;
});
console.log(sum);
let sum1=salaries.reduce(function(acc,current){
    return acc+current;
},15);//initial value accumulator
console.log(sum1);
console.log(sum2);
let sum2=salaries.reduce((acc,ele)=>acc+ele);
console.log(sum2);
//store all salaries< 60000 in new array and display new array
// store first salary<60000 in variaable and display that


//spread operator
let ar1=[3,4,6,2,43];
let ar2=[...ar1];
console.log(ar2);
function add(...ar){
console.log(ar);
let sum=0;
let ar2=ar;
sum=ar2.reduce((acc,e)=>acc+e); //reduce not work with empty array
console.log(sum);
}
add(22,32);
add(32,21,33);
//add();
add(12);