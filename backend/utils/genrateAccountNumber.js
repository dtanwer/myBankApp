import generateUniqueId from "generate-unique-id";

const generateAccountNumber = () => generateUniqueId({length: 12,useLetters: false});

export default generateAccountNumber;