import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/theme';
import { About, Contact, Experience, LinksToProjects, Skills } from './sections';
import { FlexBox, NavBar } from './components';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
{/*       <NavBar /> */}
      <FlexBox
        flexDirection="column"
        alignItems="center"
      >
        <About />
{/*         <Experience />
        <Skills />
        <LinksToProjects />
        <Contact /> */}
      </FlexBox>
    </ThemeProvider>
  );
}