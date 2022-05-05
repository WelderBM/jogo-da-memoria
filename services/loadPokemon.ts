import { useCallback } from "react";

const KEY_POKEMON = 'pokemons';

export default function usePushPokemon() {
  const loadCache = useCallback(() => {
    const data = JSON.parse(localStorage.getItem(KEY_POKEMON))
    return data
    
  }, [])
  return { loadCache }
}
