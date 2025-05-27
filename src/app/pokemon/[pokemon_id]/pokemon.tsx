import Pokemon from "@/model/pokemon";
import { Row, Col, Container, Image, ProgressBar, Badge } from 'react-bootstrap';
import FunCard from "@/components/FunCard";
import { BsBarChart, BsLightning, BsDiagram3 } from "react-icons/bs";
import "./pokemonComponents.css";
import { typeColors, typeIcons } from '@/model/typeMaps';

type Props = {
  pokemon: Pokemon;
};

function getAnimatedGradientCSS(types: string[]): string {
  const colors = types.map(type => typeColors[type] || '#ccc');

  if (colors.length === 1) {
    colors.push('#ffffff'); 
  }
  const stops = colors.slice(0, 3).join(', ');
  return `linear-gradient(270deg, ${stops})`;
}

export default function PokemonComponent({ pokemon }: Props) {
  const currentIndex = pokemon.evolutionFamily.indexOf(pokemon.pokemonName);

  const gradient = getAnimatedGradientCSS(pokemon.pokemonType);

    const animatedBgStyle = {
    backgroundImage: gradient,
    backgroundSize: '400% 400%',
    animation: 'gradientShift 8s ease infinite',
    minHeight: '100vh',
    padding: '2rem',
    };

  return (
    <div style={animatedBgStyle}>
        <div className="background-icons">
  {pokemon.pokemonType.flatMap((type) =>
    Array.from({ length: 25 }).map((_, j) => (
      <span
        key={`${type}-${j}`}
        className="type-icon"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 8}s`,
          fontSize: `${2.5 + Math.random() * 2}rem`,
        }}
      >
        {typeIcons[type] || '❓'}
      </span>
    ))
  )}
</div>

    <div style={{ position: 'relative', zIndex: 0 }}>
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
                <div className="pokemon-types-stack">
                    {pokemon.pokemonType.map((type, index) => (
                        <div
                        key={index}
                        className="type-pill"
                        style={{
                            backgroundColor: typeColors[type] || '#ccc',
                            color: '#fff',
                        }}
                        >
                        <span className="me-2">{typeIcons[type] || '❓'}</span>
                        {type}
                        </div>
                    ))}
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
    </div>
  );
}
