import * as yup from "yup";

export const SignUpschema = yup.object().shape({
  email: yup.string().email("Incorrect format").required("E-mail is required"),
  name: yup
    .string()
    .required("name is required")
    .matches(/^[^-\s\d][a-zA-Z\s-]+$/, "Please enter valid name"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "​Password must be at least 4 characters"),
  passwordConfirm: yup
    .string()
    .required("Passwords does not match")
    .oneOf([yup.ref("password"), ""], "Passwords must match"),
});


export const Loginschema = yup.object().shape({
  email: yup.string().email("Incorrect format").required("E-mail is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "​Password must be at least 4 characters"),
});
