function insert(num) {
    document.form1.textview.value = document.form1.textview.value + num;
    
}

function insertToggale(){    
    if(document.form1.textview.value > 0){
        document.form1.textview.value= '-'+ document.form1.textview.value
    }else{
        document.form1.textview.value = Math.abs(document.form1.textview.value)
    }
}

function equal(){
   const result= eval(document.form1.textview.value)
   document.form1.textview.value = result;
}

function backspace(){
    let totalValue=document.form1.textview.value
    let result = totalValue.substring(0, totalValue.length-1);
    document.form1.textview.value = result;
}