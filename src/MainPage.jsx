import React from "react";
import EmailForm from "./EmailForm";
import { TypeAnimation } from "react-type-animation";
import stolensocietylogo from "./assets/stolensocietylogo.png";
import ParticlesBackground from "./ParticlesBackground";

const MainPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-black text-white">
    
      <img src={stolensocietylogo} alt="Logo" className=" h-52" />
      <div className="mb-2">
        <TypeAnimation
          sequence={["Join the waiting list for 20% off", 1000]}
          wrapper="span"
          speed={20}
          style={{
            fontSize: "1em",
            display: "inline-block",
            fontFamily: "'Roboto', sans-serif",
          }}
          repeat={Infinity}
        />
      </div>
      <EmailForm />
      
    </div>
  );
};

export default MainPage;
