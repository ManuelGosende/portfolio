import { Typography, useTheme } from "@mui/material";
import { Border, Container, FlexBox, Profession } from "../components";
import { SkillsProgramming, SkillsDesign } from "../utils";
import { useTranslation } from "react-i18next";
import { getPublicUrl } from "../utils/getPublicUrl";

export const Skills = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <Container
      id="skills"
      backgroundImage={`url('${getPublicUrl('background-2.jpg')}')`}
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
            icon={getPublicUrl('code-icon-black.png')}
            skills={ SkillsProgramming }
          />
          <Profession
            profession={t('skills.designer')}
            icon={getPublicUrl('design-icon-black.png')}
            skills={ SkillsDesign }
          />
        </FlexBox>
      </Border>
    </Container>
  );
}