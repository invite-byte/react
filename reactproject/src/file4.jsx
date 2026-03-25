import { button } from "framer-motion/m"
import File from "./file.jsx"
 
function Photo() {
  
  const Details = [
    {
      first:"🎢",
      second: "Ride Highights Gallery",
      third: "Show exciting moments from popular rides.",
      btn:"View Gallery",
    },
    {
      first:"🎥",
      second: "Park Tour Video",
      third: "Watch a fult tour of the park and explore attractions.",
      btn:"Watch video",
    },
    {
      first:"🎉",
      second: "Celebration Photos",
      third: "Momories from festivals, shows, and special events.",
      btn:"View Photos",
    },
    {
      first:"😊",
      second: "Visitor Fun Moments",
      third: "Happy guests enjoying rides and activities.",
       btn:"Explore",
    },
  ];

  const Datas = Details.map((pro, index) => (
    <File key={index} Img={pro.first} Head={pro.second} para={pro.third} btnText={pro.btn} />

  
  ));

  return (
    <>
      <h1 className="fw-bold" style={{color:"", textAlign:"center"}}>Photos and Videos</h1>
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", marginTop: "50px", marginBottom: "50px" }}>
        {Datas}
      </div>
      

     
     
    </>
  );
}

export default Photo;