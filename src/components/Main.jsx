import React, { useEffect, useState } from 'react';

import { getPokemons_API, getPokemonById_API } from '../api/pokemons'

import PokemonCard from './PokemonCard';
import PokemonCardDetails from './PokemonCardDetails'

const Main = () => {
    const [pokemons, setPokemons] = useState(null);
    const [currentPokemon, setCurrentPokemon] = useState(null);

    const [limit, setLimit] = useState(12);

    useEffect(() => {
        getPokemons_API(limit)
            .then(res => setPokemons(res))
    }, [limit]);

    return (
        <div className="main">
            <div className="my_pokemons">
                <div className="my_pokemons--container">
                    {pokemons && pokemons.data.results.map((item, index) => (
                        <PokemonCard 
                            item={item} 
                            getPokemonById_API={getPokemonById_API}
                            setCurrentPokemon={setCurrentPokemon} 
                        />
                    ))}
                </div>

                <div className="more">
                    <button 
                        onClick={() => ( 
                            setLimit(limit + 12), 
                            setCurrentPokemon(null) 
                        )}
                    >
                        Load more
                    </button>
                </div>
            </div>

            <div className="pokemons_preview">
                {currentPokemon &&
                    <div className="pokemons_preview__card">
                        <PokemonCardDetails 
                            currentPokemon={currentPokemon} 
                            getPokemonById_API={getPokemonById_API}
                        />
                    </div>
                }
            </div>
        </div>
    );
};

export default Main;