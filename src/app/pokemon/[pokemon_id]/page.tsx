// File: /src/app/pokemon/[pokemon_id]/page.tsx

'use client';
import { Row, Container, Image, Spinner } from 'react-bootstrap';
import Pokemon from '@/model/pokemon';
import { useEffect, useState } from 'react';
import PokemonComponent from './pokemon';
import PokeNavBar from '@/components/pokeNavBarComp';

export default function PokemonPage({ params }: { params: { pokemon_id: string } }) {
  const { pokemon_id } = params;
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await fetch(`/api/pokemon/${pokemon_id}`);
        if (resp.ok) {
          const data: Pokemon = await resp.json();
          setPokemon(data);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
        setIsLoaded(true);
      }
    }
    fetchData();
  }, [pokemon_id]);

  return (
    <>
      <PokeNavBar />
      {isLoaded ? (
        pokemon ? (
          <PokemonComponent pokemon={pokemon} />
        ) : (
          <Image
            className="img-fluid mx-auto d-block rounded"
            src="https://cdn.dribbble.com/users/2805817/screenshots/13206178/media/6bd36939f8a01d4480cb1e08147e20f3.png"
            alt="Pokémon not found"
          />
        )
      ) : (
        <Container>
          <Row className="justify-content-md-center p-2">
            <Spinner animation="border" role="status" className="p-2" />
          </Row>
          <Row className="justify-content-md-center p-2">
            Loading Pokémon...
          </Row>
        </Container>
      )}
    </>
  );
}
