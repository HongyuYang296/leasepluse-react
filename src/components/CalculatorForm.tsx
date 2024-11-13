import React from 'react';
import { Formik, Form } from 'formik';
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
  CardActions
} from '@mui/material';
import FormValidationSchema from '../utils/validationSchemas';
import { calculateSalaryPackage } from '../utils/apiService';
import { useSnackbar } from '../assets/contexts/SnackbarManager';

const formatNumber = (value: number) => {
  return new Intl.NumberFormat().format(value);
};

const initialValues = {
  salary: 0,
  companyType: '',
  employmentType: '',
  hoursWorked: 0,
  isEducated: false
};

const EmployeeForm: React.FC = () => {
  const { openSnackbar } = useSnackbar();

  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'background.default' }}
    >
      <Card sx={{ minWidth: 300, maxWidth: 500, boxShadow: 3, backgroundColor: '#f9f9f9' }}>
        <CardContent>
          <h3>Salary Calculator tool</h3>
          <Formik
            initialValues={initialValues}
            validationSchema={FormValidationSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              try {
                const result = await calculateSalaryPackage(values);
                openSnackbar('Salary Package Calculated Successfully!', 'success');
                console.log('Salary Package Calculated:', result);
                resetForm(); 
              } catch (error) {
                console.error('Failed to calculate salary package:', error);
                openSnackbar(`Failed to calculate salary package: ${error}`, 'error');
              }
              setSubmitting(false); 
            }}
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
                      type="number"
                      value={formatNumber(formik.values.salary)} // Format large numbers
                      onChange={e => {
                        // Remove any formatting when setting the value in Formik
                        formik.setFieldValue('salary', Number(e.target.value.replace(/,/g, '')));
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
                        inputProps={{ max: 38 }} // Limit maximum input to 38
                      />
                    </Grid>
                  )}
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          id="isEducated"
                          name="isEducated"
                          color="primary"
                          checked={formik.values.isEducated}
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
    </Box>
  );
};

export default EmployeeForm;
