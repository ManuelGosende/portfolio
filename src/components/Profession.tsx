import { Divider, Grid, Typography, Theme, useMediaQuery, useTheme } from "@mui/material";
import { FlexBox } from "./FlexBox";
import { Image } from "./Image";

interface ProfessionProps {
  profession: string;
  icon: string;
  skills: string[];
}

export const Profession: React.FC<ProfessionProps> = ({ profession, icon, skills }) => {

  const theme = useTheme();
  const downMd = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <FlexBox
      width={downMd ? "100%" : "70%"}
      flexDirection={downMd ? "column" : "row"}
      justifyContent="space-between"
      gap={downMd ? theme.spacing(2) : theme.spacing(6)}
      padding={downMd ? theme.spacing(0) : theme.spacing(4)}
      sx={{
        backgroundColor: downMd ? "" : "primary.light"
      }}
    >
      <FlexBox
        flexDirection="column"
        justifyContent="space-between"
        gap={downMd ? theme.spacing(2) : "auto"}
      >
        <Typography
          variant="h2"
          color="primary.light"
          padding={theme.spacing(2)}
          sx={{
            backgroundColor: "primary.dark",
            marginLeft: downMd ? "0px" : "-120px",
            marginRight: downMd ? "auto" : "0px",
            whiteSpace: 'nowrap',
          }}
        >
          { profession }
        </Typography>
        <FlexBox gap={theme.spacing(1)}>
          <Image
            width="35px"
            height="35px"
            image={ icon }
          />
          <Image 
            width="35px"
            height="35px"
            image="url('heart-icon.png')"
          />
        </FlexBox>
      </FlexBox>
      <Grid
        container
        spacing={0}
        sx={{
          backgroundColor: downMd ? "primary.light" : "",
          padding: downMd ? theme.spacing(2) : ""
        }}
      >
        {skills.map((skill, index) => (
          <Grid item xs={6} key={ index }>
            <Typography
              variant="body2"
              textAlign={index % 2 === 0 ? 'left' : 'right'}
              sx={{
                padding: `${theme.spacing(1)} 0px`,
              }}
            >
              { skill }
            </Typography>
            <Divider
              orientation="horizontal"
              variant="middle"
              sx={{
                borderColor: "primary.dark",
                margin: 0,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </FlexBox>
  );
}