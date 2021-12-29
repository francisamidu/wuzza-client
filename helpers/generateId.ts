const { v4 } = require("uuid");

const generateId = () => {
  return v4();
};
export default generateId;
