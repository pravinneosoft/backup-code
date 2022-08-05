let str="Neosoft tech";
console.log(str.toUpperCase());

let str1="WELCOME";
console.log(str1.toLowerCase());

let str2="Neosoft Technology";
console.log(str2.lastIndexOf("Technology"));
console.log(str2.lastIndexOf('o',21));

//  includes(searchString)
//includes(searchString, position)

let str3="welcome to neosoft";
console.log(str3.includes('welcome'));


// padStart(targetLength)
// padStart(targetLength, padString)

let str4="123";
console.log(str4.padStart(8));

// padEnd(targetLength)
// padEnd(targetLength, padString)
console.log(str4.padEnd(10,"fkdls"));