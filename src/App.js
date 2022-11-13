import Header from './components/Header';
import Main from './components/Main';
import Pelicula from './components/Pelicula';
import pelicula from './json/peliculas.json'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Container style={{ backgroundColor:"#5c4040" }} >
       <Header/>
       <Main/>
       
       
       
       <Row>
        <Col>
        <br></br>
        {pelicula.map((peli,i) =>
        <Pelicula
          key = {i}
          img={peli.img}
          titulo = {peli.titulo}
          descripcion = {peli.descripcion}
          duracion = {peli.duracion}
          actores = {peli.actores} 
          trailer={peli.trailer} 
        ></Pelicula>)}
        </Col>
       
       </Row>
         
       
                                                
    </Container>
    
    
  );
}

export default App;
