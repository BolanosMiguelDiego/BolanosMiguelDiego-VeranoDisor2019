
function NumeroDeFibonacci() {
    this.numeroVecesLlamado = 0;
    this.terminoAnterior = 0;
    this.terminoActual = 0;

  }
  
  NumeroDeFibonacci.prototype.print = function() {
    document.write('el termino actual es: '+this.terminoActual);
    document.write('binario: '+this.binario());
    document.write('hexadecimal: '+this.hexadecimal());
    document.write('');
    document.write('veces: '+this.numeroVecesLlamado);

  };

  NumeroDeFibonacci.prototype.avanzar = function()
{
    this.actualizarTerminosAvanzar();
    this.numeroVecesLlamado += 1;
    document.getElementById("decimal").innerHTML = this.terminoActual;
    document.getElementById("binario").innerHTML = this.binario();
    document.getElementById("hexadecimal").innerHTML = this.hexadecimal();
    document.getElementById("capicua").innerHTML = this.capicua();
    document.getElementById("feliz").innerHTML = this.soyFeliz();

};

NumeroDeFibonacci.prototype.retroceder = function()
{
    this.actualizarTerminosRetroceder();
    document.getElementById("decimal").innerHTML = this.terminoActual;
    document.getElementById("binario").innerHTML = this.binario();
    document.getElementById("hexadecimal").innerHTML = this.hexadecimal();
    document.getElementById("capicua").innerHTML = this.capicua();
    document.getElementById("feliz").innerHTML = this.soyFeliz();
};

  NumeroDeFibonacci.prototype.actualizarTerminosAvanzar = function(){
    if(this.numeroVecesLlamado==0){
        this.terminoActual = 0;
    }
    if(this.numeroVecesLlamado==1){
        this.terminoActual = 1;
    }
    if(this.numeroVecesLlamado>=2){
        this.respadoTerminoAnterior = this.terminoAnterior;
        this.terminoAnterior = this.terminoActual;
        this.terminoActual = this.terminoAnterior + this.respadoTerminoAnterior;
    }
  };

  NumeroDeFibonacci.prototype.actualizarTerminosRetroceder = function(){
    if(this.numeroVecesLlamado>0){
        if(this.numeroVecesLlamado==1){
            this.terminoActual = 1;
            this.numeroVecesLlamado -= 1;
        }
        if(this.numeroVecesLlamado>=2){
            this.terminoActual = this.terminoAnterior;
            this.terminoAnterior = this.respadoTerminoAnterior;
            this.respadoTerminoAnterior = this.terminoActual - this.terminoAnterior;
            this.numeroVecesLlamado -= 1;
        }
    }
    if(this.numeroVecesLlamado==0){
        this.reiniciar();
    }
    
  };

  NumeroDeFibonacci.prototype.reiniciar = function()
{
    this.numeroVecesLlamado = 0;
    this.terminoAnterior = 0;
    this.terminoActual = 0;
    this.respadoTerminoAnterior = 0;
};

NumeroDeFibonacci.prototype.binario = function()
{
    this.valorBinario = this.terminoActual;
    return this.valorBinario.toString(2);
};

NumeroDeFibonacci.prototype.hexadecimal = function()
{
    this.valorHexadecimal = this.terminoActual;
    return this.valorHexadecimal.toString(16);
    
};

NumeroDeFibonacci.prototype.capicua = function(){
    if(this.terminoActual==this.invertirDigitos(this.terminoActual)){
      return 'es capicua';
    }else{
      return 'no es capicua';
    }
  }
  
  NumeroDeFibonacci.prototype.invertirDigitos = function(numero)
  {
    var invertido = 0
    var resto = numero
    do {
      invertido = invertido * 10 + (resto % 10)
      resto = Math.floor(resto / 10)
    } while ( resto > 0 )
    return invertido
  };

  NumeroDeFibonacci.prototype.soyFeliz = function()
{
  if(this.verificarFelicidad(this.terminoActual)){
    return "si";
  }else{
    return "no";
  }
    
};

NumeroDeFibonacci.prototype.verificarFelicidad = function(str)
{
  let suma = str;
  for(let index = 0; suma != 0 && index <8; index++){
    suma = this.sumarDigitos(this.extraerDigitos(suma));
  }   
  return suma == 1 ? true : false; 
};

NumeroDeFibonacci.prototype.extraerDigitos = function(numero)
{
    let arrayChar = Array.from(numero.toString());
    let numeros = arrayChar.map((x) => {
      return Math.pow(parseInt(x), 2);
    });

    return numeros;
};

NumeroDeFibonacci.prototype.sumarDigitos = function(numeros)
{
    let numero = numeros.reduce((valorAnterior, valorActual) => {
      return valorAnterior + valorActual;
    });
    return numero;
};
