using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeList.Models
{
    [Table("Employee")]
    public class Employee
    {
        [Key]
        public int employeeID { get; set; }

        public string employeeName { get; set; }

        public string employeeJobPosition { get; set; }

        public string employeeCompany { get; set; }

        public string employeeMotto { get; set; }

        public string employeeHobbies { get; set; }

        public string employeeHometown { get; set; }

        public string employeeBlog { get; set; }

        public string employeePic { get; set; }
        public bool isActive { get; set; }
    }
}
