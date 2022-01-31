class Config {
  static loginUrl = "http://127.0.0.1:8000/api/gettoken/";
  static refreshApiUrl = "http://127.0.0.1:8000/api/refresh_token/";
  static companyApiUrl = "http://127.0.0.1:8000/api/company/";
  static homeApiUrl = "http://127.0.0.1:8000/api/home_api/";
  static companyBankApiUrl = "http://127.0.0.1:8000/api/companybank/";
  static companyOnly = "http://127.0.0.1:8000/api/companyonly/";
  static generateBillApiUrl = "http://127.0.0.1:8000/api/genereate_bill_api/";
  static medicineApiUrl = "http://127.0.0.1:8000/api/medicine/";
  static companyAccountApiUrl = "http://127.0.0.1:8000/api/companyaccount/";
  static employeeApiURL = "http://127.0.0.1:8000/api/employee/";
  // static employeeBankApiUrl = "http://127.0.0.1:8000/api/employeebank/";
  static employeeBankApiUrl = "http://127.0.0.1:8000/api/employee_all_bank/";
  static employeeBankApiUrlBYID =
    "http://127.0.0.1:8000/api/employee_bankby_id/";
  static employeeSalaryApiUrl =
    "http://127.0.0.1:8000/api/employee_all_salary/";
  static employeeSalaryByIdApiUrl =
    "http://127.0.0.1:8000/api/employee_salaryby_id/";
  static medicineNameApiUrl = "http://127.0.0.1:8000/api/medicinebyname/";
  static customerRequestApiUrl = "http://127.0.0.1:8000/api/customer_request/";

  static homeUrl = "/home";
  static logoutPageUrl = "/logout";

  static sidebarItem = [
    { index: "0", title: "home", url: "/home", icons: "fas fa-home" },
    { index: "1", title: "company", url: "/company" },
    { index: "2", title: "Add Medicine", url: "/addMedicine" },
    { index: "3", title: "Manage Medicine", url: "/manageMedicine" },
    {
      index: "4",
      title: "Manage Company Account",
      url: "/manageCompanyAccount",
    },
    { index: "5", title: "Manage Employee", url: "/manageEmployee" },
    { index: "6", title: "Generate Bill ", url: "/generateBill" },
    { index: "7", title: "Customer Request ", url: "/customerRequest" },
  ];
}

export default Config;
