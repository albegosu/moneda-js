// 1- Usuario da a un botón y la moneda gira
// 2- Cuando la moneda se detiene, muestra el resultado (Cara o Cruz) y el resultado sube al contador
// 3- Puede lanzar la moneda indefinidas veces
// 4- Si el usuario le da al botón de reset el contador se pone a 0

// Identificar dos caras de una moneda (dos imágenes)
// Animación para girar
// Animación se activa con un input 'click'
// Hover solo scale

// Asignar variable a la moneda
// Crear dos botones (Lanzar y Reset)
// Asignar variables a los botones
// Función que devuelva un número random
// Número random de veces que la animación de giro va a realizarse (0 a 10 veces por ejemplo)
// Cuando la moneda finalice, mostrar el nombre de la cara que ha salido (A ó B)
// Retornar el valor como incremento++ de cara A o  para ver el total de veces que ha salido una cosa u otra

const flipBtn = document.getElementById("flipBtn");
const resetBtn = document.getElementById("resetBtn");

let number;
//función que devuelva un número random de 0 a 10
let randomNumber = () => {
    number = Math.floor(Math.random() * 100);
    console.log(number);
    return number;
}

//función que analiza si el número es par o impar
let oddOrPar = () => {
    randomNumber();
    if (number % 2 !== 0) {
        console.log("Es un número impar!");
    } else {
        console.log("Es un número par!");
    };
}

//función que sume el valor devuelto de number a par o impar
const headsPar = document.getElementById("headsPar");
const tailsOdd = document.getElementById("tailsOdd");
let oddNumber = 0;
let parNumber = 0;

let addCount = () => {
    oddOrPar();
    if (number % 2 !== 0) {
        setTimeout(function(){
            oddNumber++;
            tailsOdd.textContent = oddNumber;
        }, 3000);
       
    } else {
        setTimeout(function() {
            parNumber++;
            headsPar.textContent = parNumber;
        }, 3000);
        
    }
}

//función reset contador
let resetCount = () => {
    oddNumber = 0;
    parNumber = 0;
    tailsOdd.textContent = oddNumber;
    headsPar.textContent = parNumber;
}

//girar moneda
const container = document.querySelector(".coin");

let flipCoin = () => {
    addCount();
    container.style.animation = "none";
    if (number % 2 !== 0) {
        setTimeout(function(){
            container.style.animation = "spin-tails 3s forwards";
        }, 100);
        
    } else {
        setTimeout(function(){
            container.style.animation = "spin-heads 3s forwards";
        }, 100);
        
    }
}

flipBtn.addEventListener("click", flipCoin);
resetBtn.addEventListener("click", resetCount);