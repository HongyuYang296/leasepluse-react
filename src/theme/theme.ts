import { createTheme, Theme } from '@mui/material/styles';

// Create a theme instance with specific overrides and options.
const theme: Theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'black', // Change border color on hover
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'black', // Change border color when focused
          },
        },
        notchedOutline: {
          borderColor: 'black', // Default border color
        },
      },
    },
  },
});

export default theme;
