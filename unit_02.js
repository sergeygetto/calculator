function insert(num){
document.form.text.value = document.form.text.value + num;
}

function one(){
document.form.text.value = "";
}

function result(){
    let elem = document.form.text.value;
    if(document.form.text.value){
    document.form.text.value = eval(elem)
    }    
}
function back(){
    let elem = document.form.text.value;
    document.form.text.value = document.form.text.value.substring(0, elem.length-1);
}


function touch(e) {
        if (e.keyCode == 13){
        result()
        e.preventDefault()
        }
            
        if( document.form.text.value != document.form.text.value.replace(/[^0-9*.,+/-]+/) ){
           e.preventDefault();
            back()
            alert( "Пожалуйста, используйте только цифры")

        }
}
document.querySelector('.ent').onkeypress = touch;


