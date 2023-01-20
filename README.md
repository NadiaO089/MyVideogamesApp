# MyVideogamesApp
### Individual Proyect - Henry Videogames  
<div align="center">
<img src="https://www.thenextrex.com/wp-content/uploads/2017/07/779fee53c6af41c1879f16077433f7f8.jpg" align="center" style="width: 100%" />
</div>  
  

### Éste es el proyecto individual que hice para el Bootcamp de Henry.  
  

## Objetivos del proyecto  
  

- Construir una App utlizando React, Redux, Node y Sequelize.
  
  

- Afirmar y conectar los conceptos aprendidos en la carrera.
  
  

- Aprender mejores prácticas.
  
  

- Aprender y practicar el workflow de GIT.
  
  

## Enunciado  
  

La idea general es crear una aplicación en la cual se puedan ver los distintos videojuegos disponibles junto con información relevante de los mismos utilizando la api externa rawg y a partir de ella poder, entre otras cosas:

Buscar videjuegos
Filtrarlos / Ordenarlos
Agregar nuevos videojuegos

IMPORTANTE: Para poder utilizar esta API externa es necesario crearse una cuenta para obtener una API Key que luego debera ser incluida en todos los request que hagamos a rawg simplemente agregando ?key={YOUR_API_KEY} al final de cada endpoint. Agregar la clave en el archivo .env para que la misma no se suba al repositorio por cuestiones de seguridad y utilizarla desde allí.

IMPORTANTE: Para las funcionalidades de filtrado y ordenamiento NO pueden utilizar los endpoints de la API externa que ya devuelven los resultados filtrados u ordenados sino que deben realizarlo ustedes mismos. En particular alguno de los ordenamientos o filtrados debe si o si realizarse desde el frontend.

Únicos Endpoints/Flags que pueden utilizar
GET https://api.rawg.io/api/games
GET https://api.rawg.io/api/games?search={game}
GET https://api.rawg.io/api/genres
GET https://api.rawg.io/api/games/{id}

Requerimientos mínimos
A continuación se detallaran los requerimientos mínimos para la aprobación del proyecto individial. Aquellos que deseen agregar más funcionalidades podrán hacerlo. En cuanto al diseño visual no va a haber wireframes ni prototipos prefijados sino que tendrán libertad de hacerlo a su gusto pero tienen que aplicar los conocimientos de estilos vistos en el curso para que quede agradable a la vista.

IMPORTANTE: No se permitirá utilizar librerías externas para aplicar estilos a la aplicación. Tendrán que utilizar CSS con algunas de las opciones que vimos en dicha clase (CSS puro, CSS Modules o Styled Components)  
  

## Tecnologías necesarias  
  

- React  
  

-  Redux  
  

- Express  
  

- Sequelize - Postgres  
  

## Front End  
  

Se debe desarrollar una aplicación de React/Redux que contenga las siguientes pantallas/rutas.

Pagina inicial:  
* Deben armar una landing page con alguna imagen de fondo representativa al proyecto
* Botón para ingresar al home (Ruta principal)
Ruta principal: debe contener
* Input de búsqueda para encontrar videojuegos por nombre
*Área donde se verá el listado de videojuegos. Deberá mostrar su:
  - Imagen
  - Nombre
  - Géneros
   - Botones/Opciones para filtrar por género y por videojuego existente o agregado por nosotros
   - Botones/Opciones para ordenar tanto ascendentemente como descendentemente los videojuegos por orden alfabético y por rating
   - Paginado para ir buscando y mostrando los siguientes videojuegos, 15 juegos por pagina, mostrando los primeros 15 en la primer pagina.

IMPORTANTE: Dentro de la Ruta Principal se deben mostrar tanto los videjuegos traidos desde la API como así también los de la base de datos. Debido a que en la API existen alrededor de 500 mil juegos, por cuestiones de performance pueden tomar la simplificación de obtener y paginar los primeras 100.

* Ruta de detalle de videojuego: debe contener
  - Los campos mostrados en la ruta principal para cada videojuegos (imagen, nombre, y géneros)
   -Descripción
   -Fecha de lanzamiento
   -Rating
   -Plataformas
  -Ruta de creación de videojuegos: debe contener

* Un formulario controlado con JavaScript con los siguientes campos:

  - Nombre
  - Descripción
  -Fecha de lanzamiento
  -Rating
   -Posibilidad de seleccionar/agregar varios géneros
   -Posibilidad de seleccionar/agregar varias plataformas
   -Botón/Opción para crear un nuevo videojuego
*Es requisito que el formulario de creación esté validado con JavaScript y no sólo con validaciones HTML. Pueden agregar las validaciones que consideren. Por ejemplo: Que el nombre del juego no pueda contener algunos símbolos, que el rating no pueda exceder determinado valor, etc.  
  

## Levantar el proyecto  
  

    npm start  
  

<br/>  
