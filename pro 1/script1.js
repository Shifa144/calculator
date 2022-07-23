//fuction clear all the values
function  clearScreen(){
    document.getElementById("result").value="";

}
//fuction display values
function display(value){
    document.getElementById("result").value +=value;
}
//fuction evaluate the expression and return result
function calculate(){
    var p= document.getElementById("result").value;
    var q= eval(p);
    document.getElementById("result").value = q;
}