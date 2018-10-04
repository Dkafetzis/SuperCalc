let result=""
let storedValue=0
let operand=0
function calculate(z){
    switch(z){
        case 0:
            storedValue=Number(result);
            document.getElementById("res").innerHTML=storedValue;
        break;
        case 2:
            storedValue=storedValue+Number(result);
            document.getElementById("res").innerHTML=storedValue;
        break;
        case 3:
            storedValue=storedValue-Number(result);
            document.getElementById("res").innerHTML=storedValue;
        break;
        case 4:
            storedValue=storedValue*Number(result);
            document.getElementById("res").innerHTML=storedValue;
        break;
        case 5:
            if(Number(result)==0){
                document.getElementById("res").innerHTML="NaN"; 
                document.getElementById("output").innerHTML="NaN";
            }
            else{
                storedValue=storedValue/Number(result);
                document.getElementById("res").innerHTML=storedValue;
            }
        break;    
    }
}
function writeToOutput(x,y) {
    switch(x){
        // concatinate digit
        case 1: 
            result=result + y.toString();
            document.getElementById("output").innerHTML=result;  
        break;
        case 2:
        // prepare +
            calculate(operand);
            temp=result;
            result="";
            document.getElementById("output").innerHTML=temp;
            operand=2;
        break;
        // prepare -
        case 3:
            calculate(operand);
            temp=result;
            result="";
            document.getElementById("output").innerHTML=temp;
            operand=3;
        break;
        // prepare *
        case 4:
            calculate(operand)
            temp=result;
            result="";
            document.getElementById("output").innerHTML=temp;
            operand=4;
        break;
        // prepare /    
        case 5:
            calculate(operand);
            temp=result;
            result="";
            document.getElementById("output").innerHTML=temp;
            operant=5;
        break;
        // =
        case 6:
            calculate(operand);
            document.getElementById("output").innerHTML=storedValue;
            operand=0;
        break;
        // reset
        case 7:
            storedValue=0;
            result="";
            operand=0;
            document.getElementById("output").innerHTML="0";
            document.getElementById("res").innerHTML="0";
        break;
    }



}