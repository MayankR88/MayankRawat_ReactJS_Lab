interface ICustomer {

  customerId: number,
  customerName: string
} 

type EmployeeInfo = {

  id : number,
  name : string,
  email : string
}

function PrintEmployee2(empInfo : EmployeeInfo){

  console.log(`${empInfo.id}, ${empInfo.name}, ${empInfo.email}`);

}

let MarkEmp : EmployeeInfo = {
  id: 1,
  name: 'Mark',
  email : 'mark@gmail.com'
}

PrintEmployee2(MarkEmp);
