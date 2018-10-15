let result="";
let storedValue=0;
let storedValue1=0;
let operator=0;
let pressedOperatorButton=0;
let Num = 0;
function show(){
    document.getElementById("debug0").innerHTML= "storedValue =" + storedValue + " " + "storedValue1 =" + storedValue1 + " " + "result =" + result + " " + "operator =" + operator;
    document.getElementById("debug1").innerHTML= "pressedOperatorButton =" + pressedOperatorButton + " " + "operator =" + operator + "Num =" + Num;
}
function calculate(z){
    if(pressedOperatorButton==0){
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
                    storedValue=((storedValue)/(Number(result)));
                    document.getElementById("res").innerHTML=storedValue;
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
            pressedOperatorButton=0;
            show();  
        break;

        case 2:  // prepare +
            calculate(operator);
            temp=Number(result);
            result="";
            if(pressedOperatorButton==0){
                document.getElementById("output").innerHTML=temp;
                show();
            }
            operator=2;
             pressedOperatorButton=1;
             show();

        break;

        case 3:  // prepare -
            calculate(operator);
            temp=Number(result);
            result="";
            if(pressedOperatorButton==0){
                document.getElementById("output").innerHTML=temp;
                show();
            }
            operator=3;
            pressedOperatorButton=1;
            show();
        break;

        case 4:  // prepare *
            calculate(operator)
            temp=Number(result);
            result="";
            if(pressedOperatorButton==0){
                document.getElementById("output").innerHTML=temp;
                show();
            }
            operator=4;
            pressedOperatorButton=1;
            show();
        break;

        case 5:  // prepare /
            calculate(operator);
            temp=Number(result);
            result="";
            if(pressedOperatorButton==0){
                document.getElementById("output").innerHTML=temp;
                show();
            }
            operator=5;
            pressedOperatorButton=1;
            show();
        break;

        case 6:  // =
            if(pressedOperatorButton==0){
                calculate(operator);
                result=storedValue;
                document.getElementById("output").innerHTML=storedValue;
                pressedOperatorButton=1;
                operator=0;
                show();
            }
        break;
        
        case 7:  // reset
            storedValue=0;
            result="";
            operator=0;
            document.getElementById("output").innerHTML="0";
            document.getElementById("res").innerHTML="0";
            pressedOperatorButton=0;
            show();
        break; 
}



}