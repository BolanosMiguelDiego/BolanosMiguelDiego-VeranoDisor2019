describe("Test de numero fibonacci", function() {

  
    it("retroceder al inicio de la ejecucion", function() {
        var padovan =  new NumeroDePadovan;
        
        padovan.retroceder();

        this.valorEsperado = 1;

        
        expect(this.valorEsperado).toEqual(padovan.terminoActual);

    });
  });

  describe("Test de numero fibonacci", function() {

  
    it("avanzar una vez", function() {
        var padovan =  new NumeroDePadovan;
        
        padovan.avanzar();

        this.valorEsperado = 1;

        
        expect(this.valorEsperado).toEqual(padovan.terminoActual);

    });
  });

  describe("Test de numero fibonacci", function() {

  
    it("avanzar dos vez", function() {
        var padovan =  new NumeroDePadovan;
        
        padovan.avanzar();
        padovan.avanzar();

        this.valorEsperado = 1;

        
        expect(this.valorEsperado).toEqual(padovan.terminoActual);

    });
  });

  describe("Test de numero fibonacci", function() {

  
    it("avanzar tres vez", function() {
        var padovan =  new NumeroDePadovan;
        
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();

        this.valorEsperado = 1;

        
        expect(this.valorEsperado).toEqual(padovan.terminoActual);

    });
  });

  describe("Test de numero fibonacci", function() {

  
    it("avanzar cuatro vez", function() {
        var padovan =  new NumeroDePadovan;
        
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();

        this.valorEsperado = 2;

        
        expect(this.valorEsperado).toEqual(padovan.terminoActual);

    });
  });

  describe("Test de numero fibonacci", function() {

  
    it("avanzar cinco vez", function() {
        var padovan =  new NumeroDePadovan;
        
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();

        this.valorEsperado = 2;

        
        expect(this.valorEsperado).toEqual(padovan.terminoActual);

    });
  });

  describe("Test de numero fibonacci", function() {

  
    it("avanzar diez veces", function() {
        var padovan =  new NumeroDePadovan;
        
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();

        this.valorEsperado = 9;

        
        expect(this.valorEsperado).toEqual(padovan.terminoActual);

    });
  });

  describe("Test de numero fibonacci", function() {

  
    it("avanzar veinte veces", function() {
        var padovan =  new NumeroDePadovan;
        
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();

        this.valorEsperado = 151;

        
        expect(this.valorEsperado).toEqual(padovan.terminoActual);

    });
  });

  describe("Test de numero fibonacci", function() {

  
    it("avanzar diez veces y retroceder 7", function() {
        var padovan =  new NumeroDePadovan;
        
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.retroceder();
        padovan.retroceder();
        padovan.retroceder();
        padovan.retroceder();
        padovan.retroceder();
        padovan.retroceder();
        padovan.retroceder();

        this.valorEsperado = 1;

        
        expect(this.valorEsperado).toEqual(padovan.terminoActual);

    });
  });

  describe("Test de numero fibonacci", function() {

  
    it("avanzar diez veces, reiniciar y retroceder 7", function() {
        var padovan =  new NumeroDePadovan;
        
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.avanzar();
        padovan.reiniciar();
        padovan.retroceder();
        padovan.retroceder();
        padovan.retroceder();
        padovan.retroceder();
        padovan.retroceder();
        padovan.retroceder();
        padovan.retroceder();

        this.valorEsperado = 1;

        
        expect(this.valorEsperado).toEqual(padovan.terminoActual);

    });
  });

  describe("Test de numero fibonacci", function() {

  
    it("es capicua ? retroceder al inicio de la ejecucion", function() {
        var padovan =  new NumeroDePadovan;
        
        padovan.retroceder();

        this.valorEsperado = "si";

        
        expect(this.valorEsperado).toEqual(padovan.capicua());

    });
  });