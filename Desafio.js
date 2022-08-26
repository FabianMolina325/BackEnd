class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName(){
        console.log(this.nombre + this.apellido)
    }
    getBooks(){
        console.log(this.libros)
    }
    getMascotas(){
        console.log(this.mascotas)
    }
    
}

const P = new Usuario('Samuel', 'Perez', '[El Resplandor]', 'Loro')

const G = new Usuario('Joaquin','Lopez','[IT]','Perro,Gato')

const H = new Usuario('Benjamin','Torres','[El señor de los Anillos]','[Hamster, Perro, Loro]')