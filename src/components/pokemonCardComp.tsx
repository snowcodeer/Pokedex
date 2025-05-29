"use client";

import PokemonCard from "@/model/pokemonCard";
import { Card } from "react-bootstrap";
import PokemonTypeBadgeComp from "./pokemonTypeBadgeComp";
import { typeColorMap } from "@/model/typeColorMap";
import './pokemonCardComp.css';

interface PokemonCardCompProps {
  pokemon: PokemonCard;
}

export default function PokemonCardComp({ pokemon }: PokemonCardCompProps) {
  const pokemonUrl = `/pokemon/${pokemon.pokemonNumber}`;
  const primaryType = pokemon.pokemonType?.[0];
  const glowColor = primaryType && typeColorMap[primaryType]?.color;

  return (
    <a href={pokemonUrl} style={{ textDecoration: "none" }}>
      <Card
        className="pokemon-card"
        data-type={primaryType}
        style={{ "--glow-color": glowColor } as React.CSSProperties}
      >
        <Card.Img
          variant="top"
          src={pokemon.mainImage}
          className="pokemon-card-img"
        />
        <Card.Body>
          <Card.Title>{pokemon.pokemonName}</Card.Title>
            <Card.Text>
            <PokemonTypeBadgeComp pokemonTypes={pokemon.pokemonType} />
            </Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
}
