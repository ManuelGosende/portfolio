import { Link as LinkScroll } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

import { FlexBox } from "./FlexBox";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Theme, useMediaQuery } from "@mui/material";

interface MenuLinkProps {
  to: string;
  children: React.ReactNode;
}

export const MenuLink: React.FC<MenuLinkProps> = ({
  to,
  children,
}) => {
  const location = useLocation();

  const downMd = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const isHome = location.pathname === "/";

  const linkContent = (
    <FlexBox
      alignItems="center"
      position="relative"
      overflow="hidden"
      sx={{
        color: "primary.light",
        fontSize: "0.875rem",
      }}
      gap={1}
      className="containerLink"
    >
      {children}

      <FlexBox
        className="containerArrow"
        borderLeft="1px solid #07AA79"
      >
        <ArrowOutwardIcon sx={{ zIndex: 300 }} />
      </FlexBox>
    </FlexBox>
  );

  return isHome ? (
    <LinkScroll
      style={{ cursor: "pointer" }}
      to={to}
      spy
      smooth
      offset={downMd ? -150 : -40}
      duration={500}
    >
      {linkContent}
    </LinkScroll>
  ) : (
    <RouterLink
      to={`/#${to}`}
      style={{
        textDecoration: "none",
        cursor: "pointer",
      }}
    >
      {linkContent}
    </RouterLink>
  );
};