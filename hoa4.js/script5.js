function deepComp(a,b){
  return JSON.stringify(a) === JSON.stringify(b);
}

let a={x:[1,2,3,4,5], y:0, z:{m:'test', n:false}};
let b={x:[1,2,3,4,5], y:0, z:{m:'test', n:false}};
let c={x:[1,2,3,4,5,6], y:0, z:{m:'test', n:false}};
let d={x:[1,2,3,4], y:0, z:{m:'test', n:false}};
let e={x:[1,2,3,4,5], y:0, z:{m:'test', n:true}};
let f={x:[1,2,3,4,5], y:-1, z:{m:'test', n:false}};

console.log(deepComp(a,b)); // true
console.log(deepComp(a,c)); // false
console.log(deepComp(a,d)); // false
console.log(deepComp(a,e)); // false
console.log(deepComp(a,f)); // false