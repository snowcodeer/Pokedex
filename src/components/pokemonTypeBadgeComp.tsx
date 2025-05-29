"use client";

import { typeColorMap } from "@/model/typeColorMap";

interface PokemonTypeBadgeCompProps {
  pokemonTypes: string[];
}

export default function PokemonTypeBadgeComp({ pokemonTypes }: PokemonTypeBadgeCompProps) {
  return (
    <div className="d-flex flex-wrap gap-2">
      {pokemonTypes?.map((type, index) => {
        const typeInfo = typeColorMap[type];

        if (!typeInfo) return null;

        return (
          <span
            key={index}
            className="badge"
            style={{
              backgroundColor: typeInfo.color,
              color: "#fff",
              padding: "0.5em 0.75em",
              fontSize: "0.9rem",
              borderRadius: "1rem",
              display: "inline-block",
              lineHeight: "1.2rem",
            }}
          >
            {typeInfo.emoji} {type}
          </span>
        );
      })}
    </div>
  );
}
