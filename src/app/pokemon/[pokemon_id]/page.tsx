import Pokemon from '@/model/pokemon';
import PokemonComponent from './pokemon';
import PokeNavBar from '@/components/pokeNavBarComp'
import "./pokemonComponents.css";

type Params = {
  params: Promise<{ pokemon_id: string }>
}

export default async function PokemonPage({ params }: Params) {
  const { pokemon_id } = await params;

  // Fetch the local JSON file from /public
  const res = await fetch("http://localhost:3000/pokemons.json"); // ✅ Use public path

  let pokemon: Pokemon | null = null;

  if (res.ok) {
    const allPokemons: Pokemon[] = await res.json();
    // Match the pokemon by number or string id
    pokemon = allPokemons.find(p => String(p.pokemonNumber) === pokemon_id) ?? null;
    console.log(pokemon);
  } else {
    console.error("Failed to load pokemons.json:", res.status);
  }

  // Render component with `pokemon` (or fallback UI)


  return (
    <>
      <PokeNavBar />
      {
        pokemon ? (
          <PokemonComponent pokemon={pokemon} />
        ) : (   
            <img
                src="https://cdn.dribbble.com/users/2805817/screenshots/13206178/media/6bd36939f8a01d4480cb1e08147e20f3.png"
                className="img-fluid d-block mx-auto"
                alt="Pokemon"
            />
        )
      }
    </>
  );
}
