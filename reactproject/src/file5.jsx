import photo from "./assets/img1.jpeg"
import BookingTickets from "./Booking"
import { useNavigate } from "react-router-dom";

function File5({ image = photo, Head = "Default heading", para ,btnText }) {
    const navigate = useNavigate();
    return (

        <div style={{ height: "490px", width: "350px", border: "solid", textAlign: "center", marginTop: "20px",borderRadius:"25px" }}>
            <img src={image} height="300px" width="345px" style={{borderTopLeftRadius:"20px",borderTopRightRadius:"20px",}} />
            <h3 style={{marginTop:"10px"}}>{Head}</h3>
            <p>{para}</p>
            <button 
             onClick={() => navigate(`/ticket/`)}
            style={{  
            marginTop:"15px",
            padding:"8px 16px",
            backgroundColor:"#33baeb",
            color:"white",
            border:"none", 
            borderRadius:"6px",}}>{btnText}</button>
        </div>
    


    )
}
export default File5