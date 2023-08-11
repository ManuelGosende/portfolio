import { FlexBox } from "./FlexBox";
import { theme } from '../theme/theme';
import { MenuLink } from "./MenuLink";

export const NavBar = () => {
  return (
    <FlexBox
      width="100%"
      gap={theme.spacing(4)}
      justifyContent="end"
      position="fixed"
      sx={{
        background: 'linear-gradient(180deg, rgba(30,30,30,1) 43%, rgba(30,30,30,0) 100%)',
        marginLeft: '-40px',
        padding: theme.spacing(4),
        paddingLeft: '0px',
        
      }}
    >
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
    </FlexBox>
  );
}