export type signUpFormDataType ={
    email: string;
    name: string;
    password: string;
    passwordConfirm: string;
}

export type loginFormDataType ={
    email: string;
    password: string;
}

export type BankFormDataType ={
    bankName: string;
    branchName: string;
    ifscCode: string;
    address?: string;
}

export type AddressFormDataType ={
    street: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
}

export type EmployeeFormDataType ={
    bankId: string;
    name: string;
    email: string;
    type: string;
}
