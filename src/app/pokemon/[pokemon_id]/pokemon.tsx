import Pokemon from "@/model/pokemon";
import { Row, Col, Container, Image, ProgressBar, Badge } from 'react-bootstrap';
import PokemonTypeBadgeComp from "@/components/pokemonTypeBadgeComp";
import FunCard from "@/components/FunCard";
import { BsBarChart, BsLightning, BsDiagram3 } from "react-icons/bs";
import "./pokemonComponents.css";

type Props = {
  pokemon: Pokemon;
};

const typeColors: Record<string, string> = {
  Water: '#4facfe',
  Fire: '#f5576c',
  Grass: '#43e97b',
  Electric: '#fceabb',
  Ice: '#a1c4fd',
  Rock: '#d7ccc8',
  Ground: '#e4a663',
  Psychic: '#ff9a8b',
  Fairy: '#fbc2eb',
  Bug: '#c0e218',
  Poison: '#bc6ff1',
  Flying: '#89f7fe',
  Dragon: '#8e2de2',
  Dark: '#4b4b4b',
  Steel: '#cfd8dc',
  Ghost: '#5c6bc0',
  Normal: '#e0e0e0',
  Fighting: '#ef6c00',
};

function getBackgroundGradient(types: string[]) {
  const colors = types.map(type => typeColors[type] || '#ddd');

  if (colors.length === 1) {
    return `linear-gradient(to bottom right, ${colors[0]}, #ffffff)`;
  }

  if (colors.length === 2) {
    return `linear-gradient(to bottom right, ${colors[0]}, ${colors[1]})`;
  }

  // If more than 2 types
  return `linear-gradient(to bottom right, ${colors.join(', ')})`;
}

export default function PokemonComponent({ pokemon }: Props) {
  const currentIndex = pokemon.evolutionFamily.indexOf(pokemon.pokemonName);

  const backgroundStyle = {
  backgroundImage: getBackgroundGradient(pokemon.pokemonType),
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  minHeight: '100vh',
  padding: '2rem'
    };

  return (
    <div style={backgroundStyle}>
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1>{pokemon.pokemonName}</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <Image src={pokemon.mainImage} thumbnail />
        </Col>

        <Col>
          <FunCard title="Stats" icon={<BsBarChart />} gradient="to right, #00c6ff, #0072ff">
            <div>Health</div>
            <ProgressBar animated variant="success" now={pokemon.healthPoints} label={`${pokemon.healthPoints}`} className="mb-3" />
            <div>Attack</div>
            <ProgressBar animated variant="danger" now={pokemon.attack} label={`${pokemon.attack}`} className="mb-3" />
            <div>Defense</div>
            <ProgressBar animated variant="warning" now={pokemon.defense} label={`${pokemon.defense}`} className="mb-3" />
            <div>Speed</div>
            <ProgressBar animated variant="info" now={pokemon.speed} label={`${pokemon.speed}`} />
          </FunCard>

          <FunCard title="Pokemon Type" icon={<BsLightning />} gradient="to right, #ff6a00, #ee0979">
            <div className="d-flex flex-wrap gap-2">
              <PokemonTypeBadgeComp pokemonTypes={pokemon.pokemonType} />
            </div>
          </FunCard>

          <FunCard title="Evolution Family" icon={<BsDiagram3 />} gradient="to right, #7f00ff, #e100ff">
            <ul className="list-group list-group-flush">
              {pokemon.evolutionFamily.slice(0, 3).map((name: string, index: number) => {
                const badge =
                  name === pokemon.pokemonName
                    ? <Badge bg="primary">Current</Badge>
                    : index > currentIndex
                      ? <Badge bg="success">Evolution</Badge>
                      : <Badge bg="danger">Devolution</Badge>;

                return (
                  <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    {name}
                    {badge}
                  </li>
                );
              })}
            </ul>
          </FunCard>
        </Col>
      </Row>
    </Container>
    </div>
  );
}
