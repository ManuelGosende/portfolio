import { useState } from "react";
import { Theme, useMediaQuery, useTheme } from "@mui/material";
import { FlexBox } from "./FlexBox";
import { MenuLink } from "./MenuLink";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

const MenuLinkList = () => {
  const { t } = useTranslation();
  return (
    <>
      <MenuLink to="experience">
        {t('navbar.experience')}
      </MenuLink>
      <MenuLink to="skills">
        {t('navbar.skills')}
      </MenuLink>
      <MenuLink to="linkstoprojects">
        {t('navbar.linkstoprojects')}
      </MenuLink>
      <MenuLink to="contact">
        {t('navbar.contact')}
      </MenuLink>
    </>
  );
}

export const NavBar = () => {

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const theme = useTheme();
  const downMd = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <FlexBox
      width="100%"
      gap={theme.spacing(4)}
      display={downMd ? "block" : "flex"}
      justifyContent={downMd ? "start" : "end"}
      position="fixed"
      zIndex={ 900 }
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
              onClick={ toggleMenu }
            />
            <FlexBox className={`animationMenu ${open ? 'menuOpen' : 'menuClosed'}`}>
              <MenuLinkList />
              <LanguageSwitcher />
            </FlexBox>
          </>
          :
          <MenuIcon 
            sx={{
              color: "primary.light"
            }}
            onClick={ toggleMenu }
          />
        }
      </>
      :
      <>
        <MenuLinkList />
        <LanguageSwitcher />
      </>
      }
    </FlexBox>
  );
}