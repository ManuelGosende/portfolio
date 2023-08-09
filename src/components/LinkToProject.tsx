import { Typography } from "@mui/material";
import { theme } from "../theme/theme";
import { FlexBox } from "./FlexBox";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import React from "react";

interface LinkToProjectProps {
  text: string;
}

export const LinkToProject: React.FC<LinkToProjectProps> = ({ text }) => {
  return (
    <FlexBox
      width="fit-content"
      gap={theme.spacing(1)}
      padding="2px"
      sx={{
        backgroundColor: "secondary.main"
      }}
    >
      <Typography variant="body1" color="primary.light">
        { text }
      </Typography>
      <ArrowOutwardIcon
        sx={{
          color: "primary.light"
        }}
      />
    </FlexBox>
  );
}