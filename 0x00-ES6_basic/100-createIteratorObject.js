export default function createIteratorObject(report) {
  // initialize empployees
  const Allemployees = [];
// get all the values of the employees
  for (const department of Object.keys(report.allEmployees)) {
    // push all the departmentinto all the employees list
		for (const employee of report.allEmployees[department]) {
      Allemployees.push(employee);
    }
  }

  return Allemployees;
}