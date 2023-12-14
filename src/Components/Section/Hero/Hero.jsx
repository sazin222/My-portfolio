
import Container from "../../Shared/Container";
import HeroHeader from "./HeroHeader";
import HeroContainer from "./heroContainer";

const Hero = () => {
  return (
    <div
      className=" hero-bg h-screen min-h-[200px] text-white font-generalBold sticky top-0 "
      id="home"
    >
     
      <Container className="absolute top-0 left-[5%]  h-full">
        <HeroHeader></HeroHeader>
        <HeroContainer></HeroContainer>
      </Container>
    </div>
  );
};

export default Hero;