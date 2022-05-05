/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import Menu from 'Components/Menu'
import usePushPokemon from 'services/pushPokemon'
import useLoadPokemon from 'services/loadPokemon'

const Home = () => {
  const [pokemonsState, setPokemonsState] = useState({})
  const { setCache } = usePushPokemon()
  const { loadCache } = useLoadPokemon()

  const getPokemons = useCallback(async () => {
    const data = loadCache()
    if (data) {
      setPokemonsState(data)
    } else {
      for (let index = 1; index <= 150; index++) {
        const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`)
        console.log(pokemon.data.name)
        setPokemonsState({...pokemonsState + pokemon.data.sprites.front_default})
      }
      setCache(pokemonsState)
    }
  }, [])
  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <>
      <Menu />
    </>
  );
};

export default Home;
