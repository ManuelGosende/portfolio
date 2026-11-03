import { Grid, useTheme } from "@mui/material";
import { Container, Border } from "../components";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import { useEffect } from "react";
import { getPublicUrl } from "../utils/getPublicUrl";

export const Projects = () => {
  const theme = useTheme();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  return (
    <Container
      id="projectsGrid"
      backgroundImage={`url('${getPublicUrl('background-1.jpg')}')`}
    >
      <Border
        style={{
          marginTop: theme.spacing(5),
        }}
      >
        <Grid container spacing={2}>
          {projects.map(({ title, cover, slug }) => (
            <Grid item xs={12} sm={6} md={4} key={slug}>
              <ProjectCard
                title={title}
                cover={cover}
                slug={slug}
              />
            </Grid>
          ))}
        </Grid>
      </Border>
    </Container>
  );
};