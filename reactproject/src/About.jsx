import React from "react";
import Img1 from "./assets/about.jpeg"
import Img2 from "./assets/roller.jpeg"
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Img3 from "./assets/log flume.jpeg"
import Img4 from "./assets/welcome.jpeg"
import Img5 from "./assets/land.jpeg"

function About() {
  return (
    <div className="about-container" style={{marginTop:"80px", backgroundColor: "#e6f2ff"}}>

      {/* Title Section */}
      <div className="about-header">
        <h1 style={{textAlign:"center"}}>About Us</h1>
      </div>

      {/* Banner Image */}
      <div className="about-banner">
        <img className="d-block w-100 m" src={Img1} alt="Theme Park" />
      </div>

      {/* Welcome Section */}
      <Container>
        <div style={{margin:"20px"}}>
        <Row>
        <Col md={6}>
        <div className="about-text">
          <h2>Welcome to Adventure Land Theme Park!</h2>
          <p>
           Welcome to Adventure Land Theme Park, a place where fun, excitement, and unforgettable memories come to life. Our park is designed to bring joy to visitors of all ages with thrilling rides, entertaining attractions, and a lively atmosphere full of adventure.
           At Adventure Land, we believe that every visit should feel like a new journey. From heart-pounding roller coasters and water rides to family-friendly attractions and kids’ play zones, there is something for everyone to enjoy.
           Our mission is to create a safe, exciting, and magical environment where families and friends can spend quality time together. With delicious food stalls, live entertainment, and beautiful themed areas, Adventure Land is the perfect destination for relaxation and adventure.
           Whether you are looking for thrilling experiences, fun with family, or a place to celebrate special moments, Adventure Land Theme Park promises an amazing day full of laughter and excitement.
           Adventure starts here — welcome to Adventure Land!
          </p>
        </div>
         </Col>
         <Col md={6}>
        <div className="about-image">
          <img className="d-block w-100" height="350px" src={Img2} alt="Roller Coaster" style={{borderRadius:"20px"}} />
        </div>
      
      </Col>
      </Row>
      </div>
    
      {/* Mission Section */}
      <Row>
       <Col md={8}>
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            Our mission at Adventure Land Theme Park is to create a safe, fun, and exciting environment where families and friends can enjoy unforgettable experiences together. We aim to provide thrilling rides, entertaining attractions, and high-quality services that bring happiness to visitors of all ages.
            We are committed to maintaining the highest standards of safety, cleanliness, and customer satisfaction while continuously adding new adventures and attractions for our guests.
            Our goal is to make every visit to Adventure Land Theme Park a memorable and joyful adventure.
            Our mission is to create lasting memories by providing a safe,
            exciting, and enjoyable environment for families and friends.
          </p>
        </div>
         </Col>
          <Col md={4}>
        <div className="about-image">
          <img className="d-block w-100" height="250px" src={Img3} alt="Swing Ride"  style={{borderRadius:"20px"}}/>
        </div>
        </Col>
       </Row>
      {/* Attractions Section */}
      <div style={{margin:"20px"}}>
       <Row>
        
        <Col md={6}>
        <div className="about-text">
          <h2>Our Attractions</h2>
          <p>
            Our park is packed with attractings for everyone! Enjoy high-speed
            roller coasters,classic Ferris wheels,adventure water rides, and enchanting carousers.
            We also offer variety gift intertainment and many fun melcious meen high our
            attractions designed for kids and adults.
          </p>
        </div>
         </Col>
         <Col md={3}>
        <div className="about-gallery">
          <img className="d-block w-100" height="250px" src={Img4} alt="Water Ride"  style={{borderRadius:"20px"}} />
          </div>
          </Col>
          <Col md={3}>
           <div className="about-gallery">
          <img className="d-block w-100" height="250px" src={Img5} alt="Safari Ride"  style={{borderRadius:"20px"}} />
        </div>
        </Col>
      </Row>
      </div>
       </Container>
    </div>
  );
}

export default About;
