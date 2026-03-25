import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from './assets/roller.jpeg'
import Image1 from './assets/splash.jpeg'
import Image2 from './assets/kids.jpeg'
import Image3 from './assets/wave swinger.jpeg'
import Image4 from './assets/drop.jpeg'
import Image5 from './assets/sky.jpeg'
import Container from 'react-bootstrap/esm/Container';

function Cardsection() {
  return (
    <div>
     <h1 className="fw-bold" style={{ margin: '20px',textAlign:"center"}}>
     Featured Rides
     </h1>
    
     
    <div style={{ display:'flex' ,justifyContent:"space-arround",flexWrap:"warp" ,margin:"50px"}}>
      <Container>
      <Row> 
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={Image} height={'300px'} />
            <Card.Body>
              <Card.Title style={{textAlign:"center"}} >Thunder Roller Coasters</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card >
            <Card.Img variant="top" src={Image1} height={'300px'} />
            <Card.Body>
              <Card.Title style={{textAlign:"center"}} >Splash Water Adventure</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card >
            <Card.Img variant="top" src={Image2} height={'300px'} />
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}>Kids Zone</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        <br></br>
        <Row> 
        <Col md={4}>
          <Card >
            <Card.Img variant="top" src={Image3} height={'300px'} />
            <Card.Body>
              <Card.Title style={{textAlign:"center"}} >Wave Swinger</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={Image4} height={'300px'} />
            <Card.Body>
              <Card.Title style={{textAlign:"center"}} >Drop Tower</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={Image5} height={'300px'} />
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}>Sky Wheel</Card.Title>
            </Card.Body>
          </Card>
        </Col>
         </Row>
         </Container>

         
    </div>
    </div>
        
  );
}

export default Cardsection;