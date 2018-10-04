let result=""
let storedValue=0
let operationFlag=0
function writeToOutput(x,y) {
    switch(x){
        case 1:
                result=result+y
                document.getElementById("Num").innerHTML=result;
        break;
        case 2:
            storedValue=storedValue+Number(result);
            result = "";
            document.getElementById("Num").innerHTML=0;
            document.getElementById("Res").innerHTML=storedValue;
        break;
    
    
    
    
    
    }



}