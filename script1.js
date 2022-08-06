class Carros{
    constructor(placa,modelo,marca,tipo,disponibilidade){
        this.placa = placa;
        this.modelo = modelo;
        this.marca = marca;
        this.tipo = tipo;
        this.disponibilidade = disponibilidade;
    }

    criar(){
        alert('item criado!')
        
    }
    editar(){
        alert('item editado!')

    }
    excluir(){
        alert('Item deletado!')

    }
}

const carro = new Carros();