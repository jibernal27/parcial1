'use strict';

import React, { Component } from 'react';
import ImagePreview from './ImagePreview';
import axios from 'axios';

const ROOT_URL = "http://localhost:3000";
class App extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            red: [],
            orange: [],
            yellow: [],
            green: [],
            indigo: [],
            violet: [],
            blue:[],
            colors:["red","orange", "yellow", "green", "blue","indigo", "violet" ],
            pag:1,

        };
        this.obtenerImagesCriterio("Amor");

    }

    obtenerImagesCriterio(cri) {
        
            axios.get(ROOT_URL + "/flickr/"+cri+" red")
                .then(response => {
                    console.log(response.data);
                    this.setState({
                        red: response.data.body.photos.photo
                    });
                });

                        axios.get(ROOT_URL + "/flickr/"+cri+" orange")
                .then(response => {
                    console.log(response.data);
                    this.setState({
                        orange: response.data.body.photos.photo
                    });
                });

                                        axios.get(ROOT_URL + "/flickr/"+cri+" yellow")
                .then(response => {
                    console.log(response.data);
                    this.setState({
                        yellow: response.data.body.photos.photo
                    });
                });


                                        axios.get(ROOT_URL + "/flickr/"+cri+" green")
                .then(response => {
                    console.log(response.data);
                    this.setState({
                        green: response.data.body.photos.photo
                    });
                });


                                        axios.get(ROOT_URL + "/flickr/"+cri+" orange")
                .then(response => {
                    console.log(response.data);
                    this.setState({
                        blue: response.data.body.photos.photo
                    });
                });


                                        axios.get(ROOT_URL + "/flickr/"+cri+" indigo")
                .then(response => {
                    console.log(response.data);
                    this.setState({
                        indigo: response.data.body.photos.photo
                    });
                });


                                        axios.get(ROOT_URL + "/flickr/"+cri+" violet")
                .then(response => {
                    console.log(response.data);
                    this.setState({
                        violet: response.data.body.photos.photo
                    });
                });
         
        
    }

    handleKeyPress(event) {
  if(event.key == 'Enter'){
   this.obtenerImagesCriterio(event.target.value);
  }
}

    render() {
            return ( 
        < div className = "home" >
            < div id = "barraBusqueda" >
            <h1> Flickr Rainbow</h1>
            <h3> Search for something on Flickr and we will get you a rainbow </h2>
            <div className="col-md-12">
             <input className="form-control" type="text" defaultValue="Amor" onKeyDown ={(event) => this.handleKeyPress(event)}/>
            </div>
                < /div> 

                < div className = "imagenes-selector" > {
                    this.state.red.map(imagesData => < ImagePreview key = { imagesData.id } {...imagesData }
                    
                        />)}   < /div> 

                  < div className = "imagenes-selector" > {
                    this.state.orange.map(imagesData => < ImagePreview key = { imagesData.id } {...imagesData }
                    
                        />)}   < /div> 


                       < div className = "imagenes-selector" > {
                    this.state.yellow.map(imagesData => < ImagePreview key = { imagesData.id } {...imagesData }
                    
                        />)}   < /div> 


                           < div className = "imagenes-selector" > {
                    this.state.green.map(imagesData => < ImagePreview key = { imagesData.id } {...imagesData }
                    
                        />)}   < /div> 


                           < div className = "imagenes-selector" > {
                    this.state.blue.map(imagesData => < ImagePreview key = { imagesData.id } {...imagesData }
                    
                        />)}   < /div> 


                           < div className = "imagenes-selector" > {
                    this.state.indigo.map(imagesData => < ImagePreview key = { imagesData.id } {...imagesData }
                    
                        />)}   < /div> 

                           < div className = "imagenes-selector" > {
                    this.state.violet.map(imagesData => < ImagePreview key = { imagesData.id } {...imagesData }
                    
                        />)}   < /div> 

                < /div>
                    );
                }
            }

            export default App;
