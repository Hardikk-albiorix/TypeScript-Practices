let str:string = "I am developer";
let str1:string = "";
let x:number= str.length;
for(let i = x ; i > 0 ; i--){
    str1 = str1 + str[i-1];
}
console.log("reversed string :" + str1);

const s:string = str.split("").reverse().join("");
console.log("Reversed string :"+s);