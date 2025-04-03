let arr=[[1,2],[3,4],[4,5]];
for(let i=0;i<arr.length;i++){
    let sum="";
    for(let j=0;j<arr[i].length;j++){
        sum=sum+(i+j)+" ";
       //console.log(i+j)
    }
    console.log(sum)
}