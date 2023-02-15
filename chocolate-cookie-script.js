
function sSizeChange(){
    document.getElementById("price").innerHTML="$3.95";
    document.getElementById("s-size").style.backgroundColor="#3a4e3a ";
    document.getElementById("m-size").style.backgroundColor="#4F694F ";
    document.getElementById("l-size").style.backgroundColor="#4F694F ";

}

function mSizeChange(){
    document.getElementById("price").innerHTML="$4.30";
    document.getElementById("s-size").style.backgroundColor="#4F694F ";
    document.getElementById("m-size").style.backgroundColor="#3a4e3a ";
    document.getElementById("l-size").style.backgroundColor="#4F694F ";
}

function lSizeChange(){
    document.getElementById("price").innerHTML="$4.65";
    document.getElementById("s-size").style.backgroundColor="#4F694F ";
    document.getElementById("m-size").style.backgroundColor="#4F694F ";
    document.getElementById("l-size").style.backgroundColor="#3a4e3a ";
}

function debitCard(){
    $("#debitPayment").slideToggle();
}
