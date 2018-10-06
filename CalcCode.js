let result="";
let storedValue = 0;
let storedValue1 = 1;
let operationFlag = 0;
let quick = 0;
function writeToOutput(x,y) {
    switch (x) {
        case 1:
                result=result+y
                document.getElementById("Num").innerHTML=result;
        break;
        case 2:
            storedValue=storedValue+Number(result);
            quick = result;
            result = "";
            document.getElementById("Num").innerHTML=quick;
            document.getElementById("Res").innerHTML=storedValue + "+";
            operationFlag = 1;
        break;
        case 3:
            storedValue= Number(result)- storedValue;
            quick = result;
            result = "";
            document.getElementById("Num").innerHTML=quick;
            document.getElementById("Res").innerHTML=storedValue + "-";
            operationFlag = 2;
        break;
        case 4:
            storedValue1=storedValue1*Number(result);
            quick = result;
            result = "";
            document.getElementById("Num").innerHTML=quick;
            document.getElementById("Res").innerHTML=storedValue1 + "*";
            operationFlag = 3;
        break;
        case 5:
            storedValue1 = Number(result) / storedValue1;
            quick = result;
            result = "";
            document.getElementById("Num").innerHTML=quick;
            document.getElementById("Res").innerHTML=storedValue1 + "/";
            operationFlag = 4;
        break;
        case 6:
            switch (operationFlag) {
                case 1:
                storedValue += Number(result);
                document.getElementById("Num").innerHTML= 0;
                document.getElementById("Res").innerHTML=storedValue;
                result = "";
                storedValue = 0;
                operationFlag = 0;
                break;
                case 2:
                storedValue -= Number(result);
                document.getElementById("Num").innerHTML= 0;
                document.getElementById("Res").innerHTML=storedValue;
                result = "";
                storedValue = 0;
                operationFlag = 0;
                break;
                case 3:
                storedValue1 *= Number(result);
                document.getElementById("Num").innerHTML= 0;
                document.getElementById("Res").innerHTML=storedValue1;
                result = "";
                storedValue1 = 1;
                operationFlag = 0;
                break;
                case 4:
                storedValue1 /= Number(result);
                document.getElementById("Num").innerHTML= 0;
                document.getElementById("Res").innerHTML=storedValue1;
                result = "";
                storedValue1 = 1;
                operationFlag = 0;
                break;
            }
        break;
        case 7:
        result = "";
        storedValue = 0;
        operationFlag = 0;
        storedValue1 = 1;
        document.getElementById("Num").innerHTML=0;
        document.getElementById("Res").innerHTML=0;
        break;
    
    }



}