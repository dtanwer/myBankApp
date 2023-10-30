import * as yup from "yup";
export const addressSchema = yup.object().shape({
    street: yup
        .string()
        .required("Street is required")
        .matches(/^[^-\s\d][a-zA-Z\s-]+$/, "Please enter valid street name"),
    city: yup
        .string()
        .required("City is required")
        .matches(/^[^-\s\d][a-zA-Z\s-]+$/, "Please enter valid city name"),
    state: yup
        .string()
        .required("State is required")
        .matches(/^[^-\s\d][a-zA-Z\s-]+$/, "Please enter valid state name"),
    country: yup
        .string()
        .required("Country is required")
        .matches(/^[^-\s\d][a-zA-Z\s-]+$/, "Please enter valid country name"),
    pincode: yup
        .string()
        .required("Pincode is required")
        .matches(/^[0-9]{6}$/, "Please enter valid pincode"),
});

export const Bankschema = yup.object().shape({
  bankName: yup
    .string()
    .required("Bank name is required")
    .matches(/^[^-\s\d][a-zA-Z\s-]+$/, "Please enter valid bank name"),
  branchName: yup
    .string()
    .required("Branch name is required")
    .matches(/^[^-\s\d][a-zA-Z\s-]+$/, "Please enter valid branch name"),
  ifscCode: yup
    .string()
    .required("IFSC code is required")
    .matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Please enter valid IFSC Code"),
});

