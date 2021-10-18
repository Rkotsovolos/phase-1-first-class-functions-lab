// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = () => {
    let newArray = drivers.slice(0,2);
    return newArray;
}

const returnLastTwoDrivers = () => {
    let newArray2 = drivers.slice(2);
    return newArray2;
}
console.log(returnFirstTwoDrivers())
console.log(returnLastTwoDrivers())

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function callBackNumber() {
    return 
}


function createFareMultiplier(multiplier) {    
    // const fareDoubler = (someFare) => someFare * someNumber
     return function(theFare) {
        return theFare * multiplier;
     }

}


 const fareDoubler = createFareMultiplier(2)

// fareDoubler(4);
// createFareMultiplier(2)(4)


const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers();
}