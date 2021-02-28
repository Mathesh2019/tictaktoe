

var board = [" "," "," "," "," "," "," "," "," "];
var turn = "🥰";
var count=0;
function play(value){
    if(board[value-1]==" "){
        board[value-1]=turn;
        if(turn=="🥰"){
            turn="😘";
        }
        else{
            turn="🥰";
        }
        count++;
    }
    else{
        alert("space not avalaible");
    }
   if(count>=5){
       checkWin();
   }
   if(count>=9){
       alert("draw");
   }
  
    printBoard();

}
function printBoard(){
    document.getElementById("button1").value=board[0];
    document.getElementById("button2").value=board[1];
    document.getElementById("button3").value=board[2];
    document.getElementById("button4").value=board[3];
    document.getElementById("button5").value=board[4];
    document.getElementById("button6").value=board[5];
    document.getElementById("button7").value=board[6];
    document.getElementById("button8").value=board[7];
    document.getElementById("button9").value=board[8];
}

function checkWin(){
    //HR CHECK
    if(check(0,1,2)){
        alert(board[0]+" is Winner");
        disable();
    }
    else if(check(3,4,5)){
        alert(board[3]+" is Winner");
        disable();
    }
    else if(check(6,7,8)){
        alert(board[6]+" is Winner");
        disable();

    }

    //VERTICAL CHECK
    else if(check(0,3,6)){
        alert(board[0]+" is Winner");
        disable();
    }
    else if(check(1,4,7)){
        alert(board[1]+" is Winner");
        disable();
    }
    else if(check(2,5,8)){
        alert(board[2]+" is Winner");
        disable();
    }

    //CROSS CHECK
    else if(check(0,4,8)){
        alert(board[0]+" is Winner");
        disable();
    }
    else if(check(2,4,6)){
        alert(board[2]+" is Winner");
        disable();
    }


}
function check(num1,num2,num3){
   var boolean1= contentCheck(num1,num2,num3);
    var boolean2= spaceCheck(num1,num2,num3);
    if(boolean1&&boolean2){
        return true;
    }
    else {
        return false;
    }
    
}
function contentCheck(num1,num2,num3){
    if(board[num1]==board[num2]&&board[num2]==board[num3]){
        return true;
    }
    else{
        return false;
    }
}
function spaceCheck(num1,num2,num3){
    if(board[num1]!=" "&&board[num2]!=" "&&board[num3]!=" "){
        return true;
    }
    else {
        return false;
    }
}
function disable(){
    button1.disabled=true;
    button2.disabled=true;
    button3.disabled=true;
    button4.disabled=true;
    button5.disabled=true;
    button6.disabled=true;
    button7.disabled=true;
    button8.disabled=true;
    button9.disabled=true;
}