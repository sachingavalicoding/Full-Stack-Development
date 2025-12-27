let str = "I am software developer";
// // output -> developer software am I;
// let i = 0;
// let word = '';
// let arr = [];debugger;
// while(i < str.length){
//     if(str[i] !== " "){
//         word += str[i];
//     }
//     else{
//         if(word.length > 0){
//             arr.push(word);
//             word = '';
//         }
//     }
//     i++;
// }
// if(word.length > 0){
//     arr = [...arr, word];
// }
// console.log(arr.reverse().join(" ").trim());

let newStr = str.split(" ").reverse().join(" ").trim();
console.log(newStr)