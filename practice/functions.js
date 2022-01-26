//function declaration
//syntax: function fname(parameter list){//body}
function sum(a,b){
    return a+b;
}
console.log(sum(2,3))

//function expression
//syntax: const fname=function(parameter list){//body};
const sumexp=function (a,b){
    return a+b;
};
console.log(sumexp(3,4))

//arrow function
//syntax: const fname=(parameter list)=>{//body};
const sumarr=(a,b)=>a+b;
console.log(sumarr(5,6))