const countProps = function(obj) {
    'use strict';
  // Write code under this line
let total = 0; 
const keys = Object.keys(obj);
	for (const key of keys) {
    	total += obj[key];
    }; 
const objLength = countProps.length; 	
  return total;
};

console.log(countProps({})); // 0

console.log(countProps({a:1, b:1})); // 2

console.log(countProps({a:1, b:1, c:1, d:1, e:1})); // 5