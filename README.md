# parcial1
Repo para el parcial 1

# Para correr el backend
* En la carpeta Backend abra una ventana de comandos y ponga las siguientes variables de entorno. 
export CONSUMER_KEY=4260790c7143613f8176a402a0871c01
export DATABASEPASSWROD=1
export DATBASEUSER=jairo

Escriba npm install y npm start en la misma ventana de comandos. Esto correra el backend en el puerto 3000.
A este puede hacer peticiones del tipo
get  http://localhost:3000/flickr/<Termino de busqueda>/<catidad> Retornar los <cantidad> <Termino de busqueda>  más populares.
get  http://localhost:3000/flickr/Dog/10 Retornar los 10 perros más populares.

get  http://localhost:3000/mongo/<cantidad> Retorna las <canitidad> busquedas más porpulares. 
get  http://localhost:3000/mongo/5Retorna las 5 busquedas más porpulares. 

Por facilidad se desplego el backend el heroku para llamarlo en e frontend
https://backendparcial1.herokuapp.com/

get  https://backendparcial1.herokuapp.com/flickr/Dog/10 Retornar los 10 perros más populares.
get  https://backendparcial1.herokuapp.com/mongo/5 Retorna las 5 busquedas más porpulares. 


# Para correr el FRONTEND.
* Es suficiente inciar un servidor http en la carpeta FrontEnd, por ejemplo con el comando  python -m SimpleHTTPServer 8000. Despues en localhost:8000 se encontrara la aplicación. 

* Si desea construirla desde el código fuente en en la carpeta Front End abra una ventana de comandos en la carpeta FrontEnd y escriba npm install y npm start que desplegaran la aplicación en el puerto 8080. 

# Extra
El hoover sobre las imágenes hace que sea más bello.

Se pueden escoger el número de imágenes a mostar- Toc darle enter en el buscador (debi haberle puesto el props)

Se lee de mongo las consultas más populares. Solo se lee, no se escribe. (Ya estaba muy tarde para hacer lo otro)
