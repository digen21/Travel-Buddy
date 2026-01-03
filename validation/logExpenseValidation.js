import * as yup from "yup";

export const logExpenseValidationSchema = yup.object().shape({
  expenseAmount: yup
    .string()
    .required("Amount is required")
    .test("is-greater-than-zero", "Amount must be greater than 0", (value) => {
      const numValue = parseFloat(value);
      return !isNaN(numValue) && numValue > 0;
    }),
  place: yup.string().required("Place is required"),
  category: yup.string().required("Category is required"),
  description: yup
    .string()
    .optional()
    .max(200, "Description must be less than 200 characters"),
});
