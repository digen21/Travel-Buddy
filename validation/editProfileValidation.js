import * as yup from 'yup';

export const editProfileValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  phone: yup
    .string()
    .matches(/^[0-9+\-\s()]+$/, 'Please enter a valid phone number')
    .required('Phone number is required'),
  bio: yup
    .string()
    .max(200, 'Bio must be less than 200 characters'),
});