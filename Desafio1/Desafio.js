class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName(){
        return console.log(`${this.nombre}${this.apellido}`)
    }
    addMascotas(name){
        this.mascotas.push(name);
    }
    countMascotas(){
        return console.log(Number(this.mascotas.length));
    }
    addBook(name, autor){
        this.libros.push({"nombre":name,"autor":autor})
    }
    getBookNames(){
        return console.log(this.libros.map(books => books.nombre));
    }
}

const usuario = new Usuario("Fabian", "Molina", [{nombre: "El señor de los anillos", autor: "J.R.R. Tolkien"},{nombre: "Harry Potter y las Reliquias de la Muerte", autor: "J.K. Rowling"}], ["Buster","Matilda"]);

usuario.addMascota("Chess");

usuario.addBook("Dune","Frank Herbert");

usuario.getFullName();

usuario.countMascotas();

usuario.getBookNames();