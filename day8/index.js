// let promise=new Promise((resolve, reject) =>{
//     var x=false;
//     if(x){
//         resolve(x);
//     }
//     else{
//         reject("Error")
//     }
// })

// promise.then((res)=>{
//     console.log(res)
//     return res*res;
// })
// .then((res)=>{
//     console.log(res);
// });

// .catch((err) =>{
//     console.log(err);
// });

// let promise=new Promise((resolve, reject) =>{
//     var x=2;
//     return(x);




// })
// promise.then((res)=>{
//     console.log(res);
//     return res*res
// });




const person={name:"John",age:"22"}
const jsonString=JSON.stringify(person);
console.log(jsonString);

const text = '[ "Ford", "BMW", "Audi", "Fiat" ]';
const myArr = JSON.parse(text);
console.log(myArr[0]);
