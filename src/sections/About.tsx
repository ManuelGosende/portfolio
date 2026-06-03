import { Box, Divider, Typography, Theme, useMediaQuery, useTheme, Link } from "@mui/material";
import { Container, Border, FlexBox, Image } from "../components";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const downMd = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <Container
      id="about"
      backgroundImage="url('background-1.jpg')"
    >
      <Border
        style={{
          marginTop: theme.spacing(4)
        }}
      >
        <FlexBox
          width="100%"
          flexDirection="column"
          justifyContent="center"
          gap={downMd ? theme.spacing(1) : theme.spacing(2)}
        >
          <Typography variant="h2" color="secondary.main">{t('about.title')}</Typography>
          <Typography variant="h3" color="primary.main">{t('about.subtitle')}</Typography>
          <Typography variant="body1" color="primary.light">
            {t('about.description1')}<br /><br />
            {t('about.description2')}<br /><br />
            {t('about.description3')}
          </Typography>
        </FlexBox>
        <FlexBox
          width="100%"
          marginBottom={downMd ? '-20px' : '-40px'}
        >
          <Image 
            width="100%"
            height={downMd ? "230px" : "auto"}
            image="url('profile.png')"
          />
        </FlexBox>
        <Divider
          orientation={downMd ? "horizontal" : "vertical"}
          variant="middle"
          sx={{
            borderColor: "primary.light",
            height: "auto",
            padding: downMd ? "10px 0" : "0px"
          }}
        />
        <FlexBox
          flexDirection={downMd ? "row" : "column"}
          justifyContent="center"
          gap={theme.spacing(2)}
          color="primary.light"
          padding={theme.spacing(1)}
        >
          <Link target="_blank" underline="none" color="primary.light" href="https://github.com/ManuelGosende"><GitHubIcon /></Link>
          <Link target="_blank" underline="none" color="primary.light" href="https://www.linkedin.com/in/manuel-gosende/"><LinkedInIcon /></Link>
          <Link target="_blank" underline="none" color="primary.light" href="https://www.instagram.com/manuel.gosende/"><InstagramIcon /></Link>
        </FlexBox>
      </Border>
      <Box
        height="30px"
        paddingTop={theme.spacing(4)}
        style={{
          backgroundImage: `url('barcode.png')`,
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat'
        }}
      />
    </Container>
  );
}