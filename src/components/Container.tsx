import { Box, styled } from "@mui/material";

interface ContainerProps {
  backgroundImage: string;
  children: React.ReactNode;
}

const BoxStyled = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  width: "-webkit-fill-available",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
}));

export const Container: React.FC<ContainerProps> = ({backgroundImage, children }) => {
  return (
    <BoxStyled
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      { children }
    </BoxStyled>
  );
}