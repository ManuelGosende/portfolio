import { Box, Divider, Typography, Theme, useMediaQuery, useTheme, Link } from "@mui/material";
import { Container, Border, FlexBox, Image } from "../components";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export const About = () => {

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
          <Typography variant="h2" color="secondary.main">I’M MANUEL GOSENDE</Typography>
          <Typography variant="h3" color="primary.main">FRONTEND DEVELOPER & GRAPHIC DESIGNER</Typography>
          <Typography variant="body1" color="primary.light">I'm based in Mar del Plata, Argentina, passionate about using technology to create software that combines functionality and UX/UI to improve everyday life and transform the way people interact with the virtual world.<br /><br />
          I have a solid knowledge of HTML, CSS, JavaScript, TypeScript and React. Looking at design, I can transform it into responsive web pages with meticulous attention to detail. I am always eager to stay up-to-date with the latest web development tools and technologies.<br /><br />
          Currently, I am exploring React Native to apply my skills to app development.</Typography>
        </FlexBox>
        <Image 
          width="100%"
          height={downMd ? "230px" : "auto"}
          image="url('profile.png')"
        />
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