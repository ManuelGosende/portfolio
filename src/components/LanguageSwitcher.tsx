import { useTranslation } from 'react-i18next';
import { Box, Switch, FormControlLabel } from '@mui/material';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    i18n.changeLanguage(event.target.checked ? 'en' : 'es');
  };

  return (
    <Box>
      <FormControlLabel
        control={
          <Switch
            checked={i18n.language === 'en'}
            onChange={handleLanguageChange}
            color="primary"
            name="languageSwitch"
            inputProps={{ 'aria-label': 'language switch' }}
          />
        }
        labelPlacement="start"
        label={i18n.language === 'en' ? 'EN' : 'ES'}
        sx={{ 
          marginLeft: 0,
          marginRight: 0,
          marginTop: '-5px',
          color: 'primary.light',
          '& .MuiSwitch-track': {
            backgroundColor: 'secondary.main',
          },
          '& .MuiSwitch-thumb': {
            backgroundColor: 'primary.main',
          },
        }}
      />
    </Box>
  );
}

