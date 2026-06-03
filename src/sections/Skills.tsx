import { Typography } from "@mui/material";
import { Border, Container, FlexBox, Profession } from "../components";
import { SkillsProgramming, SkillsDesign } from "../utils";
import { theme } from "../theme/theme";
import { useTranslation } from "react-i18next";

export const Skills = () => {
  const { t } = useTranslation();
  return (
    <Container
      id="skills"
      backgroundImage="url('background-2.jpg')"
    >
      <Typography variant="h1" color="primary.light" textAlign="right">{t('skills.title')}</Typography>
      <Border>
        <FlexBox
          width="100%"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={theme.spacing(4)}
        >
          <Profession
            profession={t('skills.programmer')}
            icon="url('code-icon-black.png')"
            skills={ SkillsProgramming }
          />
          <Profession
            profession={t('skills.designer')}
            icon="url('design-icon-black.png')"
            skills={ SkillsDesign }
          />
        </FlexBox>
      </Border>
    </Container>
  );
}