import React from 'react';
import heroImage from '../assets/image/hero.png'; // Ensure the path is correct
import { Grid, Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material'; // Import necessary MUI components

import GitHubIcon from '@mui/icons-material/Github';
import CalculateIcon from '@mui/icons-material/Calculate';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.only('md'));
  const navigate = useNavigate();

  return (
    <Box component="main" py={4} px={2}>
      <Grid container spacing={4} alignItems="center">
        {/* Text and Links Section (Left side) */}
        <Grid item xs={12} md={isMediumScreen ? 6 : 7} lg={6}>
          <Typography
            variant="h2"
            component="h1"
            fontWeight="bold"
            gutterBottom
            fontSize={{ xs: '2rem', sm: '2.75rem', md: '3.5rem' }}
          >
            Sample task website done with React
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            Welcome to LeasePluse salary packaging calculator
          </Typography>

          <Box mt={3} textAlign="center">
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate('/SalaryCalculator')} // Use navigate to change path
              startIcon={<CalculateIcon />}
              fullWidth={isSmallScreen || isMediumScreen}
              sx={{ py: 1.5, mr: 2, mb: 2 }}
            >
              Start Calculate
            </Button>
            {/* GitHub Repo Button */}
            <Button
              variant="outlined"
              color="primary"
              href="https://github.com/HongyuYang296/openAgent-react.git"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<GitHubIcon />}
              fullWidth={isSmallScreen || isMediumScreen}
              sx={{ py: 1.5, mb: 2 }}
            >
              GitHub Repo
            </Button>
          </Box>
        </Grid>

        {/* Image Section (Right side) */}
        {!isSmallScreen && (
          <Grid item xs={12} md={isMediumScreen ? 6 : 5} lg={6}>
            <Box
              component="img"
              src={heroImage}
              alt="Astronaut in the air"
              loading="lazy"
              width="100%"
              sx={{ maxWidth: { xs: '100%', md: '450px', lg: '500px' } }}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Hero;
