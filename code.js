function takevalue(x){
    document.getElementById('result').innerHTML +=x;
}

function clearinput(){
    document.getElementById('result').innerHTML ="";
}

function calculateresult(){
    var result = eval(document.getElementById('result').innerHTML);
    document.getElementById('result').innerHTML = result;
}
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');
var equal = document.getElementById('equal');
var deleteN = document.getElementById('delete');

var coma = document.getElementById('coma');
var cero = document.getElementById('cero');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');


plus.addEventListener("click", function(){
    takevalue("+");
})
minus.addEventListener("click", function(){
    takevalue("-");
})
multiply.addEventListener("click", function(){
    takevalue("*");
})
divide.addEventListener("click", function(){
    takevalue("/");
})
equal.addEventListener("click", function(){
    takevalue("=");
})


coma.addEventListener("click", function(){
    takevalue(.);
})

cero.addEventListener("click", function(){
    takevalue(0);
})

one.addEventListener("click", function(){
    takevalue(1);
})

two.addEventListener("click", function(){
    takevalue(2);
})

three.addEventListener("click", function(){
    takevalue(3);
})

four.addEventListener("click", function(){
    takevalue(4);
})

five.addEventListener("click", function(){
    takevalue(5);
})

six.addEventListener("click", function(){
    takevalue(6);
})

seven.addEventListener("click", function(){
    takevalue(7);
})

eight.addEventListener("click", function(){
    takevalue(8);
})

nine.addEventListener("click", function(){
    takevalue(9);
})

