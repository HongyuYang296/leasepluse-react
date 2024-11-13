import * as Yup from 'yup';

const FormValidationSchema = Yup.object({
  salary: Yup.number().required('Salary is required'),
  companyType: Yup.string().required('Company type is required'),
  employmentType: Yup.string().required('Employment type is required'),
  hoursWorked: Yup.number()
    .max(38, 'Hours worked cannot exceed 38 hours per week')
    .when(['companyType', 'employmentType'], ([companyType, employmentType], schema) => {
      if (companyType === 'Corporate' && employmentType === 'Part-time') {
        return schema.required('Hours worked is required for part-time Corporate employees');
      }
      return schema.notRequired();
    }),
  isEducated: Yup.boolean(),
});

export default FormValidationSchema;
