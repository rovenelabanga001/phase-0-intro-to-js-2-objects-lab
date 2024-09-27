// Write your solution in this file!
const employee = {
  name: "Katana",
  streetAdress: "11 Broadway",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newObj = { ...employee };
  newObj[key] = value;
  return newObj;
}

const destructivelyUpdateEmployeeWithKeyAndValue = function (
  employee,
  key,
  value
) {
  employee[key] = value;
  return employee;
};

const deleteFromEmployeeByKey = (employee, key) => {
  const newObj = { ...employee };
  delete newObj[key];
  return newObj;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

console.log(destructivelyDeleteFromEmployeeByKey(employee, "name"));
console.log(employee);