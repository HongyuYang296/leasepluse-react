import { createTheme, Theme } from '@mui/material/styles';

const theme: Theme = createTheme({
  components: {
    MuiInputLabel: {  // Targeting label styles
        styleOverrides: {
          root: {
            color: 'black',  // Set label text color to black
            '&.Mui-focused': {
              color: 'black'  // Ensure the color remains black even when the input is focused
            }
          }
        }
      },

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
    MuiCheckbox: {
        styleOverrides: {
          root: {
            color: 'black',  // Default color
            '&.Mui-checked': {
              color: 'black',  // Color when the checkbox is checked
            }
          }
        }
      }
  },
});

export default theme;
