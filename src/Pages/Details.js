import React from 'react';
import {useParams} from 'react-router-dom';
import DetailsPokemon from '../Affichage_pokemon/DetailsPokemon';

const Details = () => {
    let {name} = useParams();
    return (
        <>
        <DetailsPokemon 
        name={name}
        />
        </>
    )
}

export default Details;