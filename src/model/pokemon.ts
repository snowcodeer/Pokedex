// File: /model/pokemon.ts

/**
 * Represents the data structure for a Pokémon.
 */
export default interface Pokemon {
  /** National Pokédex number */
  pokemonNumber: number;
  /** Base attack stat */
  attack: number;
  /** Base defense stat */
  defense: number;
  /** Name of previous evolution (empty if none) */
  devolution: string;
  /** Name of next evolution (empty if none) */
  evolution: string;
  /** Full family chain of evolutions */
  evolutionFamily: string[];
  /** Base Hit Points */
  healthPoints: number;
  /** URL to the main image */
  mainImage: string;
  /** Pokémon's name */
  pokemonName: string;
  /** Primary and secondary type(s) */
  pokemonType: string[];
  /** Base speed stat */
  speed: number;
}
