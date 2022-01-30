'use strict';

// Important Note:
// Kindly use forEach loop instead of for in all of your solutions

// Resource:
// forEach: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// 1) ---------------------
// 
//  using the (arrInc) function; increase the provided array values by 10
//  
//  EX:
//  [20, 54, 89, 41] ==> [30, 64, 99, 51]
//  
// ------------------------


// const array1 = ['a', 'b', 'c'];

// array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

//done
const arrInc = (arr) => {

    let result = [];
    result = arr;
    result.forEach((element, index) => {
        result[index] += 10;
    });

    return result;
}


// 2) ---------------------
// 
//  using the (roundDecimals) function; given an array of decimals round every value to the closest value
//  
//  EX:
//  [5.4, 5.5 ,6.7, 6.8] ==> [5, 6, 7, 7]
// 
// ------------------------
const roundDecimals = (arr) => {

    let result = [];
    result = arr;
    result.forEach((element, index) => {
        result[index] = Math.round(result[index]);
    });

    return result;
}

// 3) ---------------------
// 
//  An owner of a factory want to give bounce 100$ for the employee of production department who worked *More than* 8 hours
//  and 50$ for those who worked less, given their data increase their salary and return the data back again 
//  
//  EX:
// let data = [
//     {
//         name: "Robert",
//         section: "Transport",
//         workHours: 8,
//         salary: "3000$"
//     },
//     {
//         name: "Richard",
//         section: "HR",
//         workHours: 6,
//         salary: "4000$"
//     },
//     {
//         name: "Christopher",
//         section: "Production",
//         workHours: 10,
//         salary: "4500$"
//     },
//     {
//         name: "Andrew",
//         section: "HouseKeeping",
//         workHours: 9,
//         salary: "3200$"
//     }
// ]
// 
//  ==>
//
// [
//     {
//         name: "Robert",
//         section: "Transport",
//         workHours: 8,
//         salary: "3050$"
//     },
//     {
//         name: "Richard",
//         section: "HR",
//         workHours: 6,
//         salary: "4050$"
//     },
//     {
//         name: "Christopher",
//         section: "Production",
//         workHours: 10
//         salary: "4600$"
//     },
//     {
//         name: "Andrew",
//         section: "HouseKeeping",
//         workHours: 9,
//         salary: "3300$"
//     }
// ]
//

// ------------------------
//done
const employeesBonus = (arr) => {
    let result = [];
    result = arr;
    let flag = [];

    result.forEach((element, index) => {


        if (parseInt(result[index].workHours) > 8) {
            let s0 = result[index].salary;
            let s1 = s0.substring(0, s0.length - 1);
            let s2 = parseInt(s1) + 100;
            let s3 = s2.toString() + "$";
            result[index].salary = s3;
        }
        else {
            let s0 = result[index].salary;
            let s1 = s0.substring(0, s0.length - 1);
            let s2 = parseInt(s1) + 50;
            let s3 = s2.toString() + "$";
            result[index].salary = s3;
        }
    });

    return result;
}

// 4) ---------------------
// 
// Harry wants to buy a new mouse and keyboard for his new setup
// He wants to choose one mouse and one keyboard from the list of prices and take the most expensive combination
// but his budget is limited, help him by finding the most expensive *price* for a combination to buy with his budget
// 
// EX:
//
// budget = 200$
// mouseArray = [35, 15, 75, 180, 150, 50]
// keyBoardArray = [5, 150, 35, 120, 75, 50, 100]
// 
// ==> 200
// ------------------------
//not done
const mostExpensive = (budget, mouseArray, keyBoardArray) => {

    let m = mouseArray;
    let k = keyBoardArray;
    let b = budget;
    let b1 = "";
    let best= 0;
    let price;

for(let i=0;i<m.length;i++){
for(let j=0;j<k.length;j++)

{
if(m[i]+k[j]<=b && m[i]+k[j]> best)
{
 best=  m[i]+k[j] ;

}
}
}





    // for (var i = 1; i < m.length; i++)
    //     for (var j = 0; j < i; j++)
    //         if (m[i] < m[j]) {
    //             var x = m[i];
    //             m[i] = m[j];
    //             m[j] = x;
    //         }



    // for (var i = 1; i < k.length; i++)
    //     for (var j = 0; j < i; j++)
    //         if (k[i] < k[j]) {
    //             var x = k[i];
    //             k[i] = k[j];
    //             k[j] = x;
    //         }


    // if (m[m.length - 1] + k[k.length - 1] <= b)
    //     price = m[m.length - 1] + k[k.length - 1];

    // else {

    //     for (let t = 1; t <= m.length; t++) {
    //         let p1 = m[m.length - (1 + t)] + k[k.length - 1];
    //         let p2 = m[m.length - (1)] + k[k.length - (1 + t)];



    //         if (p1 >= p2) {
    //             if (p1 <= b) {
    //                 price = p1;
    //             }
    //         }



    //         else {
    //             if (p2 <= b) {
    //                 price = p2;
    //             }
    //         }




    //     }
    // }
    return best;
}





module.exports = { arrInc, roundDecimals, employeesBonus, mostExpensive };