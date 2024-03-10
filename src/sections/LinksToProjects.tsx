import { Typography, Theme, useMediaQuery, useTheme } from "@mui/material";
import { Border, Container, FlexBox, LinkToProject } from "../components";

export const LinksToProjects = () => {

  const theme = useTheme();
  const downSm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <Container
      id="linkstoprojects"
      backgroundImage="url('background-3.jpg')"
    >
      <Typography variant="h1" color="primary.light">03 LINKS TO PROJECTS</Typography>
      <Border>
        <FlexBox
          width={downSm ? "75%" : "60%"}
          flexDirection="column"
          gap={theme.spacing(2)}
        >
          <Typography variant="body1" color="primary.main">
            Here are some of the projects I have worked on during my professional career. I invite you to navigate the links to see the final results.
          </Typography>
          <LinkToProject
            text="DESIGN PROJECTS"
            link="https://drive.google.com/drive/folders/1uQD3a5dNhxqA0tOFKmJiW3435UaQ_IrP"
          />
          <LinkToProject
            text="ENZO BIBBÓ | WEB"
            link="https://enzobibbo.com/"
          />
          <LinkToProject
            text="LANIN | WEB DESIGN"
            link="https://www.figma.com/file/sd8xTP72KHOO0FagtfqAKU/Lanin?type=design&node-id=0-1&mode=design"
          />
          <LinkToProject
            text="LANIN | WEB"
            link="https://www.laninstudio.xyz/"
          />
          <LinkToProject
            text="ILLUSTRATION"
            link="https://www.crehana.com/proyecto/manuelgosende/by-order-of-the-peaky-blinders/"
          />
          <Typography variant="body1" color="primary.main">
            This website was designed and developed by me using some of the tools mentioned above. Below you will find the links to view the Figma mockup and the code on GitHub.
          </Typography>
          <LinkToProject
            text="FIGMA"
            link="https://www.figma.com/file/LgNc1ntYLqsjKCwasFz8Vk/Portfolio?type=design&node-id=0%3A1&mode=design&t=htBEvOcZnNyQFdgs-1"
          />
          <LinkToProject
            text="GITHUB"
            link="https://github.com/ManuelGosende/portfolio/tree/master"
          />
        </FlexBox>
      </Border>
    </Container>
  );
}