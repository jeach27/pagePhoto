
/*async function listarImagenes() {
    try {
      const rutaCarpeta = "./Fotos"
  
      const respuesta = await fetch(rutaCarpeta);
      const contenidoCarpeta = await respuesta.text();
  
      // Analizar el contenido HTML de la carpeta para obtener los enlaces de las imágenes
      const parser = new DOMParser();
      const contenidoHTML = parser.parseFromString(contenidoCarpeta, 'text/html');
      const enlaces = contenidoHTML.querySelectorAll('a');
  
      // Filtrar los enlaces para obtener solo los enlaces de las imágenes
      const imagenes = Array.from(enlaces).filter((enlace) => {
        const href = enlace.getAttribute('href');
        return /\.(jpg|jpeg|png|gif)$/i.test(href);
      });
  
      // Mostrar la ruta de cada imagen
      imagenes.forEach((imagen) => {
        const rutaImagen = `${rutaCarpeta}/${imagen.getAttribute('href')}`;
        console.log(rutaImagen);
      });
    } catch (error) {
      console.error(error);
    }
  }

  listarImagenes();*/



  // Ruta de la carpeta de imágenes
  var rutaCarpeta = "./Fotos";

  // Array con los nombres de las imágenes
  var imagenes = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"];

  // Recorre el array de imágenes y crea elementos <img> para cada una
  for (var i = 0; i < imagenes.length; i++) {
    var imagen = document.createElement("img");
    imagen.src = rutaCarpeta + imagenes[i];
    console.log(imagen)
  }