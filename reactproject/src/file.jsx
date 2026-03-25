import { useNavigate } from "react-router-dom";
function File({ Img, Head, para, btnText }) {
    const navigate = useNavigate();
    
  return (
    <div
      style={{
        width: "300px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        backgroundColor: "#fff"
      }}

    > <h4 style={{ marginBottom: "15px"}}>
      {Img}
    </h4>
      <h4 style={{ marginBottom: "15px", color: "#33baeb" }}>
        {Head}
      </h4>

      <p style={{ color: "#555", fontSize: "15px" }}>
        {para}
      </p>
      <button 
         onClick={() => navigate(`/rides/`)}
        style={{
            marginTop:"15px",
            padding:"8px 16px",
            backgroundColor:"#33baeb",
            color:"white",
            border:"none",
            borderRadius:"6px",
            cursor:"pointer"
        }}>
            {btnText}
        </button>
    </div>
  );
}

export default File;
