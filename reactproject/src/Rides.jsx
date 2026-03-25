import RidesCard from "./ridescard";
import Ride1 from './assets/roller.jpeg'
import Ride2 from './assets/drop.jpeg'
import Ride3 from './assets/giant.jpeg'
import Ride4 from './assets/sky.jpeg'
import Ride5 from './assets/loop roller.jpeg'
import Ride6 from './assets/wheel.jpeg'
import Ride7 from './assets/Carousel.jpeg'
import Ride8 from './assets/mini train.jpeg'
import Ride9 from './assets/flying chair.jpeg'
import Ride10 from './assets/tea cup.jpeg'
import Ride11 from './assets/water slide.jpeg'
import Ride12 from './assets/lazy river.jpeg'
import Ride13 from './assets/splash boat.jpeg'
import Ride14 from './assets/splash.jpeg'
import Ride15 from './assets/one.jpeg'
import Ride16 from './assets/mini coaster.jpeg'
import Ride17 from './assets/bumper car.jpeg'
import Ride18 from './assets/kidstrain.jpeg'
import Ride19 from './assets/balloon.jpeg'
import Ride20 from './assets/pirateship.jpeg'
import Ride21 from './assets/hanuted.jpeg'
import Ride22 from './assets/4dtheater.jpeg'
import Ride23 from './assets/vr.jpeg'
import Ride24 from './assets/junglesafari.jpeg'

function Ride() {
  const ride = [
    // Thrill Rides
    {
     
      name: "Roller Coaster",
      degree:"Fast ride with curves and drops.",
      specialization: "Thrill Rides",
      image: Ride1,
      
    },
    {
     
      name: "Drop Tower",
      degree:"Goes very high and suddndly drops down.",
      specialization: "Thrill Rides",
      image: Ride2,
     
    },
    {
     
      name: "Gaint Swing",
      degree:"Large arm swings riders back and forth in the air,",
      specialization: "Thrill Rides",
      image: Ride3,
   
    },
    {
      
      name: "Sky Screamer",
      degree:"Tal tower where chairs spin around high in the air.",
      specialization: "Thrill Rides",
      image: Ride4,
   
      
    },
    // {
     
    //   name: "Loop Coaster",
    //   degree:"Roller coaster with  big loop where riders go upside down.",
    //   specialization: "Thrill Rides",
    //   image: Ride5,
   
     
    // },
   

    // Family Rides
    {
     
      name: "Ferris Whell",
      degree:"A large rotating wheel with passenger cabins.",
      specialization: "Family Rides",
      image: Ride6,
    
      
    },
    {
     
      name: "Carousel",
      degree:"A Rotating ride with horses for children and families.",
      specialization: "Family Rides",
      image: Ride7, 
   
     
    },
    {
     
      name: "Mini Train",
      degree:"A small train ride that goes around the park.",
      specialization: "Family Rides",
      image: Ride8,
     
    },
   
    {
     
      name: "Tea Cups",
      degree:"Spinning cups where riders can rotate the cup themselves.",
      specialization: "Family Rides",
      image: Ride10,
  
      
    },
     // {
      
    //   name: "Flying Chairs",
    //   degree:"Swing chairs that rotate around a tall tower.",
    //   specialization: "Family Rides",
    //   image: Ride9,
   
     
    // },

    // Water Rides
    {
      
      name: "Water Slide",
      degree:"A tall slide where people slide down into the pool.",
      specialization: " Water Rides",
      image: Ride11,  
   
    },
    {
     
      name: "Lazy River",
      degree:"A slow river where peoplev relax on tubes and float.",
      specialization: " Water Rides",
      image: Ride12,
   
    },
    {
     
      name: "Splash Boat",
      degree:"A boat ride that slides down and makes a big splash.",
      specialization: " Water Rides",
      image: Ride13,
    
    },
    {
     
      name: "Wave Pool",
      degree:"A big swimming pool that creates ocean-like waves.",
      specialization: " Water Rides",
      image: Ride14,
  
    },
    //  {
     
    //   name: "River Rapids",
    //   degree:"Fast water ride with round rafts moving through rough water.",
    //   specialization: " Water Rides",
    //   image: Ride15,
   
    // },

    // Kids Rides
     {
     
      name: "Mini Coaster",
      degree:"A small roller coaster ride for kids.",
      specialization: "Kids Rides",
      image: Ride16, 
   
    },
     {
     
      name: "Bumper Cars",
      degree:"Kids drive cars and bump into each other for fun.",
      specialization: "Kids Rides",
      image: Ride17,
   
    },
     {
     
      name: "Mini Pirate Ship",
      degree:"A small pirate ship that swings back and forth.",
      specialization: "Kids Rides",
      image: Ride20,
   
    },
     {
     
      name: "Balloon Rides",
      degree:"Colorful balloons that spin slowly in the air.",
      specialization: "Kids Rides",
      image: Ride19,
  
    },
    //  {
     
   
    //   name: "Kids Train",
    //   degree:"A small train ride around the park for children",
    //   specialization: "Kids Rides",
    //   image: Ride18,
   
    //  },

    // Adventure Rides
     {
     
      name: "Haunted House",
      degree:"A spooky ride with ghosts and scary suprises.",
      specialization: "Adventure Rides",
      image: Ride21,
   
    },
     {
     
      name: "4D Theater Ride",
      degree:"A moive experience with moving seats and special effects.",
      specialization: "Adventure Rides",
      image: Ride22,
    
    },
     {
     
      name: "VR Adventure Ride",
      degree:"A virtual reality ride with an exciting digital world.",
      specialization: "Adventure Rides",
      image: Ride23,
   
     
    },
     {
     
      name: "Jungle Safari Ride",
      degree:"An adventure ride through a jungle with animal scenes.",
      specialization: "Adventure Rides",
      image: Ride24,
   
     
    }
  ];

  const specializations = [...new Set(ride.map(ride => ride.specialization))];

  return (
    <div style={{ padding: "10PX", paddingTop: "50px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "40px",paddingTop:"30px", }}>
         Our Rides
      </h2>

      {specializations.map((spec, index) => (
        <div key={index} style={{ marginBottom: "50px" }}>
          <h3
            style={{
              marginBottom: "20px",
              display: "inline-block",
              paddingBottom: "5px",
              width: "100%",
              textAlign: "center"
            }}
          >
            {spec}
          </h3>
          
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              gap: "20px"
            }}
          >
            {ride
              .filter(ride => ride.specialization === spec)
              .map(ride => (
                <RidesCard key={ride.id} ride={ride} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Ride;
