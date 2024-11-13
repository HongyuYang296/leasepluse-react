// src/pages/ContactPage.tsx
import React from 'react';
import { Box, Grid } from '@mui/material';

import ContactForm from '../components/CalculatorForm';

const SalaryCalculator: React.FC = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, fontFamily: 'Gill Sans' }}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <ContactForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SalaryCalculator;
