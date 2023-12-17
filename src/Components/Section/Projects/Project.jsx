
import Container from '../../Shared/Container';
import SectionHeader from '../../Shared/SectionHeader';
import CreativeStudy from './CreativeStudy/CreativeStudy';

const Project = () => {
    <Container
      className=" w-[100%] bg-transparent min-h-[500px] "
      id="projects"
    >
      <SectionHeader name="PROJECTS" z={30} />
      <CreativeStudy></CreativeStudy>
    </Container>
};

export default Project;