import { Typography, Theme, useMediaQuery, useTheme } from "@mui/material";
import { Border, Container, FlexBox, LinkToProject } from "../components";
import { useTranslation } from "react-i18next";

export const LinksToProjects = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const downSm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <Container
      id="linkstoprojects"
      backgroundImage="url('background-3.jpg')"
    >
      <Typography variant="h1" color="primary.light">{t('linkstoprojects.title')}</Typography>
      <Border>
        <FlexBox
          width={downSm ? "75%" : "60%"}
          flexDirection="column"
          gap={theme.spacing(2)}
        >
          <Typography variant="body1" color="primary.main">
            {t('linkstoprojects.description')}
          </Typography>
          <LinkToProject
            text={t('linkstoprojects.project2')}
            link="https://drive.google.com/drive/folders/1uQD3a5dNhxqA0tOFKmJiW3435UaQ_IrP"
          />
          <LinkToProject
            text={t('linkstoprojects.project1')}
            link="https://www.instagram.com/buenolagarto/"
          />
          <LinkToProject
            text={t('linkstoprojects.project3')}
            link="https://www.instagram.com/ariasarguelles/"
          />
          <LinkToProject
            text={t('linkstoprojects.project4')}
            link="https://www.figma.com/file/sd8xTP72KHOO0FagtfqAKU/Lanin?type=design&node-id=0-1&mode=design"
          />
          <LinkToProject
            text={t('linkstoprojects.project5')}
            link="https://seller-manager.com/"
          />
          <LinkToProject
            text={t('linkstoprojects.project6')}
            link="https://meat-rank.com/"
          />
          <LinkToProject
            text={t('linkstoprojects.project7')}
            link="https://www.crehana.com/proyecto/manuelgosende/by-order-of-the-peaky-blinders/"
          />
          <Typography variant="body1" color="primary.main">
            {t('linkstoprojects.description2')}
          </Typography>
          <LinkToProject
            text={t('linkstoprojects.project8')}
            link="https://www.figma.com/file/LgNc1ntYLqsjKCwasFz8Vk/Portfolio?type=design&node-id=0%3A1&mode=design&t=htBEvOcZnNyQFdgs-1"
          />
          <LinkToProject
            text={t('linkstoprojects.project9')}
            link="https://github.com/ManuelGosende/portfolio/tree/master"
          />
        </FlexBox>
      </Border>
    </Container>
  );
}