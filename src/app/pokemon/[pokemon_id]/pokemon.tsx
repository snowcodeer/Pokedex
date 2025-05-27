import  Pokemon from "@/model/pokemon";
import { Row, Col, Container, Image, ProgressBar} from 'react-bootstrap';
import PokemonTypeBadgeComp from "@/components/pokemonTypeBadgeComp";


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

                    <div className="card mt-4" style={{ width: '12rem' }}>
                    <div className="card-body">
                        <p className="card-title">Pokemon Type</p>
                        <p className="card-text">
                            <PokemonTypeBadgeComp pokemonTypes={pokemon.pokemonType} />
                        </p>
                    </div>
                    </div>


               </Col>
               
           </Row>
       </Container>
   );
}
