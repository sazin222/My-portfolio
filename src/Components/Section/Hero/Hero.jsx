

import Container from "../../Shared/Container";
import HeroHeader from "./HeroHeader";
import HeroContainer from "./heroContainer";


const Hero = () => {
  return (
    <div
      className=" hero-bg h-screen min-h-[200px] text-white font-generalBold sticky top-0 "
      id="home"
    >
      {/* <img
        src="./assets/hero-bg.png"
        alt=""
        className="h-screen w-full object-cover"
      /> */}

      {/* <video
        className="w-full h-full object-cover opacity-20"
        src="./assets/hero-background.mp4"
        autoPlay
        loop
        muted
      /> */}
      <Container className="absolute top-0 left-[5%]  h-full">
        <HeroHeader></HeroHeader>
        <HeroContainer></HeroContainer>
      </Container>
    </div>
  );
};

export default Hero;