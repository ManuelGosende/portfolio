import { Typography, Theme, useMediaQuery, useTheme } from "@mui/material";
import { Border, Container, FlexBox, LinkToProject } from "../components";

export const LinksToProjects = () => {

  const theme = useTheme();
  const downSm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <Container
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
          />
          <LinkToProject
            text="ENZO BIBBÓ | WEB"
          />
          <LinkToProject
            text="ILLUSTRATION"
          />
          <Typography variant="body1" color="primary.main">
            This website was designed and developed by me using some of the tools mentioned above. Below you will find the links to view the Figma mockup and the code on GitHub.
          </Typography>
          <LinkToProject
            text="FIGMA"
          />
          <LinkToProject
            text="GITHUB"
          />
        </FlexBox>
      </Border>
    </Container>
  );
}