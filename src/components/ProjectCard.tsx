import { Link as RouterLink } from "react-router-dom";
import { Typography } from "@mui/material";
import { FlexBox } from "./FlexBox";
import { useTranslation } from "react-i18next";
import { Image } from "./Image";

interface ProjectCardProps {
  title: string;
  cover: string;
  slug: string;
}

export const ProjectCard = ({
  title,
  cover,
  slug,
}: ProjectCardProps) => {

  const { t } = useTranslation();

  return (
    <RouterLink
      to={`/projects/${slug}`}
      style={{ textDecoration: "none" }}
    >
      <FlexBox flexDirection="column" gap={1}>
        <div className="project-card-image">
          <Image
            width="100%"
            height="100%"
            aspectRatio="16 / 16"
            image={`url('${cover}')`}
          />
        </div>

        <Typography variant="h3" color="white">
          {title}
        </Typography>

        <Typography variant="body2" color="white">
          {t(`projects.${slug}.shortDescription`)}
        </Typography>
      </FlexBox>
    </RouterLink>
  );
};