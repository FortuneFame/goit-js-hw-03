const findBestEmployee = function (employees) {
  'use strict';
  // Write code under this line

const values = Object.values(employees);

const maxValues = Math.max(...values);

const indexOfTheBest = values.indexOf(maxValues);

const keys = Object.keys(employees);

const theBestEmployee = keys[indexOfTheBest];

  if (keys.length === 0){
    return '';
  }

return theBestEmployee;
  
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
}; 
console.log(findBestEmployee(developers)); 
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
}; 
console.log(findBestEmployee(supports)); 
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
}
console.log(findBestEmployee(sellers)); 
// 'lux'