function String(list){
    let l1=list.length;
    let prefix="ca"
    for(let i=0;i<l1;i++){
        for(let j=1;j<l1;j++){
        
           if(list[i]&&j==prefix){
           list+=list[i];
           console.log(list);
           }
            
        }


      
        
    }
}


let list=["cat","car","fear","center"];
console.log(String(list));
