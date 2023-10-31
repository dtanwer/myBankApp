const getBanksOptions = (data: any) =>
  data.map((item: any) => ({ value: item._id, label: item.branchName }));
const typeOptions = [
  { label: "Employee", value: "employee" },
  { label: "Manager", value: "manager" },
  { label: "Accountant", value: "accountant" },
  { label: "Cashier", value: "cashier" },
];


export {
    getBanksOptions,
    typeOptions,
}