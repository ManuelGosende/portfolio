import { useState } from "react";
import { Theme, useMediaQuery, useTheme } from "@mui/material";
import { FlexBox } from "./FlexBox";
import { MenuLink } from "./MenuLink";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const MenuLinkList = () => {
  return (
    <>
      <MenuLink to="experience">
        EXPERIENCE
      </MenuLink>
      <MenuLink to="skills">
        SKILLS
      </MenuLink>
      <MenuLink to="linkstoprojects">
        LINKS TO PROJECTS
      </MenuLink>
      <MenuLink to="contact">
        CONTACT
      </MenuLink>
    </>
  );
}

export const NavBar = () => {

  const [open, setOpen] = useState(true);

  const theme = useTheme();
  const downMd = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <FlexBox
      width="100%"
      gap={theme.spacing(4)}
      display={downMd ? "block" : "flex"}
      justifyContent={downMd ? "start" : "end"}
      position="fixed"
      sx={{
        background: downMd ? theme.palette.primary.dark : 'linear-gradient(180deg, rgba(30,30,30,1) 43%, rgba(30,30,30,0) 100%)',
        marginLeft: downMd ? '' : '-40px',
        padding: downMd ? theme.spacing(2) : theme.spacing(4),
        paddingLeft: downMd ? '' : '0px',
        
      }}
    >
      { downMd ? 
      <>
        { open ?
          <>          
            <CloseIcon 
              sx={{
                color: "primary.light"
              }}
              onClick={() => setOpen(false)}
            />
            <MenuLinkList />
          </>
          :
          <MenuIcon 
            sx={{
              color: "primary.light"
            }}
            onClick={() => setOpen(true)}
          />
        }
      </>
      :
      <>
        <MenuLinkList />
      </>
      }
    </FlexBox>
  );
}