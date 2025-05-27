import  Pokemon from "@/model/pokemon";
import { Row, Col, Container, Image, ProgressBar, Badge} from 'react-bootstrap';
import PokemonTypeBadgeComp from "@/components/pokemonTypeBadgeComp";
import "./pokemonComponents.css";

type Props ={
   pokemon: Pokemon;
}

export default function PokemonComponent(props : Props) {
   const {pokemon} = props;


   return (
       <Container>
           <Row className="justify-content-md-center">
               <Col md="auto"><h1>{pokemon.pokemonName}</h1></Col>
           </Row>
           <Row>
               <Col>
                   <Image src={pokemon.mainImage} thumbnail />
               </Col>
               <Col>
                   <div>
                    Health
                    <ProgressBar animated variant="success" now={pokemon.healthPoints} label={`${pokemon.healthPoints}`}/>
                    Attack
                    <ProgressBar animated variant="danger" now={pokemon.attack} label={pokemon.attack} />
                    Defense
                    <ProgressBar animated variant="warning" now={pokemon.defense} label={pokemon.defense} />
                    Speed
                    <ProgressBar animated variant="info" now={pokemon.speed} label={pokemon.speed} />
                    </div>

                    <div className="card mt-4 w-100">
                        <div className="card-body">
                            <p className="card-title">Pokemon Type</p>
                            <p className="card-text d-flex flex-wrap gap-2">
                            <PokemonTypeBadgeComp pokemonTypes={pokemon.pokemonType} />
                            </p>
                        </div>
                        </div>


                    <div className="card mt-4 w-100">

                    <div className="card-body">
                        <p className="card-title">Evolution Family</p>
                        <ul className="list-group list-group-flush">
                        {pokemon.evolutionFamily.slice(0, 3).map((name: string, index: number) => {
                            const currentIndex = pokemon.evolutionFamily.indexOf(pokemon.pokemonName);

                            if (name === pokemon.pokemonName) {
                            return (
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                {name}
                                <Badge bg="primary">Current</Badge>
                                </li>
                            );
                            } else if (index > currentIndex) {
                            return (
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                {name}
                                <Badge bg="success">Evolution</Badge>
                                </li>
                            );
                            } else {
                            return (
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                {name}
                                <Badge bg="danger">Devolution</Badge>
                                </li>
                            );
                            }
                        })}
                        </ul>
                    </div>
                    </div>

               </Col>
               
           </Row>
       </Container>
   );
}
