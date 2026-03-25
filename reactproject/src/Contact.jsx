
 import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Img from './assets/about1.jpeg'
import {Link} from 'react-router-dom'

  function Contact() {

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
      const { name, value } = e.target;

      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        message: ""
      });
    };

    return (
      <div
        style={{
          minHeight: "100vh",
          paddingTop: "120px",
          paddingLeft: "20px",
          paddingRight: "20px",
          backgroundColor: "#e6f2ff"
        }}
      >
        <div> 
          
         
          <h2 style={{ textAlign: "center", marginBottom: "10px",}}>
            Contact Us
          </h2>

          <div>
            <h1 style={{textAlign:"center", color:"rgba(136, 122, 118, 0.89)"}}>Adventure Land Theme Park</h1>
          </div>
          <div style={{ display:'flex',flexWrap:"warp" ,margin:"50px"}}>
            <Container>
                <Row>
                    <div className="col-md-6 col-sm-6">
                    <Col>
                     <img  className="d-block w-100" src={Img} height="300px" width="600px" style={{borderRadius:"20px"}} ></img>
                    </Col>
                    </div>
                    <div className="col-md-6 col-sm-6">
                    <Col>
                     <Link to="/" style={{color:"black",textDecoration:"none",marginBottom:"5px"}}><h4>Advanture Land Theme Park</h4></Link>
                     <p style={{marginTop:"10px"}}>123 Fun Street, Happy City</p>
                     <p>Tamil Nadu - 641305</p>
                     <h6 style={{marginTop:"50px"}}>Email:</h6>
                     <p>info@adventureland.com</p>
                     <h6>Phone:</h6>
                     <p>+91 98765 43210</p>
                     </Col>
                     </div>
                </Row>
            </Container>

          </div>
          {/* Contact Form */}
          <h2 style={{textAlign:"center"}}>Reach Out To Us</h2>
          <div
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
            }}
          >
            {submitted && (
              <p
                style={{
                  backgroundColor: "#d4edda",
                  padding: "10px",
                  borderRadius: "6px",
                  color: "green",
                  marginBottom: "20px"
                }}
              >
                Thank you for contacting us. We will get back to you soon!
              </p>
            )}
             
            <form onSubmit={handleSubmit}>

             
              <div style={{ marginBottom: "15px" }}>
                <label>Your Name:</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                   placeholder="Enter Your Name"
                  style={{ width: "100%", padding: "8px" }}
                />
              </div>

               
              <div style={{ marginBottom: "15px" }}>
                <label>Your Phone Number:</label>
                <input
                  type="text"
                  name="number"
                  required
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="Enter Your Phone Number"
                  style={{ width: "100%", padding: "8px" }}
                />
              </div>

              <div style={{ marginBottom: "15px" }}>
                <label>Your Email:</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                   placeholder="Enter Your Email Id"
                  style={{ width: "100%", padding: "8px" }}
                />
              </div>

              <div style={{ marginBottom: "15px" }}>
                <label>Your Message:</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  style={{ width: "100%", padding: "8px" }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#0dcaf0",
                  border: "none",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  cursor: "pointer"
                }}
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    );
  }

  export default Contact;
