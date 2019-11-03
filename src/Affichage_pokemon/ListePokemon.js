import React, { Component } from 'react';
import axios from "axios";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';

class ListePokemons extends Component {

  constructor() {
    super();
    this.state = {
      pokemons: [],
    };
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
      .then(response => {

        this.setState({

          pokemons: response.data.results.map((data, id) => { // Format du retour de l'affichage Liste des pokémons
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id + 1}.png`
            return <div key="">
                <Link to={"/pokemon/"+data.name}>{data.name}</Link>
                <img src={picture} /></div> 
        })
        })
        
      })

  }



  render() {

    return ( // Affichage Liste des pokémons
      <div class="format_div">
         <h1 class='liste_titre'>Liste des Pokémons</h1> 
          {this.state.pokemons}
      </div>
    );

  }
}


export default ListePokemons; 