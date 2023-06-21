const givenInput=[1,1,1,1,0,0,1,1,1,1,1,1]
const nRow=4;
const nCol=3;
let newArr=[]
let index=0

let result=[]
for(let i=0;i<nRow;i++){
 newArr.push([])
 for(let j=0;j<nCol;j++){
     newArr[i].push(givenInput[index])
     index=index+1;
 }
}
newArr.forEach((el)=>{
    let maxCount=0;
    for(let val of el){
        if(val===1)maxCount=maxCount+1
    }
    result.push(maxCount);


})

const getMaxValue=Math.max(...result)
console.log(result.indexOf(getMaxValue));

