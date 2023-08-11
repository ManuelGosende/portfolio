import { styled } from "@mui/material";
import { theme } from "../theme/theme";
import { FlexBox } from "./";

interface BorderProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const FlexBoxStyled = styled(FlexBox)(({ theme }) => ({
  padding: theme.spacing(4),
  border: `1px solid ${theme.palette.primary.light}`,
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(3),
    flexDirection: "column"
  },
}));

export const Border: React.FC<BorderProps> = ({ children, style }) => {
  return (
    <FlexBoxStyled
      style={{
        ...style
      }}
    >
      { children }
    </FlexBoxStyled>
  );
}