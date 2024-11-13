import axios from 'axios';
import { FormValues } from '../types/formTypes';

// Base URL for the API
const API_URL = 'http://localhost:8001/api';

// Function to calculate salary packaging limit
const calculateSalaryPackage = async (formData: FormValues) => {
  try {
    const response = await axios.post(`${API_URL}/calculate`, formData);
    return response.data; // Assuming the backend sends back the calculated limit
  } catch (error) {
    console.error('Error while fetching salary package limit:', error);
    throw error; // Rethrowing the error to be handled by the calling component
  }
};

export { calculateSalaryPackage };
