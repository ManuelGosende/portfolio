import { Typography, Theme, useMediaQuery, useTheme } from "@mui/material";
import { Border, Container, FlexBox, Profession } from "../components";
import { SkillsProgramming, SkillsDesign } from "../utils";

export const Skills = () => {

  const theme = useTheme();
  const downMd = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <Container
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