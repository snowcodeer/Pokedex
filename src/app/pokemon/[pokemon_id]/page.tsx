// File: /src/app/pokemon/[pokemon_id]/page.tsx

'use client'
import { Row, Container, Image, Spinner } from 'react-bootstrap';
import Pokemon from '@/model/pokemon';
import { useEffect, useState } from 'react';
import PokemonComponent from './pokemon';
import PokeNavBar from '@/components/pokeNavBarComp';

// Extract pokemon_id from URL params
type Params = { params: { pokemon_id: string } };

export default function PokemonPage({ params }: Params) {
  const { pokemon_id } = params;
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isPokemonLoaded, setPokemonLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('/api/pokemon/' + pokemon_id);
        if (resp.ok) {
          const data: Pokemon = await resp.json();
          setPokemon(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setPokemonLoaded(true);
      }
    };
    fetchData();
  }, [pokemon_id]); // Add pokemon_id as dependency

  return (
    <>
      <PokeNavBar />
      {isPokemonLoaded ? (
        pokemon ? (
          <PokemonComponent pokemon={pokemon} />
        ) : (
          <Image
            className="img-fluid mx-auto d-block rounded"
            src="https://cdn.dribbble.com/users/2805817/screenshots/13206178/media/6bd36939f8a01d4480cb1e08147e20f3.png"
            alt="Pokémon not found placeholder"
          />
        )
      ) : (
        <Container>
          <Row className="justify-content-md-center p-2">
            <Spinner className="p-2" animation="border" role="status" />
          </Row>
          <Row className="justify-content-md-center p-2">
            Loading Pokémon...
          </Row>
        </Container>
      )}
    </>
  );
}
