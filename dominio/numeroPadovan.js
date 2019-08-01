
function NumeroDePadovan() {
    this.ultimoTermino = 0;
    this.penultimoTermino = 0;
    this.antepenultimoTermino = 0;
    this.terminoActual = 0;
    this.numeroVecesLlamado = 0;
  }


  NumeroDePadovan.prototype.print = function() {
    document.write('el termino actual es: '+this.terminoActual);
    document.write('el termino penultimo es: '+this.penultimoTermino);
    document.write('el termino antepenultimo es: '+this.antepenultimoTermino);
    document.write('el termino ultimo es: '+this.ultimoTermino);
    document.write('');
    document.write('veces: '+this.numeroVecesLlamado);
    document.write('es capicua: ' +this.capicua());

  };

  NumeroDePadovan.prototype.avanzar = function()
{
    this.actualizarTerminosAvanzar();
    this.numeroVecesLlamado += 1;
    document.getElementById("decimal1").innerHTML = this.terminoActual;
    document.getElementById("binario1").innerHTML = this.binario();
    document.getElementById("hexadecimal1").innerHTML = this.hexadecimal();
    document.getElementById("capicua1").innerHTML = this.capicua();
    document.getElementById("feliz1").innerHTML = this.soyFeliz();
};

NumeroDePadovan.prototype.retroceder = function()
{
    this.actualizarTerminosRetroceder();
    document.getElementById("decimal1").innerHTML = this.terminoActual;
    document.getElementById("binario1").innerHTML = this.binario();
    document.getElementById("hexadecimal1").innerHTML = this.hexadecimal();
    document.getElementById("capicua1").innerHTML = this.capicua();
    document.getElementById("feliz1").innerHTML = this.soyFeliz();
};

  NumeroDePadovan.prototype.actualizarTerminosAvanzar = function() {
    if(this.numeroVecesLlamado==0){
      this.terminoActual = 1;
    }
    if(this.numeroVecesLlamado==1){
      this.terminoActual = 1;
    }
    if(this.numeroVecesLlamado==2){
      this.terminoActual = 1;
      this.penultimoTermino = 1;
      this.antepenultimoTermino = 1;
      this.ultimoTermino = 0;
    }
    if(this.numeroVecesLlamado>2){
      this.respaldoActual = this.terminoActual;
      this.terminoActual = this.penultimoTermino + this.antepenultimoTermino;
      this.ultimoTermino = this.antepenultimoTermino;
      this.antepenultimoTermino = this.penultimoTermino;
      this.penultimoTermino = this.respaldoActual;
    }

  };

  NumeroDePadovan.prototype.actualizarTerminosRetroceder = function(){
    if(this.numeroVecesLlamado>0){
        if(this.numeroVecesLlamado<3){
          this.terminoActual = 1;
          this.penultimoTermino = 1;
          this.antepenultimoTermino = 1;
          this.ultimoTermino = 0;
        }
        if(this.numeroVecesLlamado>=3){
            this.respaldoUltimoTermino = this.ultimoTermino;
            this.ultimoTermino = this.penultimoTermino - this.respaldoUltimoTermino;
            this.terminoActual = this.penultimoTermino;
            this.penultimoTermino = this.antepenultimoTermino;
            this.antepenultimoTermino = this.respaldoUltimoTermino;
            this.numeroVecesLlamado -= 1;
        }
    }
    if(this.numeroVecesLlamado==0){
        this.reiniciar();
    }
    
  };

  NumeroDePadovan.prototype.reiniciar = function()
{
  this.ultimoTermino = 0;
  this.penultimoTermino = 0;
  this.antepenultimoTermino = 0;
  this.terminoActual = 1;
  this.numeroVecesLlamado = 0;
};

NumeroDePadovan.prototype.binario = function()
{
    this.valorBinario = this.terminoActual;
    return this.valorBinario.toString(2);
};

NumeroDePadovan.prototype.hexadecimal = function()
{
    this.valorHexadecimal = this.terminoActual;
    return this.valorHexadecimal.toString(16);
    
};

NumeroDePadovan.prototype.capicua = function(){
  if(this.terminoActual==this.invertirDigitos(this.terminoActual)){
    return 'es capicua';
  }else{
    return 'no es capicua';
  }
}

NumeroDePadovan.prototype.invertirDigitos = function(numero)
{
  var invertido = 0
  var resto = numero
  do {
    invertido = invertido * 10 + (resto % 10)
    resto = Math.floor(resto / 10)
  } while ( resto > 0 )
  return invertido
};



NumeroDePadovan.prototype.actual = function()
{
    return this.terminoActual;
};

NumeroDePadovan.prototype.soyFeliz = function()
{
  if(this.verificarFelicidad(this.terminoActual)){
    return "si";
  }else{
    return "no";
  }
    
};

NumeroDePadovan.prototype.verificarFelicidad = function(str)
{
  let suma = str;
  for(let index = 0; suma != 0 && index <8; index++){
    suma = this.sumarDigitos(this.extraerDigitos(suma));
  }   
  return suma == 1 ? true : false; 
};

NumeroDePadovan.prototype.extraerDigitos = function(numero)
{
    let arrayChar = Array.from(numero.toString());
    let numeros = arrayChar.map((x) => {
      return Math.pow(parseInt(x), 2);
    });

    return numeros;
};

NumeroDePadovan.prototype.sumarDigitos = function(numeros)
{
    let numero = numeros.reduce((valorAnterior, valorActual) => {
      return valorAnterior + valorActual;
    });
    return numero;
};



