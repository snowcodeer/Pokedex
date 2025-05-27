"use client";

import PokemonCard from "@/model/pokemonCard";
import { Card } from "react-bootstrap";
import PokemonTypeBadgeComp from "./pokemonTypeBadgeComp";

interface PokemonCardCompProps {
   pokemon: PokemonCard;
}

export default function PokemonCardComp(props: PokemonCardCompProps) {
   const pokemonUrl = `/pokemon/${props.pokemon.pokemonNumber}`;

   return (
       <a href={pokemonUrl} style={styles.link}>
           <Card style={styles.card}>
               <Card.Img
                   variant="top"
                   src={props.pokemon.mainImage}
                   alt={`${props.pokemon.pokemonName} image`}
                   style={styles.image}
               />
               <Card.Body>
                   <Card.Title>{props.pokemon.pokemonName}</Card.Title>
                   <Card.Text>
                       <PokemonTypeBadgeComp pokemonTypes={props.pokemon.pokemonType} />
                   </Card.Text>
               </Card.Body>
           </Card>
       </a>
   );
}

const styles: { [key: string]: React.CSSProperties } = {
   link: {
     textDecoration: 'none',
     color: 'inherit',
     display: 'block',
     width: '250px',
   },
   card: {
     width: '100%',
   },
   image: {
     width: '100%',
     height: 'auto',           // Allow image to scale proportionally
     maxHeight: '150px',       // Constrain maximum height
     objectFit: 'contain',     // Ensure whole image is visible without cropping
     backgroundColor: '#f8f8f8'// Optional: placeholder background
   },
};