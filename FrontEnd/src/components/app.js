'use strict';

import React, { Component } from 'react';
import ImagePreview from './ImagePreview';
import BusquedaPreview from './BusquedaPreview';
import axios from 'axios';
const ROOT_URL = "https://backendparcial1.herokuapp.com";
class App extends Component {
   
    constructor(props) {
        super(props);
        
        this.state = {
            red:[],
            orange:[],
            yellow:[],
            green:[],
            green:[],
            blue:[],
            indigo:[],
            violet:[],
            colors:["red","orange", "yellow", "green", "blue","indigo", "violet" ],
            pag:1,
            cant:10,
            topbus:[],
            numCom:5

        };
        this.obtenerImagesCriterio("Flower");
        this.obtnerTopBus(this.state.numCom);
    };


    obtnerTopBus(num)
    {
         axios.get(ROOT_URL + "/mongo/"+num)
                .then(response => {
                    console.log(response.data);
                    this.setState({
                        topbus: response.data
                    });
                });

    };

    obtenerImagesCriterio(cri) {
        
    // John: Esto está muy feo....
    axios.get(ROOT_URL + "/flickr/"+cri+" red"+"/"+this.state.cant)
                .then(response => {
                    console.log(response.data);
                    this.setState({
                        red: response.data.body.photos.photo
                    });
                });

                        axios.get(ROOT_URL + "/flickr/"+cri+" orange"+"/"+this.state.cant)
                .then(response => {
                    console.log(response.data);
                    this.setState({
                        orange: response.data.body.photos.photo
                    });
                });

                                        axios.get(ROOT_URL + "/flickr/"+cri+" yellow"+"/"+this.state.cant)
                .then(response => {
                    console.log(response.data);
                    this.setState({
                        yellow: response.data.body.photos.photo
                    });
                });


                                        axios.get(ROOT_URL + "/flickr/"+cri+" green"+"/"+this.state.cant)
                .then(response => {
                    console.log(response.data);
                    this.setState({
                        green: response.data.body.photos.photo
                    });
                });


                                        axios.get(ROOT_URL + "/flickr/"+cri+" blue"+"/"+this.state.cant)
                .then(response => {
                    console.log(response.data);
                    this.setState({
                        blue: response.data.body.photos.photo
                    });
                });


                                        axios.get(ROOT_URL + "/flickr/"+cri+" indigo"+"/"+this.state.cant)
                .then(response => {
                    console.log(response.data);
                    this.setState({
                        indigo: response.data.body.photos.photo
                    });
                });


                                        axios.get(ROOT_URL + "/flickr/"+cri+" violet"+"/"+this.state.cant)
                .then(response => {
                    console.log(response.data);
                    this.setState({
                        violet: response.data.body.photos.photo
                    });
                });
               
          
        
    };

    handleKeyPress(event) {

  if(event.key == 'Enter'){
   this.obtenerImagesCriterio(event.target.value);
  }
};

    changeCant(event) {
    console.log("cambio "+event.target.value);
   this.setState({cant:Math.abs(event.target.value)});
   
};

  

    render() {
            return ( 
        < div className = "home" >
            < div id = "barraBusqueda" >
            <h1 > Flickr Rainbow</h1>
            <h4> Search for something on Flickr and we will get you a rainbow </h4>
        
         <h3 > Busquedas más poplares </h3>
       < div className = "col-md-12  coments-selector" > {
                    this.state.topbus.map(comentData => < BusquedaPreview key = { comentData.id } {...comentData }
                    
                        />)}   < /div> 




            <div className="col-md-6">
            <label htmlFor="input">Término: (Presione enter para buscar)</label>
             <input className="form-control" type="text" defaultValue="Flower" onKeyDown ={(event) => this.handleKeyPress(event)}/>
            </div>
            <div className="col-md-6">
            <label htmlFor="number">Número de imágenes por columnas:</label>
             <input id="inputNumber"className="form-control" type="number" defaultValue="10" onChange ={(event) => this.changeCant(event)}/>
            </div>
                
                 < /div> 

                  < div className = "col-md-1 imagenes-selector" > {
                    this.state.red.map(imagesData => < ImagePreview key = { imagesData.id } {...imagesData }
                    
                        />)}   < /div> 

               
                          < div className = "col-md-1 imagenes-selector" > {
                    this.state.orange.map(imagesData => < ImagePreview key = { imagesData.id } {...imagesData }
                    
                        />)}   < /div> 
                       
                       < div className = "col-md-1 imagenes-selector" > {
                    this.state.yellow.map(imagesData => < ImagePreview key = { imagesData.id } {...imagesData }
                    
                        />)}   < /div> 


                           < div className = "col-md-1 imagenes-selector" > {
                    this.state.green.map(imagesData => < ImagePreview key = { imagesData.id } {...imagesData }
                    
                        />)}   < /div> 


                           < div className = "col-md-1 imagenes-selector" > {
                    this.state.blue.map(imagesData => < ImagePreview key = { imagesData.id } {...imagesData }
                    
                        />)}   < /div> 


                           < div className = "col-md-1 imagenes-selector" > {
                    this.state.indigo.map(imagesData => < ImagePreview key = { imagesData.id } {...imagesData }
                    
                        />)}   < /div> 

                           < div className = "col-md-1 imagenes-selector" > {
                    this.state.violet.map(imagesData => < ImagePreview key = { imagesData.id } {...imagesData }
                    
                        />)}   < /div> 



            
                < /div>

                    );
                }
            };

export default App;
