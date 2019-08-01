export {TextField};

function TextField(options) 
{
    this.valor = options.valor;
    this.id = options.id;
    this.textfiled = options.textfiled;
}

TextField.prototype.actualizarValor = function( valor )
{
    this.valor = valor;
}
