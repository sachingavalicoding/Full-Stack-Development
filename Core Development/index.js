// let num = 10;
// let obj = {}
// console.log(obj);

// if(!obj){
//     console.log("It is running");
//     Object.assign(obj,{
//         num
//     });
// }
// if(!obj?.num){
//     console.log("It is running 2");
//     Object.assign(obj,{
//         num
//     });
// }
// console.log(obj);
// if(Object.hasOwn(obj,'num')){
//     // console.log("It is running 3");
//     Object.assign(obj,{
//         num:num * num
//     });
// }
// // console.log(obj);

let arr = [
    {
        name:'abc vendor',
        payment:50000
    },
    {
        name:'xyz vendor',
        payment:80000,
    }
]
// let totalPayments = 1;
// arr.forEach((row) => {
//     totalPayments *= row['payment'];
// });
// console.log(totalPayments);

let map = new Map();
arr.forEach((row) => {
    console.log(row,'row');
    
});
console.log(map);