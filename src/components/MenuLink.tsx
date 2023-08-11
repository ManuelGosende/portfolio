import { Link as LinkScroll } from 'react-scroll';
import { FlexBox } from './FlexBox';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Theme, useMediaQuery, useTheme } from "@mui/material";

interface MenuLinkProps {
  to: string;
  children: React.ReactNode;
}

export const MenuLink: React.FC<MenuLinkProps> = ({ to, children }) => {

  const theme = useTheme();
  const downMd = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <LinkScroll
      style={{ 
        cursor: 'pointer',
      }}
      to={to}
      spy={true}
      smooth={true}
      offset={downMd ? -150 : -40}
      duration={500}
    >
      <FlexBox
        alignItems="center"
        sx={{ 
          color: "primary.light",
          fontSize: "0.875rem",
          position: 'relative',
          overflow: 'hidden',
        }}
        gap={1}
        className='containerLink'
      >
        { children }
          <FlexBox
            className='containerArrow'
          >
            <ArrowOutwardIcon
              sx={{ zIndex: 300 }}
            />
          </FlexBox>
      </FlexBox>
    </LinkScroll>
  );
}