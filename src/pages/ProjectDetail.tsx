import { useParams } from "react-router-dom";
import { Project, projects } from "../data/projects";
import { Border, Container, FlexBox, Image } from "../components";
import { Divider, Grid, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useTranslation } from "react-i18next";

export const ProjectDetail = () => {

  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { slug } = useParams<{ slug: string }>();

  const project: Project | undefined = projects.find(
    (project) => project.slug === slug
  );

  if (!project) return <div>Project not found</div>;

  return (
    <Container
      id="projectDetail"
      backgroundImage={`url('${process.env.PUBLIC_URL}/background-2.jpg')`}
    >
      <Border
        style={{
          marginTop: theme.spacing(5),
        }}
      >
        <FlexBox width="100%" flexDirection="column" justifyContent="center" gap={2}>
          <Typography variant="h2" color="white">{project.title}</Typography>
          <Typography variant="body1" color="white">{t(`projects.${project.slug}.description`)}</Typography>
          <FlexBox
            flexDirection={isMobile ? "column" : "row"}
            gap={isMobile ? 1 : 3}
            color="white"
            alignItems={isMobile ? "flex-start" : "center"}
          >
            <Typography variant="body2">{project.role}</Typography>
            <Divider
              color="white"
              orientation={isMobile ? "horizontal" : "vertical"}
              flexItem
            />
            <FlexBox flexDirection="row" gap={1} flexWrap="wrap">
              {project.technologies.map((technology) => (
                <Typography
                  key={technology}
                  border={1}
                  borderColor="white"
                  paddingX={1}
                  borderRadius={8}
                  variant="body2"
                >
                  {technology}
                </Typography>
              ))}
            </FlexBox>
            <Divider
              color="white"
              orientation={isMobile ? "horizontal" : "vertical"}
              flexItem
            />
            <Typography variant="body2">{project.year}</Typography>
          </FlexBox>
          {
            project.externalLink &&
            <Link
              color="primary.light"
              fontSize={11}
              fontStyle="normal"
              target="_blank"
              href={project.externalLink}
              sx={{
                display: "inline-flex",
                width: "fit-content",
              }}
            >
              <FlexBox flexDirection="row" gap={1} alignItems="center">
                {project.externalLink}
                <OpenInNewIcon />
              </FlexBox>
            </Link>
          }
          <Grid container spacing={2}>
            {project.images.map((image, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Image
                  width="100%"
                  height="100%"
                  aspectRatio="16 / 16"
                  image={`url('${image}')`}
                />
              </Grid>
            ))}
          </Grid>
        </FlexBox>
      </Border>
    </Container>
  );
};