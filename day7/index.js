const obj={
    name:"abhi",
    hobbies:["singing","tt","playing"],
    john:{
        hobbie:["tt","playing"]
    }
}
// console.log(obj.john.hobbie[1])
// playing


const arr=[1,2,3,4,5,6,7]
const [a,b,c,d,e,f,g,h]=arr;
// console.log(a,b,c,d,e,f,g,h);
// index.js:14 1 2 3 4 5 6 7 undefined


const newArr=[90,100,...arr,90,100];
// console.log(newArr);//(11) [90, 100, 1, 2, 3, 4, 5, 6, 7, 90, 100]
// console.log(arr);//(7) [1, 2, 3, 4, 5, 6, 7]




function add(a,b){
    console.log(a+b);
}

function whole(a,b){
    add(a,b);
}
whole(2,3)
