import { Box } from "@mui/material";

interface ImageProps {
  width: string;
  height: string;
  image: string;
}

export const Image: React.FC<ImageProps> = ({ width, height, image }) => {
  return (
    <Box
      width={ width }
      height={ height }
      style={{
        backgroundImage: image,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    />
  );
}