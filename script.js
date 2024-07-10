a=5;
var a=9;
console.log(a);
let b=20;
console.log(b);
{
    let b=90;
    console.log(b)
    const c=80
}
console.log(typeof(b));
var st='string';
console.log(typeof(st));
var d=true;
console.log(typeof(d));
var m;
console.log(typeof(m));
var arr1=['orange','apple',10]
console.log(arr1[0]);
console.log(arr1.length)
arr1.push('pineapple')
console.log(arr1)
// Javascript Objects
let person={
    name:'Nk',
    age:20,
    location:'TVM'
}
console.log(person.age)
let arr2=[{
    name:'Nk',
    age:20,
    location:'TVM'

},{
    name:'kishore',
    age:21,
    location:'Tvm'
}]
console.log(arr2[1].location)
function add(X,Y) {
    var sum=X+Y;
console.log(sum)
}
add(11,30);
function mul(X,Y) 
{
var prod=X*Y;
return prod;     
}
let p=mul(2,6);
console.log(p);
let x=1;
let y=++x;
console.log(x)
console.log(y)
var e=10;
let s='10';
if (e<s)
     {console.log('e is smaller')
    
} 
else if(e===s){
    console.log('e is equal to s');
}
else {
    console.log('e is greater')
    
}
// Looping Statements
var array=[12345]
for (let i= 0 ;i < array.length;i++) {
    console.log(array[i]);
}
for (const key in person) {
   console.log(key)
        
    }
    for (const i of array) {
        console.log(i)
        
    }
