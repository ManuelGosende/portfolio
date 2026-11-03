import { useTranslation } from "react-i18next";
import { Box, ButtonBase, Tooltip } from "@mui/material";
import { getPublicUrl } from "../utils/getPublicUrl";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const isEnglish = i18n.language.startsWith("en");

  const handleLanguageChange = (language: "es" | "en") => {
    i18n.changeLanguage(language);
  };

  const languages = [
    { code: "es", label: "Español", flag: "ar.png" },
    { code: "en", label: "English", flag: "gb.png" },
  ] as const;

  return (
    <Box
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      gap={0.5}
      padding={0.5}
      width="fit-content"
      flex="0 0 auto"
      sx={{
        backgroundColor: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: 10,
        whiteSpace: "nowrap",
      }}
    >
      {languages.map(({ code, label, flag }) => {
        const active =
          code === "en" ? isEnglish : !isEnglish;

        return (
          <Tooltip key={code} title={label} arrow>
            <ButtonBase
              onClick={() => handleLanguageChange(code)}
              aria-label={`Cambiar idioma a ${label}`}
              aria-pressed={active}
              sx={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                padding: "3px",
                border: active
                  ? "2px solid"
                  : "2px solid transparent",
                borderColor: active
                  ? "primary.light"
                  : "transparent",
                opacity: active ? 1 : 0.5,
                transform: active ? "scale(1.05)" : "scale(0.9)",
                transition: "all 0.25s ease",
                "&:hover": {
                  opacity: 1,
                  transform: "scale(1.1)",
                },
              }}
            >
              <Box
                component="img"
                src={getPublicUrl(flag)}
                alt={label}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                  display: "block",
                }}
              />
            </ButtonBase>
          </Tooltip>
        );
      })}
    </Box>
  );
}