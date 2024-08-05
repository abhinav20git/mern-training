const arr=[1,2,3,4,5,6,7,8,9];

// function array(arr){
    // for (let i=0; i<arr.length;i++){
        // document.getElementById("arr1").innerHTML = arr;
        // console.log(arr[i]);
    // }
// }
// array(arr)


// arr.splice(3,4,20,30)
// console.log(arr)


const sum=arr.reduce((acc,curr)=>{
    return acc+curr;
},0);
console.log(sum);
