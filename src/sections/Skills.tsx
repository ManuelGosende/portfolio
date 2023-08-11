import { Typography } from "@mui/material";
import { Border, Container, FlexBox, Profession } from "../components";
import { SkillsProgramming, SkillsDesign } from "../utils";
import { theme } from "../theme/theme";

export const Skills = () => {
  return (
    <Container
      id="skills"
      backgroundImage="url('background-2.jpg')"
    >
      <Typography variant="h1" color="primary.light" textAlign="right">02 SKILLS</Typography>
      <Border>
        <FlexBox
          width="100%"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={theme.spacing(4)}
        >
          <Profession
            profession="AS PROGRAMMER"
            icon="url('code-icon-black.png')"
            skills={ SkillsProgramming }
          />
          <Profession
            profession="AS DESIGNER"
            icon="url('design-icon-black.png')"
            skills={ SkillsDesign }
          />
        </FlexBox>
      </Border>
    </Container>
  );
}