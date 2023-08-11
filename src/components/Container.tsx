import { Box, styled } from "@mui/material";

interface ContainerProps {
  id: string;
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

export const Container: React.FC<ContainerProps> = ({ id, backgroundImage, children }) => {
  return (
    <BoxStyled
      id={id}
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      { children }
    </BoxStyled>
  );
}