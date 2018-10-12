let result="";
let storedValue=0;
let storedValue1=0;
let operand=0;
let pressedOperandButton=0;
let Num = 0;
function calculate(z){
    if(pressedOperandButton==0){
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
                Num = Number(result);
                if(Num==0){
                    document.getElementById("res").innerHTML="NaN"; 
                    document.getElementById("output").innerHTML="NaN";
                }
                else{
                    storedValue1=storedValue1/Number(result);
                    document.getElementById("res").innerHTML=storedValue1;
                }
            break;    
        }
    }
}
function writeToOutput(x,y) {
    switch(x){
        // concatinate digit
        case 1: 
            result=result + y.toString();
            document.getElementById("output").innerHTML=result;
            pressedOperandButton=0;  
        break;
        case 2:
        // prepare +
            calculate(operand);
            temp=result;
            result="";
            if(pressedOperandButton==0){
                document.getElementById("output").innerHTML=temp;
            }
            operand=2;
             pressedOperandButton=1;

        break;
        // prepare -
        case 3:
            calculate(operand);
            temp=result;
            result="";
            if(pressedOperandButton==0){
                document.getElementById("output").innerHTML=temp;
            }
            operand=3;
            pressedOperandButton=1;
        break;
        // prepare *
        case 4:
            calculate(operand)
            temp=result;
            result="";
            if(pressedOperandButton==0){
                document.getElementById("output").innerHTML=temp;
            }
            operand=4;
            pressedOperandButton=1;
        break;
        // prepare /    
        case 5:
            calculate(operand);
            temp=result;
            result="";
            if(pressedOperandButton==0){
                document.getElementById("output").innerHTML=temp;
            }
            operant=5;
            pressedOperandButton=1;
        break;
        // =
        case 6:
            if(pressedOperandButton==0){
                calculate(operand);
                result=storedValue;
                document.getElementById("output").innerHTML=storedValue;
                pressedOperandButton=1;
                operand=0;
            }
        break;
        // reset
        case 7:
            storedValue=0;
            result="";
            operand=0;
            document.getElementById("output").innerHTML="0";
            document.getElementById("res").innerHTML="0";
            pressedOperandButton=0;
        break;
    }



}