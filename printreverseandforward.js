let arr=[[1,2,5],[3,4,8],[4,5,9]];

for(let i=0;i<arr.length;i++){
    let bag=""
    if(i%2==0){
        for(let j=arr[i].length-1;j>=0;j--){
            console.log(arr[i][j])
        }
    }else{
        for(let j=0;j<arr[i].length;j++){
        
            console.log(arr[i][j])
        }
    }
    
    
}