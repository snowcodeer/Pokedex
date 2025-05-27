"use client";


import PokemonCard from "@/model/pokemonCard";
import { Card } from "react-bootstrap";


interface PokemonCardCompProps {
   pokemon: PokemonCard;
}


export default function PokemonCardComp(props: PokemonCardCompProps) {


   const pokemonUrl = `/pokemon/${props.pokemon.pokemonNumber}`;


   return (
       <a href={pokemonUrl}>
           <Card>
               <Card.Img variant="top" src={props.pokemon.mainImage} />
               <Card.Body>
                   <Card.Title>{props.pokemon.pokemonName}</Card.Title>
               </Card.Body>
           </Card>
       </a>
   );
}
