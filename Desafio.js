class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName(){
        return this.nombre
    }
    getBooks(){
        return this.libros
    }
    
}

const P = new Usuario('Samuel', 'Perez', 'Resplandor', 'Loro')
console.log(Usuario.getFullName)