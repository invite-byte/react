import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Photo2 from "./assets/logo.jpeg";


function Footer() {
  return (
    <div>
    <footer className="text-dark mt-5 pt-4 pb-2" style={{backgroundColor:"rgb(251, 250, 250)"}}>
      <Container>

        <Row className="mb-4">

          {/* About Section */}
          <Col md={4} className="mb-3">
            <h5 className="fw-bold"><img src={Photo2} height="50px" width='200px'></img></h5>
            <p style={{textAlign:"justify"}}>
              A theme park is a fun-filled place with exciting rides. colorful shows, and entertainment for all ages.
              It's the perfect destination to enjoy adventures, laughter, and unforgettable memories with family and friends.
            </p>
          </Col>

          {/* Services Section (Not Navigation) */}
          <Col md={4} className="mb-3">
            <h5 className="fw-bold">⚠️ Visitor Information</h5>
            <p className="mb-2 mt-3">✔ Outside Food Not Allowed</p>
            <p className="mb-2">✔ Follow Safety Rules</p>
            <p className="mb-2">✔ Keep Park Clean</p>
        
          </Col>

          {/* Contact Section */}
          <Col md={4} className="mb-3">
            <h5 className="fw-bold">📍 Contact Information</h5>
            <p className="mb-1">Advanture Land Theme Park</p>
            <p className="mb-1">123 Fun Street, Happy City</p>
            <p className="mb-1"><strong>Phone:</strong> +91 98765 43210</p>
            <p className="mb-2"><strong>Email:</strong> info@adventureland.com</p>

           
          </Col>
           </Row>
           <div style={{textAlign:"center"}}>
            <h5 className="fw-bold">🕒 Opening Hours</h5>
            <p className="mb-1"><strong>Monday - Friday :</strong> 10:00 AM - 7:00 PM</p>
            <p className="mb-2"><strong>Saturday - Sunday :</strong> 9:00 AM - 9:00 PM</p>

           </div>
          

       

        <hr />

        <div className="text-center">
          <small>
            ©2026 Adventure Land Theme Park. All rights reserved.
          </small>
        </div>

      </Container>
    </footer>
    </div>
  );
}

export default Footer;
