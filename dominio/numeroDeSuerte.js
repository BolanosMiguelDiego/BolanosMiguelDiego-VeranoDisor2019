function NumeroDeSuerte() {
    this.ultimoTermino = 0;
    this.terminoActual = 0;
    this.numeroVecesLlamado = 0;
  }


  NumeroDeSuerte.prototype.print = function() {
    document.write('el termino actual es: '+this.terminoActual);
    document.write('el termino penultimo es: '+this.penultimoTermino);
    document.write('el termino antepenultimo es: '+this.antepenultimoTermino);
    document.write('el termino ultimo es: '+this.ultimoTermino);
    document.write('');
    document.write('veces: '+this.numeroVecesLlamado);
    document.write('es capicua: ' +this.capicua());

  };

  NumeroDeSuerte.prototype.avanzar = function()
{
    this.actualizarTerminosAvanzar();
    this.numeroVecesLlamado += 1;
    document.getElementById("decimal3").innerHTML = this.terminoActual;
    document.getElementById("binario3").innerHTML = this.binario();
    document.getElementById("hexadecimal3").innerHTML = this.hexadecimal();
    document.getElementById("capicua3").innerHTML = this.capicua();
    document.getElementById("feliz3").innerHTML = this.soyFeliz();
};

NumeroDeSuerte.prototype.retroceder = function()
{
    this.actualizarTerminosRetroceder();
    document.getElementById("decimal3").innerHTML = this.terminoActual;
    document.getElementById("binario3").innerHTML = this.binario();
    document.getElementById("hexadecimal3").innerHTML = this.hexadecimal();
    document.getElementById("capicua3").innerHTML = this.capicua();
    document.getElementById("feliz3").innerHTML = this.soyFeliz();
};

  NumeroDeSuerte.prototype.actualizarTerminosAvanzar = function() {
    if(this.numeroVecesLlamado==0){
      this.terminoActual = 1;
    }
    if(this.numeroVecesLlamado==1){
      this.terminoActual = 1;
    }
    
    if(this.numeroVecesLlamado>2){
      
    }

  };

  NumeroDeSuerte.prototype.actualizarTerminosRetroceder = function(){
    if(this.numeroVecesLlamado>0){
        
        if(this.numeroVecesLlamado==1){
            
            this.numeroVecesLlamado -= 1;
        }
    }
    if(this.numeroVecesLlamado==0){
        this.reiniciar();
    }
    
  };

  NumeroDeSuerte.prototype.reiniciar = function()
{
  this.ultimoTermino = 0;
  this.terminoActual = 1;
  this.numeroVecesLlamado = 0;
};

NumeroDeSuerte.prototype.binario = function()
{
    this.valorBinario = this.terminoActual;
    return this.valorBinario.toString(2);
};

NumeroDeSuerte.prototype.hexadecimal = function()
{
    this.valorHexadecimal = this.terminoActual;
    return this.valorHexadecimal.toString(16);
    
};

NumeroDeSuerte.prototype.capicua = function(){
  if(this.terminoActual==this.invertirDigitos(this.terminoActual)){
    return 'es capicua';
  }else{
    return 'no es capicua';
  }
}

NumeroDeSuerte.prototype.invertirDigitos = function(numero)
{
  var invertido = 0
  var resto = numero
  do {
    invertido = invertido * 10 + (resto % 10)
    resto = Math.floor(resto / 10)
  } while ( resto > 0 )
  return invertido
};



NumeroDeSuerte.prototype.actual = function()
{
    return this.terminoActual;
};

NumeroDeSuerte.prototype.soyFeliz = function()
{
  if(this.verificarFelicidad(this.terminoActual)){
    return "si";
  }else{
    return "no";
  }
    
};

NumeroDeSuerte.prototype.verificarFelicidad = function(str)
{
  let suma = str;
  for(let index = 0; suma != 0 && index <8; index++){
    suma = this.sumarDigitos(this.extraerDigitos(suma));
  }   
  return suma == 1 ? true : false; 
};

NumeroDeSuerte.prototype.extraerDigitos = function(numero)
{
    let arrayChar = Array.from(numero.toString());
    let numeros = arrayChar.map((x) => {
      return Math.pow(parseInt(x), 2);
    });

    return numeros;
};

NumeroDeSuerte.prototype.sumarDigitos = function(numeros)
{
    let numero = numeros.reduce((valorAnterior, valorActual) => {
      return valorAnterior + valorActual;
    });
    return numero;
};
