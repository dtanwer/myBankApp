import * as yup from "yup";
export const employeeSchema = yup.object().shape({
  bankId: yup.string().required("Bank is required"),
  name: yup
    .string()
    .required("Name is required")
    .matches(/^[^-\s\d][a-zA-Z\s-]+$/, "Please enter valid name"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter valid email")
    .matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, "Please enter valid email"),
  type: yup
  .string()
  .required("Type is required"),
});
