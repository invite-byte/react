import { useNavigate } from "react-router-dom";

function RidesCard({ ride }) {

  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "350px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "15px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#fff"
      }}
    >
      <img
        src={ride.image}
        alt={ride.name}
        style={{
          width: "300px",
          height: "200px",
          backgroundColor: "#f5f5f5",
          borderRadius: "10px",
          marginBottom: "10px"
        }}
      />


      {/* ride Name */}
      <h4 style={{ marginBottom: "5px",height:"50px" }}>
        {ride.name}
      </h4>

      {/* Degree */}
      <p
        style={{
          fontSize: "18px",
          color: "gray",
          marginTop: "0",
          height: "40px"
        }}
      >
        {ride.degree}
      </p>

       

     

      

     
    </div>
  );
}

export default RidesCard;
