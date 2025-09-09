const employees = [
    { id:1, name:'John Doe', age:30, department:'IT', salary:5000,specialization:'Python' },
    { id:2, name:'Ahmed', age:21,department:'Software ENG',salary:15000,specialization:'Javascript' },
    { id:3, name:'Ali', age:22,department:'Design',salary:20000,specialization:'C++' },
    { id:4, name:'Alice Smith',age:28,department:'HR',salary:45000,specialization:'Java' },

];

function displayEmployees(){
    const employeesDet = employees
    .map(emp => `<p> ${emp.id}: ${emp.name} - ${emp.department} - $${emp.salary} </p>`)
    .join('');
    document.getElementById('employeesDetailes').innerHTML = employeesDet;
}

function calcTotalSalary(){
    const totalSalary = employees.reduce((acc,emp) => acc+emp.salary,0);
    alert(`Total Salary: $${totalSalary}`);
}

function displayHREmployees(){
    const hrEmployee = employees.filter(emp => emp.department === "HR");
    const hrEmployeeDis = hrEmployee.map(emp=>`<p> ${emp.id}: ${emp.name} - ${emp.department} - $${emp.salary} </p>`).join('');
    document.getElementById('employeesDetailes').innerHTML = hrEmployeeDis;
}

function findEmployeeByID(employeeID){
    const foundEmp = employees.find(emp => emp.id === employeeID);
    if(foundEmp){
      document.getElementById('employeesDetailes').innerHTML =`<p>${foundEmp.id}: ${foundEmp.name}: ${foundEmp.name} - ${foundEmp.department} - $${foundEmp.salary}</p>`;
    }
    else document.getElementById('employeesDetailes').innerHTML = 'no employee has been found with this ID';
}

function findJS(employeeSpc){
    const foundEmp = employees.find(emp => emp.specialization ===employeeSpc);
    if(foundEmp) document.getElementById('employeesDetailes').innerHTML =`<p>${foundEmp.id}: ${foundEmp.name} :- ${foundEmp.department} - $${foundEmp.salary}</p>`;
    else document.getElementById('employeesDetailes').innerHTML = 'no employee has been found with this ID';
}


