import { Box } from "@mui/material";

interface ImageProps {
  width: string;
  height?: string;
  image: string;
  aspectRatio?: string;
}

export const Image: React.FC<ImageProps> = ({ width, height, image, aspectRatio }) => {
  return (
    <Box
      width={ width }
      height={ height }
      style={{
        aspectRatio: aspectRatio,
        backgroundImage: image,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    />
  );
}