function getData(num){
    //document.getElementById("txtInput").value=document.getElementById("txtInput").value+num; (same as below)
    document.getElementById("txtInput").value +=num;
}
function Clean(){
    document.getElementById("txtInput").value="";
}

function equals(){
    var num= document.getElementById("txtInput").value;
    document.getElementById("txtInput").value=eval(num); //evaluates the data and the operator(sign)
}

function back(){
    var num= document.getElementById("txtInput").value;
    document.getElementById("txtInput").value=num.slice(0, -1);
}