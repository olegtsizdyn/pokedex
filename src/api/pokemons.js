import axios from "axios";
import { BASE_API, IMG_API } from "../config/api";

export const getPokemons_API = async (limit) =>
    await axios.get(`${BASE_API}pokemon?limit=${limit}`)
        .then(response => response)
        .catch(error => error);

export const getPokemonById = async (url) =>
    await axios.get(`${url}`)
        .then(response => response)
        .catch(error => error);