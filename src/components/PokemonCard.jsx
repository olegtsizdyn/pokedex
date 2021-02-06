import React, { useEffect, useState } from 'react';

import { PokemonType } from '../enumeration/constans'

const PokemonCard = ({ item, getPokemonById_API, setCurrentPokemon }) => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        getPokemonById_API(item.url)
            .then(res => setPokemon(res))
    }, []);

    return (
        <div className="my_pokemons--container__card" onClick={() => setCurrentPokemon(item)}>
            <img 
                className="avatar" 
                src={pokemon?.data?.sprites?.front_default} 
                alt="https://lh3.googleusercontent.com/proxy/AjU2ZpmTdLzzZ1KqA9SYrPOeJ0PIEqzp0nX3dyAwbTnRuNDdsk8Yijo1J6U95QcOfibi5z8h3CMvZOw4muY9ClrI7sHYRxp-Tdf9q6K0zm3Jzc_r" 
            />
            <p className="title">{pokemon?.data?.name}</p>
            <div className="type">
                {pokemon?.data?.types.map((item, index) => (
                    <div key={index} style={{ background: PokemonType[item.type.name].color }} className="type__card">
                        <p>{PokemonType[item.type.name].label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PokemonCard;