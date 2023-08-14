import { Typography, Link } from "@mui/material";
import { theme } from "../theme/theme";
import { FlexBox } from "./FlexBox";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

interface LinkToProjectProps {
  text: string;
  link: string;
}

export const LinkToProject: React.FC<LinkToProjectProps> = ({ text, link }) => {
  return (
    <FlexBox
      width="fit-content"
      gap={theme.spacing(1)}
      position="relative"
      overflow="hidden"
      className="containerProject"
    >
      <Link target="_blank" underline="none" href={link}>
        <FlexBox
          alignItems="center"
          className="arrowProject"
        >
          <Typography paddingLeft="4px" variant="body1" color="primary.light" zIndex={ 300 }>
            { text }
          </Typography>
          <ArrowOutwardIcon
            sx={{
              color: "primary.light",
              zIndex: 300
            }}
          />
        </FlexBox>
      </Link>
    </FlexBox>
  );
}