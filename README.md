# parcial1
Repo para el parcial 1
# Para correrlo.
* Es suficiente inciar un servidor http en la carpeta FrontEnd con python python -m SimpleHTTPServer 8000. Despues en localhost:8000 se encontrara la aplicación. 

* Si desea construirla desde el ódigo fuente en la carpeta Front End pornga los comandos npm install y npm start que desplegaran la aplicación en el puerto 8080. 

El Backend ya esta corriendo en heroku 
https://backendparcial1.herokuapp.com/
API:
get  https://backendparcial1.herokuapp.com/flickr/Dog/10 Retornar los 10 perros más populares.
get  https://backendparcial1.herokuapp.com/mongo/5 Retorna las 5 busquedas más porpulares. 

# Extra
El hoover sobre las imágenes hace que sea más bello.

Se pueden escoger el número de imágenes a mostar- Toc darle enter en el buscador (debi haberle puesto el props)

Se lee de mongo las consultas más populares. Solo se lee, no se escribe. (Ya estaba muy tarde para hacer lo otro)

