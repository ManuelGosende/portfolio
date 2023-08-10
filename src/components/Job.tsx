import { Divider, Typography, Theme, useMediaQuery, useTheme } from "@mui/material";
import { FlexBox, Image } from "./";

interface JobProps {
  company: string;
  time: string;
  position: string;
  description: React.ReactNode;
  icon: string;
}

export const Job: React.FC<JobProps> = ({ company, time, position, description, icon }) => {
  
  const theme = useTheme();
  const downMd = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
  <FlexBox
    width="100%"
    flexDirection="column"
    justifyContent="center"
    gap={theme.spacing(1)}
  >
    <FlexBox
      justifyContent="space-between"
    >
      <Typography variant="h2" color="primary.light">{ company }</Typography>
      <Typography variant="h2" textAlign="right" color="primary.light">{ time }</Typography>
    </FlexBox>
    <Divider
      orientation="horizontal"
      variant="middle"
      sx={{
        borderColor: "primary.light",
        margin: 0,
      }}
    />
    <Typography variant="h3" textAlign="right" color="primary.light">{ position }</Typography>
    <Divider
      orientation="horizontal"
      variant="middle"
      sx={{
        borderColor: "primary.light",
        margin: 0,
      }}
    />
    <FlexBox
      flexDirection={downMd ? "column" : "row"}
      alignItems="center"
      gap={downMd ? theme.spacing(1) : theme.spacing(7)}
    >
      <Typography
        variant="body1"
        color="primary.light"
        sx={{
          maxWidth: downMd ? "100%" : "50%"
        }}
      >
        { description }
      </Typography>
      <Image
        width={downMd ? "35px" : "70px"}
        height={downMd ? "35px" : "70px"}
        image={icon}
      />
    </FlexBox>
  </FlexBox>
  );
}