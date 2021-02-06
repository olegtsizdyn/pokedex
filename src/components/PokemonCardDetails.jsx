import React, { useEffect, useState } from 'react';

import { PokemonType } from '../enumeration/constans'

const PokemonCardDetails = ({ currentPokemon, getPokemonById_API }) => {
    const [item, setItem] = useState(null);

    useEffect(() => {
        currentPokemon && getPokemonById_API(currentPokemon.url)
            .then(res => setItem(res))
    }, [currentPokemon]);

    return (
        <>
            <img
                className="avatar"
                src={item?.data?.sprites?.front_default}
                alt="https://lh3.googleusercontent.com/proxy/AjU2ZpmTdLzzZ1KqA9SYrPOeJ0PIEqzp0nX3dyAwbTnRuNDdsk8Yijo1J6U95QcOfibi5z8h3CMvZOw4muY9ClrI7sHYRxp-Tdf9q6K0zm3Jzc_r"
            />
            <p className="name">{item?.data?.name}</p>

            <table className="description">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>{item?.data?.types.map(item => (
                            `${PokemonType[item.type.name].label} `
                        ))}</th>
                    </tr>
                    <tr>
                        <th>Attack</th>
                        <th>null</th>
                    </tr>
                    <tr>
                        <th>Defense</th>
                        <th>null</th>
                    </tr>
                    <tr>
                        <th>HP</th>
                        <th>null</th>
                    </tr>
                    <tr>
                        <th>SP Attack</th>
                        <th>null</th>
                    </tr>
                    <tr>
                        <th>SP Defense</th>
                        <th>null</th>
                    </tr>
                    <tr>
                        <th>Speed</th>
                        <th>null</th>
                    </tr>
                    <tr>
                        <th>Weight</th>
                        <th>{item?.data?.weight}</th>
                    </tr>
                    <tr>
                        <th>Total moves</th>
                        <th>{item?.data?.moves.length}</th>
                    </tr>
                </thead>
            </table>
        </>
    );
};

export default PokemonCardDetails;