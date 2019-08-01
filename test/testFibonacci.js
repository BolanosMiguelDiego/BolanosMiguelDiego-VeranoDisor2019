describe("Test de numero fibonacci", function() {
    
    var fibonacci =  new NumeroDeFibonacci;
  
    it("retroceder al inicio de la ejecucion", function() {
        var fibonacci =  new NumeroDeFibonacci;
        
        fibonacci.retroceder();

        this.valorEsperado = 0;

        
        expect(this.valorEsperado).toEqual(fibonacci.terminoActual);

    });
  });

  describe("Test de numero fibonacci", function() {
    
    var fibonacci =  new NumeroDeFibonacci;
  
    it("avanzar tres veces", function() {
        var fibonacci =  new NumeroDeFibonacci;
        
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();

        this.valorEsperado = 1;

        expect(this.valorEsperado).toEqual(fibonacci.terminoActual);
        

    });
  });

  describe("Test de numero fibonacci", function() {
    
    var fibonacci =  new NumeroDeFibonacci;
  
    it("avanzar 13 veces", function() {
        var fibonacci =  new NumeroDeFibonacci;
        
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();

        this.valorEsperado = 144;

        expect(this.valorEsperado).toEqual(fibonacci.terminoActual);
        

    });
  });

  describe("Test de numero fibonacci", function() {
    
    var fibonacci =  new NumeroDeFibonacci;
  
    it("avanzar y retroceder", function() {
        var fibonacci =  new NumeroDeFibonacci;
        fibonacci.avanzar();
        fibonacci.retroceder();

        this.valorEsperado = 0;
        
        expect(this.valorEsperado).toEqual(fibonacci.terminoActual);
    });
  });

  describe("Test de numero fibonacci", function() {
    
    var fibonacci =  new NumeroDeFibonacci;
  
    it("retroceder al inicio de la ejecucion dos veces", function() {
        var fibonacci =  new NumeroDeFibonacci;
        
        fibonacci.retroceder();
        fibonacci.retroceder();
        this.valorEsperado = 0;
        
        expect(this.valorEsperado).toEqual(fibonacci.terminoActual);
    });
  });

  describe("Test de numero fibonacci", function() {
    
    var fibonacci =  new NumeroDeFibonacci;
  
    it("avanzar tres veces", function() {
        var fibonacci =  new NumeroDeFibonacci;
        
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();

        this.valorEsperado = 1;
        
        expect(this.valorEsperado).toEqual(fibonacci.terminoActual);
    });
  });

  describe("Test de numero fibonacci", function() {
    
    var fibonacci =  new NumeroDeFibonacci;
  
    it("avanzar una vez", function() {
        var fibonacci =  new NumeroDeFibonacci;
        
        fibonacci.avanzar();
        

        this.valorEsperado = 0;
        
        expect(this.valorEsperado).toEqual(fibonacci.terminoActual);
    });
  });

  describe("Test de numero fibonacci", function() {
    
    var fibonacci =  new NumeroDeFibonacci;
  
    it("avanzar cinco veces y retroceder una", function() {
        var fibonacci =  new NumeroDeFibonacci;
        
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.retroceder();
        

        this.valorEsperado = 5;
        expect(this.valorEsperado).toEqual(fibonacci.terminoActual);

    });
  });

  describe("Test de numero fibonacci", function() {
    

  
    it("avanzar diez veces", function() {
        var fibonacci =  new NumeroDeFibonacci;
        
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        

        this.valorEsperado = 34;
        expect(this.valorEsperado).toEqual(fibonacci.terminoActual);

    });
  });

  describe("Test de numero fibonacci", function() {
    
 
  
    it("avanzar diez veces y retroceder diez veces", function() {
        var fibonacci =  new NumeroDeFibonacci;
        
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.retroceder();
        fibonacci.retroceder();
        fibonacci.retroceder();
        fibonacci.retroceder();
        fibonacci.retroceder();
        fibonacci.retroceder();
        fibonacci.retroceder();
        fibonacci.retroceder();
        fibonacci.retroceder();
        fibonacci.retroceder();
        
        this.valorEsperado = 34;
        expect(this.valorEsperado).toEqual(fibonacci.terminoActual);

    });
  });

  describe("Test de numero fibonacci", function() {
    
  
    it("avanzar diez veces y retroceder dos veces", function() {
        var fibonacci =  new NumeroDeFibonacci;
        
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.retroceder();
        fibonacci.retroceder();
        
        this.valorEsperado = 13;
        expect(this.valorEsperado).toEqual(fibonacci.terminoActual);

    });
  });

  describe("Test de numero fibonacci", function() {
    
    
  
    it("retroceder dos veces al inicio", function() {
        var fibonacci =  new NumeroDeFibonacci;
        
        fibonacci.retroceder();
        fibonacci.retroceder();

        
        this.valorEsperado = 0;
        expect(this.valorEsperado).toEqual(fibonacci.terminoActual);

    });
  });

  describe("Test de numero fibonacci", function() {
    
    var fibonacci =  new NumeroDeFibonacci;
  
    it("retroceder dos veces al inicio y avanzar dos veces", function() {
        var fibonacci =  new NumeroDeFibonacci;
        
        fibonacci.retroceder();
        fibonacci.retroceder();
        fibonacci.avanzar();
        fibonacci.avanzar();

        
        this.valorEsperado = 1;
        expect(this.valorEsperado).toEqual(fibonacci.terminoActual);

    });
  });

  describe("Test de numero fibonacci", function() {
    
    var fibonacci =  new NumeroDeFibonacci;
  
    it("avanzar luego reiniciar y luego avanzar ", function() {
        var fibonacci =  new NumeroDeFibonacci;
        fibonacci.avanzar();
        fibonacci.reiniciar();
        fibonacci.avanzar();

        
        this.valorEsperado = 0;
        expect(this.valorEsperado).toEqual(fibonacci.terminoActual);

    });
  });

  describe("Test de numero fibonacci", function() {
    
    var fibonacci =  new NumeroDeFibonacci;
  
    it("avanzar diez veces luego reiniciar y luego avanzar una vez y retroceder una vez ", function() {
        var fibonacci =  new NumeroDeFibonacci;
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.reiniciar();
        fibonacci.avanzar();
        fibonacci.retroceder();

        
        this.valorEsperado = 0;
        expect(this.valorEsperado).toEqual(fibonacci.terminoActual);

    });
  });


  describe("Test de numero fibonacci", function() {
    
    var fibonacci =  new NumeroDeFibonacci;
  
    it("retroceder una vez reiniciar un avez y avanzar una vez", function() {
        var fibonacci =  new NumeroDeFibonacci;
        fibonacci.retroceder();
        fibonacci.reiniciar();
        fibonacci.avanzar();

        
        this.valorEsperado = 0;
        expect(this.valorEsperado).toEqual(fibonacci.terminoActual);
    });
  });
  

  describe("Test de numero fibonacci", function() {
    
    var fibonacci =  new NumeroDeFibonacci;
  
    it("avanzar 7 veces ", function() {
        var fibonacci =  new NumeroDeFibonacci;
        
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();

        
        this.valorEsperado = 8;
        expect(this.valorEsperado).toEqual(fibonacci.terminoActual);
    });
  });

  describe("Test de numero fibonacci", function() {
    
    var fibonacci =  new NumeroDeFibonacci;
  
    it("avanzar 7 veces  y retroceder 4 veces", function() {
        var fibonacci =  new NumeroDeFibonacci;
        
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.retroceder();
        fibonacci.retroceder();
        fibonacci.retroceder();
        fibonacci.retroceder();

        
        this.valorEsperado = 1;
        expect(this.valorEsperado).toEqual(fibonacci.terminoActual);
    });
  });


  describe("Test de numero fibonacci", function() {
    
    var fibonacci =  new NumeroDeFibonacci;
  
    it("avanzar 7 veces  y retroceder 4 veces y avanzar 6 veces", function() {
        var fibonacci =  new NumeroDeFibonacci;
        
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.retroceder();
        fibonacci.retroceder();
        fibonacci.retroceder();
        fibonacci.retroceder();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();

        
        this.valorEsperado = 21;
        expect(this.valorEsperado).toEqual(fibonacci.terminoActual);
    });
  });

  describe("Test de numero fibonacci", function() {
    
    var fibonacci =  new NumeroDeFibonacci;
  
    it("avanzar 7 veces  y retroceder 4 veces y avanzar 6 veces luego reiniciar y avanzar cuatro veces", function() {
        var fibonacci =  new NumeroDeFibonacci;
        
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.retroceder();
        fibonacci.retroceder();
        fibonacci.retroceder();
        fibonacci.retroceder();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.reiniciar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        

        
        this.valorEsperado = 2;
        expect(this.valorEsperado).toEqual(fibonacci.terminoActual);
    });
  });

  describe("Test de numero fibonacci", function() {
    
    var fibonacci =  new NumeroDeFibonacci;
  
    it("avanzar 12 veces", function() {
        var fibonacci =  new NumeroDeFibonacci;
        
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();

        this.valorEsperado = 89;

        expect(this.valorEsperado).toEqual(fibonacci.terminoActual);        

    });
  });

  describe("Test de numero fibonacci", function() {
    
    var fibonacci =  new NumeroDeFibonacci;
  
    it("avanzar 20 veces", function() {
        var fibonacci =  new NumeroDeFibonacci;
        
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();
        fibonacci.avanzar();

        this.valorEsperado = 4181;

        expect(this.valorEsperado).toEqual(fibonacci.terminoActual);
    });
  });