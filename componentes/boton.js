
var fibonacci =  new NumeroDeFibonacci;
var padovan =  new NumeroDePadovan;
var ulam = new NumeroDeUlam;
var numeroS = new NumeroDeSuerte;

function BotonAvanzarFibonacci() {  
    fibonacci.avanzar();
}

function BotonAvanzarPadovan(){
    padovan.avanzar();
}

function BotonAvanzarUlam(){
    ulam.avanzar();
}

function BotonAvanzarSuerte() {  
    numeroS.avanzar();
}
function BotonRetroceder() {  
    fibonacci.retroceder();
    padovan.retroceder();
    ulam.retroceder();
    numeroS.retroceder();
}

function imprimir(){

}

