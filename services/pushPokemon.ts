import { useCallback } from "react";

const KEY_POKEMON = 'pokemons';

export default function usePushPokemon() {
    const setCache = useCallback((body) => {
    console.log(body)
    localStorage.setItem(KEY_POKEMON, body.toString());
  }, []);
  return { setCache }
}
