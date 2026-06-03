import { Typography } from "@mui/material";
import { Border, Container, FlexBox, Job } from "../components";
import { theme } from "../theme/theme";
import { useTranslation } from "react-i18next";

export const Experience = () => {
  const { t } = useTranslation();
  return (
    <Container
      id="experience"
      backgroundImage="url('background-1.1.jpg')"
    >
      <Typography variant="h1" color="primary.light">{t('experience.title')}</Typography>
      <Border>
        <FlexBox
          width="100%"
          flexDirection="column"
          justifyContent="center"
          gap={theme.spacing(4)}
        >
          <Job 
            company={t('experience.job1.company')}
            time={t('experience.job1.time')}
            position={t('experience.job1.position')}
            description={
              <div dangerouslySetInnerHTML={{ __html: t('experience.job1.description') }} />
            }
            icon="url('code-icon.png')"
          />
          <Job 
            company={t('experience.job2.company')}
            time={t('experience.job2.time')}
            position={t('experience.job2.position')}
            description={
              <div dangerouslySetInnerHTML={{ __html: t('experience.job2.description') }} />
            }
            icon="url('code-icon.png')"
          />
          <Job
            company={t('experience.job3.company')}
            time={t('experience.job3.time')}
            position={t('experience.job3.position')}
            description={
              <div dangerouslySetInnerHTML={{ __html: t('experience.job3.description') }} />
            }
            icon="url('design-icon.png')"
          />
        </FlexBox>
      </Border>
    </Container>
  );
}