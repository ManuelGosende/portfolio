import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/theme';
import { About, Contact, Experience, LinksToProjects, Skills } from './sections';
import { FlexBox, NavBar } from './components';

export const App = () => {
  
  /* Para deployar los cambios, primero eliminar node_modules y package-lock.json, y del package.json
  eliminar la primer linea "home" y la librería de gh-pages. Correr npm i, y luego npm run start para
  levantar la web con las imágenes. Luego seguir el video del siguiente link:
  https://www.youtube.com/watch?v=4G6O0BIoq6M&t=2s */

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <FlexBox
        flexDirection="column"
        alignItems="center"
      >
        <About />
        <Experience />
        <Skills />
        <LinksToProjects />
        <Contact />
      </FlexBox>
    </ThemeProvider>
  );
}