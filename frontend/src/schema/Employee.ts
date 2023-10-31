import * as yup from "yup";
export const employeeSchema = yup.object().shape({
  bankId: yup
    .object().shape({
      value: yup.string()
      .required("Bank is required"),

      label: yup.string()
      .required("Bank is required"),
    })
    .required("Bank is required"),
  name: yup
    .string()
    .required("Name is required")
    .matches(/^[^-\s\d][a-zA-Z\s-]+$/, "Please enter valid name"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter valid email")
    .matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, "Please enter valid email"),
  type : yup
    .object().shape({
      value: yup.string()
      .required("Type is required"),

      label: yup.string()
      .required("Type is required"),
    })
    .required("Type is required"),

});
