import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { NavBar } from './components';

export const App = () => {
  
  /* Para deployar los cambios, primero eliminar node_modules y package-lock.json, y del package.json
  eliminar la primer linea "home" y la librería de gh-pages. Correr npm i, y luego npm run start para
  levantar la web con las imágenes. Luego seguir el video del siguiente link:
  https://www.youtube.com/watch?v=4G6O0BIoq6M&t=2s */

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}