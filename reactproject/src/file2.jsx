
import Photo from "./assets/img1.jpeg"
import { useNavigate } from "react-router-dom";



function Carouselsection() {
   const navigate = useNavigate();
  return (
    <div>
   
   
        
        <img
           onClick={() => navigate(`/ticket/`)}
          className="d-block w-100 m"
          src={Photo} 
          alt="First slide" height='550px' 
          style={{marginTop:"80px"}}
        />
     
     
  
   
    </div>
  );
}

export default Carouselsection;