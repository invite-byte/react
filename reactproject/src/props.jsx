import who1 from './assets/summer.jpeg'
import who2 from './assets/magic.jpeg'
import who3 from './assets/fireworks.jpeg'
import who4 from './assets/dance.jpeg'
import File5 from "./file5"

function List() {
  const Details = [
    {
      first: who1,
      second: "Summer Festival Parnde",
      third: "Enjoy a colorful parade with music, dance, and fun performances.",
    },
    {
      first: who2,
      second: "Magic Show Live",
      third: "Watch amazing magic tricks and exciting illusions live on stage.",
    },
    {
      first: who3,
      second: "Fireworks Night",
      third: "Enjoy a beautiful Fireworks display lighting up the night sky.",
      
    },
     {
      first: who4,
      second: "Dance & Music Carnival",
      third: "Celebrate with live music, dance, and festivel entertainment.",
    },
    
  ];

  const Data = Details.map((pro) => (
    <File5 image={pro.first} Head={pro.second} para={pro.third} btnText="Book Now"/>
  ))

  return (
    <>
      <div className="text-center mb-4 ">
        <h1 className="fw-bold">Upcoming Events</h1>
        <p className="text-muted">
                 </p>
       
      </div>
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        {Data}
      </div>
    </>
  );
}

export default List;
