// Code your solution in this file!
let drivers = ['sarah', 'angelica', 'jerry', 'tom'];
let arrAB = [];


const returnFirstTwoDrivers = function(arr) {
  let frontDrivers = arr.slice(0,2);
  return frontDrivers;
}

const returnLastTwoDrivers = function(arr) {
  let back = arr.length-1;
  let backDrivers = arr.slice(back - 1,back + 1);
  return backDrivers;
}

console.log(returnFirstTwoDrivers (drivers));
console.log(returnLastTwoDrivers (drivers));

let a = returnFirstTwoDrivers(drivers);
let b = returnLastTwoDrivers(drivers);
//arrAB.push(a,b);

const selectingDrivers = function(arr1,arr2) {
    arrAB.push(returnFirstTwoDrivers, returnLastTwoDrivers);
    return arrAB;
  }

console.log(selectingDrivers(a,b));



