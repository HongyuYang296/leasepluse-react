import axios from 'axios';
import { FormValues } from '../types/formTypes';

// Base URL for the API
const API_URL = 'http://backend:8080/api';

type OpenSnackbar = (message: string, type: 'success' | 'error') => void;

const calculateSalaryPackage = async (formData: FormValues, openSnackbar: OpenSnackbar) => {
  try {
    const response = await axios.post(`${API_URL}/calculate`, formData);
    openSnackbar('Salary Package Calculated Successfully!', 'success');
    return response.data;
  } catch (error) {
    console.error('Error while fetching salary package limit:', error);
    openSnackbar(`Failed to calculate salary package: ${error}`, 'error');
    return 0; // Return 0 instead of throwing an error as the requirements said
  }
};

export { calculateSalaryPackage };
