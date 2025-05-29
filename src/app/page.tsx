'use client'
import PokemonsComp from "@/components/pokemonsComp";
import PokeNavBar from "@/components/pokeNavBarComp";
import PokemonCard from "@/model/pokemonCard";
import { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";


export default function Home() {


 const [pokemons, setPokemons] = useState<PokemonCard[]>();


useEffect(() => {
  const fetchData = async () => {
    const resp = await fetch("/pokemons.json"); // read from public folder
    if (resp.ok) {
      const pokemons: PokemonCard[] = await resp.json(); // remove `.items`
      console.log(pokemons);
      setPokemons(pokemons);
    } else {
      console.error("Failed to fetch:", resp.status);
    }
  };

  

  fetchData().catch(error => {
    console.error("Error loading data:", error);
  });
}, []);



 return (
   <>
     <PokeNavBar></PokeNavBar>
     {pokemons ?
       <PokemonsComp pokemons={pokemons}></PokemonsComp> :
       <Container>
         <Row className="justify-content-md-center p-2">
           <Spinner className='p-2' animation='border' role='status' />
         </Row>
         <Row className="justify-content-md-center p-2">
           Loading Pokémons...
         </Row>
       </Container>
     }
   </>
 );
}
