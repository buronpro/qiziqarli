var speedOnfoot = 3.6;
var speedBike = 20.1;
var speedCar = 70;
var speedplane = 800;


var elForm = document.querySelector ('.form') ;

var userDistances = Number(document.querySelector('.input') .value);

var error = document.querySelector('.error');

var onfootResult = document.querySelector ('.onfoot__result');


var bikeResult = document.querySelector('.bike__result');

var carResult = document.querySelector('.car__result');

var planeResult = document.querySelector('.plane__result');


function time (e){
    var hour =Math.floor(e);
    var minute = Math.floor ((e - hour) * 60)
    
    if(hour > 0 && minute > 0){
        return `${hour} soat ${minute} minut`
    }else if (hour > 0){
        return `${hour} soat`
    } else if (minute > 0){
        return `${minute} minut`
    }
    else {
        return ""
    }
}

elForm.addEventListener('submit', function(b) {
    b.preventDefault();

    var userDistances = Number(document.querySelector('.input').value);
   
    userDistances.value = null

    if (userDistances<= 0 || isNaN(userDistances)){
        error.textContent = 'Raqam kiriting🤔' ;
        return;
    } else {
        error.textContent = ''
    }


    var resultOnfoot = time (userDistances / speedOnfoot);
    var resulBike = time (userDistances / speedBike);
    var resulCar = time (userDistances / speedCar);
    var resulplane = time (userDistances / speedplane)

    onfootResult.textContent = resultOnfoot;
    bikeResult.innerHTML = resulBike ;
    carResult.innerHTML = resulCar;
    planeResult.textContent = resulplane
})
