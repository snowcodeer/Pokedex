"use client";

import Container from "react-bootstrap/Container";
import Pokemon from "@/model/pokemonCard";
import { Row, Col } from "react-bootstrap";
import PokemonCardComp from "@/components/pokemonCardComp";

interface PokemonsCompProps {
   pokemons: Pokemon[];
}

export default function PokemonsComp(props: PokemonsCompProps) {
   return (
       <Container className="pt-4 pb-4">
           <Row xs={1} md={3} lg={5} className="g-4">
               {props.pokemons.map((pokemon) => (
                   <Col key={pokemon.pokemonNumber}>
                       <PokemonCardComp pokemon={pokemon}/>
                   </Col>
               ))}
           </Row>
       </Container>
       
   );
}
