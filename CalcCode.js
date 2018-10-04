let result=""
let storedValue=0
let operationFlag=0
document.getElementById("output").innerHTML="0"
function writeToOutput(x,y) {
    switch(x){
        case 1:
            if(operationFlag==0){
                result=result+y
                document.getElementById("output").innerHTML=result;
            }
            else if(operationFlag==1){
                result=y
                operationFlag=0
            }
        break;
        case 2:
            storedValue=storedValue+Number(result)
            operationFlag=1
    
            break;
    
    
    
    
    
    }



}