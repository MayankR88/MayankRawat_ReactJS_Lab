function printEmployee2(empInfo) {
    console.log("".concat(empInfo.id, ", ").concat(empInfo.name, ", ").concat(empInfo.email));
}
var markEmp = {
    id: 1,
    name: 'Mark',
    email: 'mark@gmail.com'
};
printEmployee2(markEmp);
