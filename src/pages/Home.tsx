import { About, Contact, Experience, LinksToProjects, Skills } from "../sections";
import { FlexBox } from "../components";

export const Home = () => {
  return (
    <FlexBox
      flexDirection="column"
      alignItems="center"
    >
      <About />
      <Experience />
      <Skills />
      <LinksToProjects />
      <Contact />
    </FlexBox>
  );
};