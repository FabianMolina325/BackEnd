const fs = require("fs");
const productos = [
  {                                                                                                                                                    
    title: 'Placa de Video ASUS GeForce GTX 1660 TI 6GB GDDR6',                                                                                                                                 
    price: 116.436,                                                                                                                                     
    thumbnail: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_28866_Placa_de_Video_ASUS_GeForce_GTX_1660_TI_6GB_GDDR6_TUF_EVO_OC_c3ef28a0-grn.jpg',                                     
    id: 1                                                                                                                                              
  },                                                                                                                                                   
  {                                                                                                                                                    
    title: 'Placa de Video ASUS GeForce RTX 3090 24GB GDDR6X',                                                                                                                              
    price: 466.436,                                                                                                                                     
    thumbnail: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_27832_Placa_de_Video_ASUS_GeForce_RTX_3090_24GB_GDDR6X_ROG_STRIX_GAMING_OC_6c3ef9d1-grn.jpg',                                          
    id: 2                                                                                                                                              
  },                                                                                                                                                   
  {                                                                                                                                                    
    title: 'Placa de Video ASUS GeForce RTX 3060 Ti 8GB GDDR6',                                                                                                                          
    price: 219.144,                                                                                                                                     
    thumbnail: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32166_Placa_de_Video_ASUS_GeForce_RTX_3060_Ti_8GB_GDDR6_ROG_STRIX_OC_V2_LHR_073b459e-grn.jpg',                                   
    id: 3                                                                                                                                              
  }  
];


class Contenedor {
  async save(producto){
    try {
      await fs.promises.writeFile('./Productos.txt', 
      JSON.stringify(producto, null, 2),
      "utf-8");
    } catch(e) {
      console.log(e);
    }
  }
  async getAll(){
    try{
      const contenido = await fs.promises.readFile('./Productos.txt', "utf-8")
      //console.log(contenido);
      return JSON.parse(contenido);
    } catch(error){}
  }

  async saveNew(productoNuevo) {
    const contenido = await this.getAll();
    const indice = contenido.sort((a, b) => b.id - a.id)[0].id ;
    productoNuevo.id = indice + 1;
    contenido.push(productoNuevo);
    this.save(contenido);
  }

  async getById(id){
    const contenido = await this.getAll();
    const productoBuscado = contenido.filter((producto) => producto.id == id)
  }
}

const contenedor = new Contenedor();

//const productoN = {
//  title: 'Placa de Video Asrock Radeon RX 6700 XT 12GB GDDR6',
//  price: 154.197,
//  thumbnail: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26063_Placa_de_Video_Asrock_Radeon_RX_6700_XT_12GB_GDDR6_Challenger_OC_49f30497-grn.jpg', 
//};

//contenedor.getAll();
//contenedor.saveNew(productoN);
contenedor.getById(2)