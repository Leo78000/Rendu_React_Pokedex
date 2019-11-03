import React, { Component } from 'react';
import axios from "axios";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class DetailsPokemon extends Component {
    state = {
      pokemons:[],

    }
    
   componentDidUpdate(){ //Actualiser la page en temps réel
    axios.get('https://pokeapi.co/api/v2/pokemon/'+this.props.name)
    .then(response => {
      this.setState({
        pokemons:response.data
      })      
      console.log(this.state.pokemons)
      })
   }
    componentDidMount(){ //URL avec Nom du pokémon
      axios.get('https://pokeapi.co/api/v2/pokemon/'+this.props.name)
        .then(response => {
          this.setState({
            pokemons:response.data
          })      
          console.log(this.state.pokemons)
          })

      }
    
  
    render() { //Affichage et format détails des pokémons
  
      return (
        <div>
           <h1>Détails Pokémons</h1> 
           <p><span class="Titre">Nom : </span> {this.state.pokemons.name}</p>
           <p><span class="Titre">Poids : </span> {this.state.pokemons.height} kg</p>
           <p><span class="Titre">Taille : </span>{this.state.pokemons.weight} cm</p>
           <p><span class="Titre">Capacité 1 : </span>{this.state.pokemons.moves===undefined ? " ":this.state.pokemons.moves[0].move.name}</p>
           <p><span class="Titre">Capacité 2 : </span>{this.state.pokemons.moves===undefined ? " ":this.state.pokemons.moves[1].move.name}</p>
           <p><span class="Titre">Capacité 3 : </span>{this.state.pokemons.moves===undefined ? " ":this.state.pokemons.moves[2].move.name}</p>
           <p><span class="Titre">Type : </span>
              {
                this.state.pokemons.types===undefined ? " ":
                this.state.pokemons.types.map((data,id)=> {
                  return <p>{data.type.name}</p>
                })
              }
           </p>
        </div>
      );
  
    }
  }
  
  
  export default DetailsPokemon; 