import { createTheme, Theme } from '@mui/material/styles';

const theme: Theme = createTheme({
  components: {
    MuiInputLabel: {
      // Customize label styles
      styleOverrides: {
        root: {
          color: '#aaa', // Light grey color for inactive labels
          '&.Mui-focused': {
            color: 'rgba(0, 0, 0, 0.87)' // Darker color when the TextField is focused
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'black' // Change border color on hover
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'black' // Change border color when focused
          }
        },
        notchedOutline: {
          borderColor: 'black' // Default border color
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: 'black', // Default color
          '&.Mui-checked': {
            color: 'black' // Color when the checkbox is checked
          }
        }
      }
    }
  }
});

export default theme;
