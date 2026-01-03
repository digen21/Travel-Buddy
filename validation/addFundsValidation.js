import * as yup from 'yup';

export const addFundsValidationSchema = yup.object().shape({
  totalAmount: yup
    .string()
    .required('Amount is required')
    .test('is-greater-than-zero', 'Amount must be greater than 0', (value) => {
      const numValue = parseFloat(value);
      return !isNaN(numValue) && numValue > 0;
    }),
});