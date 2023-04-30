function number(num){
    var result=document.querySelector('input');
     result.value+=num;
     
}
// result

function result(){
    var result=document.querySelector('input');
    result.value=eval(result.value)
}

// clear result

function clearresult(){
    var result=document.querySelector('input');
    result.value="";
}

// removechar 
function deletechar(){
    var result=document.querySelector('input');
    var remove=result.value;
   remove= remove.slice(0,-1); //remove last char from srtings
    result.value=remove;
}