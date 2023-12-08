// 1-misol

// function maxThreeNumbers (arg1, arg2, arg3) {
//     let max;
//     if (arg1 > arg2) {
//         max = arg1;
//     } else { max = arg2; }

//     if (max < arg3) {
//         max = arg3;
//     }
//     return max
// }

// console.log(maxThreeNumbers(1, 2 ,3));


// 2-misol 

// function ex2 (arg1, arg2) {
//     let res = 0;
//     for (let i = arg1; i <= arg2; i++){
//         if (i % 2 == 0) {
//             res += i;
//         }
//     }
//     return res
// }

// console.log(ex2(1, 5));

// 3-misol

// function ex3 (arg1) {
//     let b1 = arg1 % 10;
//     let o1 = Math.trunc((arg1 % 100) / 10)
//     let y1 = Math.trunc(arg1 / 100)

//     return b1 + o1 + y1;
// }

// console.log(ex3(123));

// 4-misol

// function ex3 (arg1) {
//     let b2 = arg1 % 10;
//     let o2 = Math.trunc((arg1 % 100) / 10)
//     let y2 = Math.trunc(arg1 / 100)
//     let res2 = 0;
    
//     if (b2 % 2 == 0){
//         res2 += b2;
//     }
    
//     if (o2 % 2 == 0){
//         res2 +=o2;
//     }
    
//     if (y2 % 2 == 0){
//         res2 += y2;
//     }
    
//     return res2;
// }
    
// console.log(ex3(245));

// 5-misol


// function ex3 (arg1) {
//     let res2 = 1;
    
//     for (let i = 1; i <= arg1; i++){
//         if (i % 3 != 0 && i % 5 != 0){
//             res2 *= i;
//         }    
//     }

//     return res2;
// }
    
// console.log(ex3(5));

// 6-misol

// function ex4 (arg1) {
//     let res2 = 1;
    
//     for (let i = 1; i <= arg1; i++){
//         if (i % 7 == 0 || i % 5 == 0){
//             res2++;
//         }    
//     }

//     return res2;
// }
    
// console.log(ex4(15));

// 7-misol

// function ex4 (arg1) {
//     let res2 = 0;
//     let counter = 0;
    
//     for (let i = 1; i <= arg1; i++){
//         if (arg1 % i == 0){
//             res2++;
//         }
//     }
//     if (res2 == 2){
//         counter = "Tub son"; 
//     } else {counter = "Tub son emas";}
    
//     return counter;
// }
    
// console.log(ex4(5));
