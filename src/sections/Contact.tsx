import { Link, Typography } from "@mui/material";
import { Border, Container, FlexBox } from "../components";
import { theme } from "../theme/theme";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Contact = () => {
  return (
    <Container
      id="contact"
      backgroundImage="url('background-4.jpg')"
    >
      <Typography variant="h1" color="primary.light">CONTACT</Typography>
      <Border>
        <FlexBox
          width="100%"
          flexDirection="column"
          alignItems="center"
          gap={theme.spacing(2)}
        >
          <Typography variant="body1" color="primary.main" textAlign="center">
            Thank you very much for visiting my portfolio!<br />
            You can reach out to me <Link color="primary.light" href="mailto:mgosende5@gmail.com">here.</Link>
          </Typography>
          <FlexBox
            justifyContent="center"
            gap={theme.spacing(2)}
            color="primary.light"
            padding={theme.spacing(1)}
          >
            <Link color="primary.light" href="https://github.com/ManuelGosende"><GitHubIcon /></Link>
            <Link color="primary.light" href="https://www.linkedin.com/in/manuel-gosende/"><LinkedInIcon /></Link>
            <Link color="primary.light" href="https://www.instagram.com/manuel.gosende/"><InstagramIcon /></Link>
          </FlexBox>
        </FlexBox>
      </Border>
      <Typography
        variant="body2"
        color="primary.light"
        textAlign="center"
        fontFamily="MonumentRegular, sans-serif"
        letterSpacing="1px"
        sx={{
          padding: theme.spacing(2)
        }}
      >
        @DESIGN & @PROGRAMMING<br /> MANUEL GOSENDE
      </Typography>
    </Container>
  );
}