import { Typography } from "@mui/material";
import { Border, Container, FlexBox, Job } from "../components";
import { theme } from "../theme/theme";

export const Experience = () => {
  return (
    <Container
      backgroundImage="url('background-1.1.jpg')"
    >
      <Typography variant="h1" color="primary.light">01 EXPERIENCE</Typography>
      <Border>
        <FlexBox
          width="100%"
          flexDirection="column"
          justifyContent="center"
          gap={theme.spacing(4)}
        >
          <Job 
            company="QWAVEE"
            time="JANUARY 2022 - PRESENT"
            position="FRONTEND DEVELOPER"
            description="I work as a Frontend Developer using React, TypeScript, JavaScript, HTML, Material UI and SCSS as my technological stack, in order to implement functionality and styling to different components. I have worked with REST APIs to retrieve data and render it on the frontend. I have also worked with Web Services to send data to a payment gateway, and integrated Mailchimp for newsletters and form submissions. Additionally, I have experience with Object-Oriented Programming (OOP). I use Git to manage version control for each project, working with branches and different environments for pull request management. I have also used the SSH protocol with a Client-Server architecture to deploy the website in production. Working with Agile methodologies, I am in constant communication with the team to achieve incremental development. Additionally, I provide demos to the client after each sprint to showcase the progress."
            icon="url('code-icon.png')"
          />
          <Job
            company="PLOOT DISEÑOS"
            time="OCTOBER 2016 - NOVEMBER 2021"
            position="GRAPHIC DESIGNER"
            description="During the years I worked at Ploot Desiños, I was able to grow as a professional and acquire soft skills such as communication with clients and interpreting their ideas. I was responsible for tasks in the Design department, such as creating corporate identities, brands, flyers, logos, among others. I also participated in the production and development of projects in the graphic workshop, such as assembling signage, plotters, and dimensional lettering."
            icon="url('design-icon.png')"
          />
        </FlexBox>
      </Border>
    </Container>
  );
}