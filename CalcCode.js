let result="";
let storedValue=0;
let storedValue1=0;
let operand=0;
let pressedOperandButton=0;
let Num = 0;
function show(){
    document.getElementById("debug0").innerHTML= "storedValue =" + storedValue + " " + "storedValue1 =" + storedValue1 + " " + "result =" + result + " " + "operand =" + operand;
    document.getElementById("debug1").innerHTML= "pressedOperandButton =" + pressedOperandButton + " " + "operand =" + operand + "Num =" + Num;
}
function calculate(z){
    if(pressedOperandButton==0){
        switch(z){
            case 0:
                storedValue=Number(result);
                document.getElementById("res").innerHTML=storedValue;
                show();
            break;
            case 2:
                storedValue=storedValue+Number(result);
                document.getElementById("res").innerHTML=storedValue;
                show();
            break;
            case 3:
              storedValue=storedValue-Number(result);
                document.getElementById("res").innerHTML=storedValue;
                show();
            break;
            case 4:
                storedValue=storedValue*Number(result);
                document.getElementById("res").innerHTML=storedValue;
                show();
            break;
            case 5:
                Num = Number(result);
                if(Num == 0){
                    document.getElementById("res").innerHTML="NaN"; 
                    document.getElementById("output").innerHTML="NaN";
                    show();
                }else{
                    storedValue1=storedValue1/Number(result);
                    document.getElementById("res").innerHTML=storedValue1;
                    show();
                }
            break;    
        }
    }
}
function writeToOutput(x,y) {
    switch(x){
        case 1:  // concatinate digit 
            result=result + y.toString();
            document.getElementById("output").innerHTML=result;
            pressedOperandButton=0;
            show();  
        break;

        case 2:  // prepare +
            calculate(operand);
            temp=Number(result);
            result="";
            if(pressedOperandButton==0){
                document.getElementById("output").innerHTML=temp;
                show();
            }
            operand=2;
             pressedOperandButton=1;
             show();

        break;

        case 3:  // prepare -
            calculate(operand);
            temp=Number(result);
            result="";
            if(pressedOperandButton==0){
                document.getElementById("output").innerHTML=temp;
                show();
            }
            operand=3;
            pressedOperandButton=1;
            show();
        break;

        case 4:  // prepare *
            calculate(operand)
            temp=Number(result);
            result="";
            if(pressedOperandButton==0){
                document.getElementById("output").innerHTML=temp;
                show();
            }
            operand=4;
            pressedOperandButton=1;
            show();
        break;

        case 5:  // prepare /
            calculate(operand);
            temp=Number(result);
            result="";
            if(pressedOperandButton==0){
                document.getElementById("output").innerHTML=temp;
                show();
            }
            operant=5;
            pressedOperandButton=1;
            show();
        break;

        case 6:  // =
            if(pressedOperandButton==0){
                calculate(operand);
                result=storedValue;
                document.getElementById("output").innerHTML=storedValue;
                pressedOperandButton=1;
                operand=0;
                show();
            }
        break;
        
        case 7:  // reset
            storedValue=0;
            result="";
            operand=0;
            document.getElementById("output").innerHTML="0";
            document.getElementById("res").innerHTML="0";
            pressedOperandButton=0;
            show();
        break; 
}



}