import React, { useState } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { FormValues } from '../types/formTypes';
import {
  TextField,
  MenuItem,
  Button,
  Box,
  Grid,
  Checkbox,
  FormControlLabel,
  Card,
  CardContent,
  CardActions,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography
} from '@mui/material';
import FormValidationSchema from '../utils/validationSchemas';
import { calculateSalaryPackage } from '../utils/apiService';
import { useSnackbar } from '../assets/contexts/SnackbarManager';


const formatCurrency = (value: number | string) => {
  if (value === '' || value === undefined || isNaN(Number(value))) return ''; 
  return `$${new Intl.NumberFormat().format(Number(value))}`; 
};


const initialValues = {
  salary: '',
  companyType: '',
  employmentType: '',
  hoursWorked: '',
  educated: false
};

const EmployeeForm: React.FC = () => {
  const { openSnackbar } = useSnackbar();
  const [openDialog, setOpenDialog] = useState(false);
  const [calculatedLimit, setCalculatedLimit] = useState<number>(0);

  const handleDialogClose = () => {
    setOpenDialog(false); // Close the dialog when the user clicks Close
  };

  // Handle form submission
  const handleFormSubmit = async (values: FormValues, { setSubmitting, resetForm }: FormikHelpers<FormValues>) => {
    try {
      const result = await calculateSalaryPackage(values, openSnackbar);
      console.log('Salary Package Calculated:', result);
      setCalculatedLimit(result);
      setOpenDialog(true);
      resetForm();
    } catch (error) {
      console.error('Failed to calculate salary package:', error);
    }
    setSubmitting(false);
  };

  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'background.default' }}
    >
      <Card sx={{ minWidth: 300, maxWidth: 500, boxShadow: 3, backgroundColor: '#f9f9f9' }}>
        <CardContent>
          <h2>Salary Packaging Limit Calculator</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={FormValidationSchema}
            validateOnChange={true}
            onSubmit={handleFormSubmit}
          >
            {formik => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="salary"
                      name="salary"
                      label="Salary"
                      type="text" // Set to text to allow formatted display with "$"
                      value={formatCurrency(formik.values.salary)} // Display formatted value with "$"
                      onChange={e => {
                        // Remove formatting symbols before saving to Formik state
                        const value = e.target.value.replace(/[$,]/g, ''); // Remove $ and commas
                        formik.setFieldValue('salary', value ? Number(value) : '');
                      }}
                      error={formik.touched.salary && Boolean(formik.errors.salary)}
                      helperText={formik.touched.salary && formik.errors.salary}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      id="companyType"
                      name="companyType"
                      label="Company Type"
                      select
                      value={formik.values.companyType}
                      onChange={formik.handleChange}
                      error={formik.touched.companyType && Boolean(formik.errors.companyType)}
                      helperText={formik.touched.companyType && formik.errors.companyType}
                    >
                      <MenuItem value="Corporate">Corporate</MenuItem>
                      <MenuItem value="Hospital">Hospital</MenuItem>
                      <MenuItem value="PBI">PBI</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      id="employmentType"
                      name="employmentType"
                      label="Employment Type"
                      select
                      value={formik.values.employmentType}
                      onChange={formik.handleChange}
                      error={formik.touched.employmentType && Boolean(formik.errors.employmentType)}
                      helperText={formik.touched.employmentType && formik.errors.employmentType}
                    >
                      <MenuItem value="Full-time">Full-time</MenuItem>
                      <MenuItem value="Part-time">Part-time</MenuItem>
                      <MenuItem value="Casual">Casual</MenuItem>
                    </TextField>
                  </Grid>
                  {/* Conditionally render Hours Worked based on companyType and employmentType */}
                  {formik.values.companyType === 'Corporate' && formik.values.employmentType === 'Part-time' && (
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="hoursWorked"
                        name="hoursWorked"
                        label="Hours Worked per Week"
                        type="number"
                        value={formik.values.hoursWorked}
                        onChange={formik.handleChange}
                        error={formik.touched.hoursWorked && Boolean(formik.errors.hoursWorked)}
                        helperText={formik.touched.hoursWorked && formik.errors.hoursWorked}
                      
                      />
                    </Grid>
                  )}
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          id="educated"
                          name="educated"
                          color="primary"
                          checked={formik.values.educated}
                          onChange={formik.handleChange}
                        />
                      }
                      label="Is Educated?"
                    />
                  </Grid>
                </Grid>
                <CardActions>
                  <Button
                    type="submit"
                    disabled={formik.isSubmitting}
                    variant="contained"
                    sx={{
                      backgroundColor: 'black',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)'
                      }
                    }}
                    fullWidth
                  >
                    Calculate
                  </Button>
                </CardActions>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
      {/* Dialog to display the calculated result */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Salary Package Result</DialogTitle>
        <DialogContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '24px'
          }}
        >
          <Typography gutterBottom sx={{ textAlign: 'center' }}>
            The calculated salary package limit is:
          </Typography>
          <Card
            sx={{
              backgroundColor: '#f5f5f5',
              mt: 2,
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '8px 16px',
              borderRadius: '8px',
              minWidth: 'fit-content'
            }}
          >
            <Typography variant="h5" fontWeight="bold" color="primary" sx={{ textAlign: 'center' }}>
              ${calculatedLimit.toFixed(2)}
            </Typography>
          </Card>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleDialogClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default EmployeeForm;
