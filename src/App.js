import React from 'react';
import './App.scss';
import ListePokemons from './Affichage_pokemon/ListePokemon';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Details from './Pages/Details';
import DetailsPokemon from './Affichage_pokemon/DetailsPokemon';

function App() {
  return ( // Routing de l'application avec assignations des classes CSS
    <>
    
    <BrowserRouter>
      <Switch>
        <Route path='/pokemon/:name'> /
        <div className="App">
           <header className="App-header">
             <div class="Container_Pokemons_Left"><ListePokemons /></div>
             <div class="Container_Pokemons_Right"><Details /></div>
           </header>
        </div> 
        </Route>
        <Route path='/'>
        <div className="App">
           <header className="App-header">
             <div class="Container_Pokemons_Left"><ListePokemons /></div>
             <div class="Container_Pokemons_Right"><Details /></div>
           </header>
        </div>
        </Route>
      </Switch>
    </BrowserRouter>
      </>
  );
}

export default App;
