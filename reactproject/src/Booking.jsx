import React, { useState } from "react";
import "./BookingTickets.css";
import Img from "./assets/ticket.jpeg"
import Img1 from "./assets/book.jpeg"


function BookingTickets() {
   const handleClick=()=>{
        alert("Booking sucesssfully!");
    };

  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [senior, setSenior] = useState(0);
  const [toddler, setToddler] = useState(0);

  return (
    <div className="booking-page">

      <h1 className="title">Booking Tickets</h1>
      <div style={{textAlign:"center"}}>
        <h5>Book Your Tickets</h5>
          <p>
            Enjoy exciting rides and attractions at Adventure Theme Park.
            Book your tickets easily online.
          </p>
      </div>
       
      <div className="booking-container">
       {/* Booking */}
       
        <div className="booking">

          <h3>Step 1: Ticket Options</h3>

          <div className="ticket-row">
            <span>Adult ($50)</span>
            <div>
              <button onClick={()=>setAdult(adult-1)}>-</button>
              <span>{adult}</span>
              <button onClick={()=>setAdult(adult+1)}>+</button>
            </div>
          </div>

          <div className="ticket-row">
            <span>Child ($35)</span>
            <div>
              <button onClick={()=>setChild(child-1)}>-</button>
              <span>{child}</span>
              <button onClick={()=>setChild(child+1)}>+</button>
            </div>
          </div>

          <div className="ticket-row">
            <span>Senior ($30)</span>
            <div>
              <button onClick={()=>setSenior(senior-1)}>-</button>
              <span>{senior}</span>
              <button onClick={()=>setSenior(senior+1)}>+</button>
            </div>
          </div>

          <div className="ticket-row">
            <span>Toddler (Free)</span>
            <div>
              <button onClick={()=>setToddler(toddler-1)}>-</button>
              <span>{toddler}</span>
              <button onClick={()=>setToddler(toddler+1)}>+</button>
            </div>
           
          </div>


          {/* Step 2 */}
          <h3>Step 2: Select Date</h3>
          <input type="date" required className="input" />


          {/* Step 3 */}
          <h3>Step 3: Your Information</h3>

          <input type="text" required placeholder="Full Name"  className="input" />
          <input type="email" required placeholder="Email Address" className="input"/>
          <input type="tel" required placeholder="Phone Number" className="input"/>

          <button className="checkout-btn"
             onClick={handleClick}>
            Proceed to Checkout
          </button>
     
        </div>
        </div>
       
      <div className="secure">
        🔒 Secure Payment - Your information is protected
      </div>
      
   
    </div>
  );
}

export default BookingTickets;