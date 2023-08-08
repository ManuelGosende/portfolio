import { styled } from "@mui/material";
import { theme } from "../theme/theme";
import { FlexBox } from "./";

interface BorderProps {
  children: React.ReactNode;
}

const FlexBoxStyled = styled(FlexBox)(({ theme }) => ({
  padding: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(3),
    flexDirection: "column"
  },
}));

export const Border: React.FC<BorderProps> = ({ children }) => {
  return (
    <FlexBoxStyled
      style={{
        border: `1px solid ${theme.palette.primary.light}`
      }}
    >
      { children }
    </FlexBoxStyled>
  );
}