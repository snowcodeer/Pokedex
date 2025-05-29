'use client';
import PokemonsComp from "@/components/pokemonsComp";
import PokeNavBarComp from "@/components/pokeNavBarComp";
import PokemonCard from "@/model/pokemonCard";
import { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";

export default function Home() {
  const [allPokemons, setAllPokemons] = useState<PokemonCard[]>([]);
  const [selectedType, setSelectedType] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/pokemons.json")
      .then(resp => {
        if (!resp.ok) throw new Error(`Fetch failed: ${resp.status}`);
        return resp.json();
      })
      .then((data: PokemonCard[]) => setAllPokemons(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const allTypes = Array.from(
    new Set(allPokemons.flatMap(p => p.pokemonType))
  ).sort();

  const pokemonsToShow = selectedType
    ? allPokemons.filter(p => p.pokemonType.includes(selectedType))
    : allPokemons;

  return (
    <>
      <PokeNavBarComp
        types={allTypes}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
      />

      {loading ? (
        <Container
          fluid
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ height: '80vh' }}
        >
          <Spinner animation="border" role="status" />
          <div
            className="mt-3"
            style={{ fontFamily: `'Trebuchet MS', sans-serif`, fontSize: '1.2rem' }}
          >
            Loading Pokémons...
          </div>
        </Container>
      ) : (
        <PokemonsComp pokemons={pokemonsToShow} />
      )}
    </>
  );
}
