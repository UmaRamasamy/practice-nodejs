// const arrayList = process.argv;
// const add = arrayList.slice(2,arrayList.length );

// let sum = 0;
// let solution = add.forEach((num)=>{
//     sum = sum+Number(num)
//     return sum
// })
// console.log(sum)

let result =0
for(let i=2; i< process.argv.length; i++){
    result = result + Number(process.argv[i])
}
console.log(result)
