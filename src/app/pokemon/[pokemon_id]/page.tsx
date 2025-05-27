import { Row, Container, Image, Spinner } from 'react-bootstrap';
import Pokemon from '@/model/pokemon';
import PokemonComponent from './pokemon';
import PokeNavBar from '@/components/pokeNavBarComp'

// Updated Params type to match async style
type Params = {
  params: Promise<{ pokemon_id: string }>
}

export default async function PokemonPage({ params }: Params) {
  const { pokemon_id } = await params;

  const resp = await fetch(`http://localhost:3000/api/pokemon/${pokemon_id}`);
  let pokemon: Pokemon | null = null;

  if (resp.ok) {
    pokemon = await resp.json();
    console.log(pokemon);
  }

  return (
    <>
      <PokeNavBar />
      {
        pokemon ? (
          <PokemonComponent pokemon={pokemon} />
        ) : (
          <Image
            className='img-fluid mx-auto d-block rounded'
            src="https://cdn.dribbble.com/users/2805817/screenshots/13206178/media/6bd36939f8a01d4480cb1e08147e20f3.png"
          />
        )
      }
    </>
  );
}
